import { KeystrokeEvent } from '../types/typing'

export interface ReplayState {
  currentText: string
  currentKeystrokeIndex: number
  currentTimeMs: number
  totalDurationMs: number
  isPlaying: boolean
  speedMultiplier: number
  wpmAtInstant: number
  errorCount: number
}

export class FlightReplayController {
  private log: KeystrokeEvent[] = []
  private targetText: string = ''
  private currentIndex: number = 0
  private isPlaying: boolean = false
  private speedMultiplier: number = 1
  private timerId: number | null = null
  private onStateChange: ((state: ReplayState) => void) | null = null
  private constructedText: string = ''
  private currentErrorCount: number = 0

  constructor(targetText: string, log: KeystrokeEvent[]) {
    this.targetText = targetText
    this.log = log.sort((a, b) => a.timestamp - b.timestamp)
  }

  public subscribe(callback: (state: ReplayState) => void) {
    this.onStateChange = callback
    this.emitState()
  }

  public setSpeed(speed: number) {
    this.speedMultiplier = speed
    if (this.isPlaying) {
      this.pause()
      this.play()
    }
  }

  public play() {
    if (this.isPlaying || this.log.length === 0) return
    this.isPlaying = true
    this.step()
  }

  public pause() {
    this.isPlaying = false
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId)
      this.timerId = null
    }
    this.emitState()
  }

  public restart() {
    this.pause()
    this.currentIndex = 0
    this.constructedText = ''
    this.currentErrorCount = 0
    this.emitState()
  }

  private step() {
    if (!this.isPlaying) return

    if (this.currentIndex >= this.log.length) {
      this.isPlaying = false
      this.emitState()
      return
    }

    const currentEvent = this.log[this.currentIndex]
    
    if (currentEvent.isBackspace) {
      this.constructedText = this.constructedText.slice(0, -1)
    } else {
      this.constructedText += currentEvent.key
      if (currentEvent.isError) {
        this.currentErrorCount++
      }
    }

    this.currentIndex++
    this.emitState()

    if (this.currentIndex < this.log.length) {
      const nextEvent = this.log[this.currentIndex]
      const deltaMs = Math.max(10, (nextEvent.timestamp - currentEvent.timestamp) / this.speedMultiplier)
      this.timerId = window.setTimeout(() => this.step(), deltaMs)
    } else {
      this.isPlaying = false
      this.emitState()
    }
  }

  private emitState() {
    if (!this.onStateChange) return
    const currentEvent = this.currentIndex > 0 ? this.log[this.currentIndex - 1] : null
    const totalDuration = this.log.length > 0 ? this.log[this.log.length - 1].timestamp : 0

    this.onStateChange({
      currentText: this.constructedText,
      currentKeystrokeIndex: this.currentIndex,
      currentTimeMs: currentEvent ? currentEvent.timestamp : 0,
      totalDurationMs: totalDuration,
      isPlaying: this.isPlaying,
      speedMultiplier: this.speedMultiplier,
      wpmAtInstant: currentEvent ? currentEvent.wpmAtInstant : 0,
      errorCount: this.currentErrorCount
    })
  }

  public destroy() {
    this.pause()
    this.onStateChange = null
  }
}
