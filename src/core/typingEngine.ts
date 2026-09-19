import { CharacterState, KeystrokeEvent, LiveTypingMetrics } from '../types/typing'
import { calculateAccuracy, calculateGrossWpm, calculateNetWpm, calculateConsistency } from '../lib/utils'

export class TypingEngine {
  private targetText: string = ''
  private inputBuffer: string = ''
  private startTime: number | null = null
  private endTime: number | null = null
  private keystrokeLog: KeystrokeEvent[] = []
  private keyMetrics: Record<string, { total: number; errors: number; latencies: number[] }> = {}
  private backspaceCount: number = 0
  private lastKeystrokeTime: number = 0
  private intervalsMs: number[] = []

  constructor(targetText: string = '') {
    this.reset(targetText)
  }

  public reset(newTargetText?: string) {
    if (newTargetText !== undefined) {
      this.targetText = newTargetText.trim()
    }
    this.inputBuffer = ''
    this.startTime = null
    this.endTime = null
    this.keystrokeLog = []
    this.keyMetrics = {}
    this.backspaceCount = 0
    this.lastKeystrokeTime = 0
    this.intervalsMs = []
  }

  public start() {
    if (!this.startTime) {
      this.startTime = Date.now()
      this.lastKeystrokeTime = this.startTime
    }
  }

  public handleKeyDown(key: string, isBackspace: boolean = false): { isCompleted: boolean; metrics: LiveTypingMetrics } {
    const now = Date.now()
    if (!this.startTime) {
      this.startTime = now
      this.lastKeystrokeTime = now
    }

    const elapsedMs = now - this.startTime
    const interval = now - this.lastKeystrokeTime
    this.lastKeystrokeTime = now

    if (interval > 0 && interval < 5000) {
      this.intervalsMs.push(interval)
    }

    if (isBackspace) {
      this.backspaceCount++
      if (this.inputBuffer.length > 0) {
        this.inputBuffer = this.inputBuffer.slice(0, -1)
      }
      this.keystrokeLog.push({
        key: 'Backspace',
        expectedChar: '',
        timestamp: elapsedMs,
        isError: false,
        isBackspace: true,
        wpmAtInstant: this.getLiveMetrics().netWpm
      })
      return { isCompleted: false, metrics: this.getLiveMetrics() }
    }

    // Ignore non-printable modifier keys
    if (key.length > 1 && key !== 'Enter') {
      return { isCompleted: false, metrics: this.getLiveMetrics() }
    }

    const currentIndex = this.inputBuffer.length
    const expectedChar = currentIndex < this.targetText.length ? this.targetText[currentIndex] : ''
    const isError = key !== expectedChar

    this.inputBuffer += key

    // Key metrics for heatmap
    const normalizedKey = key.toLowerCase()
    if (!this.keyMetrics[normalizedKey]) {
      this.keyMetrics[normalizedKey] = { total: 0, errors: 0, latencies: [] }
    }
    this.keyMetrics[normalizedKey].total++
    if (isError) {
      this.keyMetrics[normalizedKey].errors++
    }
    if (interval < 2000) {
      this.keyMetrics[normalizedKey].latencies.push(interval)
    }

    const currentWpm = this.getLiveMetrics().netWpm

    this.keystrokeLog.push({
      key,
      expectedChar,
      timestamp: elapsedMs,
      isError,
      isBackspace: false,
      wpmAtInstant: currentWpm
    })

    const isCompleted = this.inputBuffer.length >= this.targetText.length
    if (isCompleted && !this.endTime) {
      this.endTime = now
    }

    return {
      isCompleted,
      metrics: this.getLiveMetrics()
    }
  }

  public getCharacterStates(): CharacterState[] {
    const states: CharacterState[] = []
    const targetChars = this.targetText.split('')
    const inputChars = this.inputBuffer.split('')

    for (let i = 0; i < targetChars.length; i++) {
      if (i < inputChars.length) {
        const typedChar = inputChars[i]
        const expectedChar = targetChars[i]
        states.push({
          char: expectedChar,
          state: typedChar === expectedChar ? 'correct' : 'incorrect',
          typedChar
        })
      } else {
        states.push({
          char: targetChars[i],
          state: 'pending'
        })
      }
    }

    // Handle extra overflow characters typed past target text
    if (inputChars.length > targetChars.length) {
      for (let i = targetChars.length; i < inputChars.length; i++) {
        states.push({
          char: inputChars[i],
          state: 'extra',
          typedChar: inputChars[i]
        })
      }
    }

    return states
  }

  public getLiveMetrics(): LiveTypingMetrics {
    const now = this.endTime || (this.startTime ? Date.now() : Date.now())
    const elapsedSeconds = this.startTime ? Math.max(0.1, (now - this.startTime) / 1000) : 0

    let correctChars = 0
    let incorrectChars = 0
    const targetChars = this.targetText.split('')
    const inputChars = this.inputBuffer.split('')

    for (let i = 0; i < inputChars.length; i++) {
      if (i < targetChars.length) {
        if (inputChars[i] === targetChars[i]) {
          correctChars++
        } else {
          incorrectChars++
        }
      } else {
        incorrectChars++
      }
    }

    const grossWpm = calculateGrossWpm(inputChars.length, elapsedSeconds)
    const netWpm = calculateNetWpm(correctChars, elapsedSeconds)
    const cpm = Math.round(elapsedSeconds > 0 ? (correctChars / (elapsedSeconds / 60)) : 0)
    const accuracy = calculateAccuracy(correctChars, inputChars.length)
    const consistencyScore = calculateConsistency(this.intervalsMs)
    const progressPercent = this.targetText.length > 0 
      ? Math.min(100, Math.round((this.inputBuffer.length / this.targetText.length) * 100))
      : 0

    return {
      grossWpm,
      netWpm,
      cpm,
      accuracy,
      elapsedSeconds: Math.round(elapsedSeconds * 10) / 10,
      correctChars,
      incorrectChars,
      extraChars: Math.max(0, inputChars.length - targetChars.length),
      backspaceCount: this.backspaceCount,
      consistencyScore,
      progressPercent
    }
  }

  public getFinalKeyMetrics(): Record<string, { total: number; errors: number; avgLatencyMs: number }> {
    const result: Record<string, { total: number; errors: number; avgLatencyMs: number }> = {}
    for (const [key, val] of Object.entries(this.keyMetrics)) {
      const avgLatency = val.latencies.length > 0 
        ? Math.round(val.latencies.reduce((a, b) => a + b, 0) / val.latencies.length) 
        : 0
      result[key] = {
        total: val.total,
        errors: val.errors,
        avgLatencyMs: avgLatency
      }
    }
    return result
  }

  public getWeakKeys(): string[] {
    const weak: { key: string; errorRate: number }[] = []
    for (const [key, val] of Object.entries(this.keyMetrics)) {
      if (val.total >= 2) {
        const errorRate = val.errors / val.total
        if (errorRate >= 0.25) {
          weak.push({ key, errorRate })
        }
      }
    }
    return weak.sort((a, b) => b.errorRate - a.errorRate).slice(0, 5).map(w => w.key)
  }

  public getKeystrokeLog(): KeystrokeEvent[] {
    return [...this.keystrokeLog]
  }

  public getInputBuffer(): string {
    return this.inputBuffer
  }

  public getTargetText(): string {
    return this.targetText
  }
}
