import React, { useState, useEffect, useRef, useMemo } from 'react'
import { CodeSnippet, IdeThemeId, IDE_THEMES } from '../../data/codeSnippets'
import { RotateCcw, CheckCircle, Timer, Palette, Flame } from 'lucide-react'

export type PracticeMode = 'full' | '30s' | '60s'

interface CodeTypingAreaProps {
  snippet: CodeSnippet
  themeId?: IdeThemeId
  onThemeChange?: (themeId: IdeThemeId) => void
  onFinish?: (stats: {
    wpm: number
    accuracy: number
    symbolAccuracy: number
    durationSeconds: number
    missedSymbolsMap: Record<string, number>
  }) => void
}

export const CodeTypingArea: React.FC<CodeTypingAreaProps> = ({
  snippet,
  themeId = 'vscode-dark',
  onThemeChange,
  onFinish,
}) => {
  const [userInput, setUserInput] = useState('')
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)
  const [isFinished, setIsFinished] = useState(false)
  const [errorCount, setErrorCount] = useState(0)
  const [symbolErrorCount, setSymbolErrorCount] = useState(0)
  const [missedSymbolsMap, setMissedSymbolsMap] = useState<Record<string, number>>({})

  // Mode and Timer state
  const [mode, setMode] = useState<PracticeMode>('full')
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const activeTheme = IDE_THEMES[themeId] || IDE_THEMES['vscode-dark']
  const targetCode = snippet.code

  // Timer Countdown Effect for Sprint Modes
  useEffect(() => {
    if (!startTime || isFinished || mode === 'full') return

    const timerVal = mode === '30s' ? 30 : 60
    setTimeLeft(timerVal)

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      const remaining = Math.max(0, timerVal - elapsed)
      setTimeLeft(remaining)

      if (remaining <= 0) {
        clearInterval(interval)
        finishSession(Date.now())
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [startTime, isFinished, mode])

  // Reset state when snippet or mode changes
  useEffect(() => {
    resetState()
  }, [snippet, mode])

  const resetState = () => {
    setUserInput('')
    setStartTime(null)
    setEndTime(null)
    setIsFinished(false)
    setErrorCount(0)
    setSymbolErrorCount(0)
    setMissedSymbolsMap({})
    setTimeLeft(mode === '30s' ? 30 : mode === '60s' ? 60 : null)
    if (inputRef.current) inputRef.current.focus()
  }

  const handleContainerClick = () => {
    if (inputRef.current) inputRef.current.focus()
  }

  const finishSession = (finishTimestamp: number) => {
    setEndTime(finishTimestamp)
    setIsFinished(true)

    if (onFinish && startTime) {
      const durationSec = Math.max(1, (finishTimestamp - startTime) / 1000)
      const words = userInput.length / 5
      const wpm = Math.round((words / durationSec) * 60)
      const totalTyped = userInput.length + errorCount
      const accuracy = Math.max(0, Math.round(((userInput.length - errorCount) / Math.max(1, totalTyped)) * 100))
      const symbolAccuracy = Math.max(
        0,
        Math.round(((snippet.symbolCount - symbolErrorCount) / Math.max(1, snippet.symbolCount)) * 100)
      )

      onFinish({
        wpm,
        accuracy,
        symbolAccuracy,
        durationSeconds: Math.round(durationSec),
        missedSymbolsMap,
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isFinished) return

    const val = e.target.value
    const now = Date.now()

    if (!startTime && val.length > 0) {
      setStartTime(now)
    }

    // Symbol error & missed key tracking
    if (val.length > userInput.length) {
      const addedChar = val[val.length - 1]
      const expectedChar = targetCode[val.length - 1]
      const isSymbol = /[{}()[\]<>=;:!?&|.+\-*\/@#$^%\\~`"']/.test(expectedChar || '')

      if (addedChar !== expectedChar) {
        setErrorCount((prev) => prev + 1)
        if (isSymbol) {
          setSymbolErrorCount((prev) => prev + 1)
          setMissedSymbolsMap((prev) => ({
            ...prev,
            [expectedChar]: (prev[expectedChar] || 0) + 1,
          }))
        }
      }
    }

    setUserInput(val)

    // Check full snippet completion
    if (val.length >= targetCode.length) {
      finishSession(now)
    }
  }

  // Live Stats calculations
  const stats = useMemo(() => {
    if (!startTime) return { wpm: 0, accuracy: 100, elapsedSec: 0 }
    const now = endTime || Date.now()
    const elapsedSec = Math.max(1, (now - startTime) / 1000)
    const words = userInput.length / 5
    const wpm = Math.round((words / elapsedSec) * 60)
    const accuracy = userInput.length === 0 ? 100 : Math.max(0, Math.round(((userInput.length - errorCount) / userInput.length) * 100))
    return { wpm, accuracy, elapsedSec: Math.round(elapsedSec) }
  }, [userInput, startTime, endTime, errorCount])

  const lines = targetCode.split('\n')

  return (
    <div className="space-y-4">
      {/* Top Bar / Controls & Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-xl">
        <div className="flex items-center gap-4 sm:gap-6">
          <div>
            <div className="text-[10px] font-mono uppercase text-neutral-400">Speed</div>
            <div className="text-xl font-bold font-mono text-sky-400">
              {stats.wpm} <span className="text-xs text-neutral-500 font-sans">WPM</span>
            </div>
          </div>

          <div className="w-px h-8 bg-neutral-800" />

          <div>
            <div className="text-[10px] font-mono uppercase text-neutral-400">Accuracy</div>
            <div className="text-xl font-bold font-mono text-emerald-400">{stats.accuracy}%</div>
          </div>

          <div className="w-px h-8 bg-neutral-800" />

          <div>
            <div className="text-[10px] font-mono uppercase text-neutral-400">
              {mode === 'full' ? 'Symbol Errors' : 'Time Left'}
            </div>
            <div className="text-xl font-bold font-mono text-purple-400">
              {mode === 'full' ? symbolErrorCount : `${timeLeft ?? 0}s`}
            </div>
          </div>
        </div>

        {/* Mode Selector & Theme Switcher & Reset */}
        <div className="flex items-center gap-2">
          {/* Mode Selector Pills */}
          <div className="flex items-center p-1 rounded-xl bg-neutral-800 border border-neutral-700 text-xs">
            {(['full', '30s', '60s'] as PracticeMode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                  mode === m ? 'bg-purple-600 text-white shadow-xs' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {m === 'full' ? 'Full' : m}
              </button>
            ))}
          </div>

          {/* Theme Dropdown */}
          {onThemeChange && (
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">
              <Palette className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <select
                value={themeId}
                onChange={(e) => onThemeChange(e.target.value as IdeThemeId)}
                className="bg-transparent text-white font-mono text-xs focus:outline-none cursor-pointer"
              >
                {Object.values(IDE_THEMES).map((t) => (
                  <option key={t.id} value={t.id} className="bg-neutral-900 text-white">
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            onClick={resetState}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Code Editor Window with Theme Styling */}
      <div
        onClick={handleContainerClick}
        className={`relative min-h-[260px] rounded-2xl ${activeTheme.bg} ${activeTheme.text} font-mono text-sm border ${activeTheme.border} shadow-2xl p-4 overflow-hidden cursor-text select-none group transition-colors duration-200`}
      >
        <textarea
          ref={inputRef}
          value={userInput}
          onChange={handleInputChange}
          className="absolute inset-0 opacity-0 cursor-default resize-none pointer-events-auto"
          autoFocus
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
        />

        {/* Top Window Bar */}
        <div className={`flex items-center justify-between border-b ${activeTheme.lineNumbers} pb-3 mb-3`}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs font-mono opacity-80">{snippet.title}</span>
          </div>
          <span className="text-[11px] opacity-60 font-mono">{activeTheme.name} Theme</span>
        </div>

        {/* Code Content Container */}
        <div className="flex leading-relaxed overflow-x-auto pt-1">
          {/* Line Numbers */}
          <div className={`pr-4 text-right select-none text-xs border-r ${activeTheme.lineNumbers} mr-4`}>
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Character Renderer */}
          <div className="flex-1 whitespace-pre font-mono">
            {targetCode.split('').map((char, index) => {
              const isTyped = index < userInput.length
              const typedChar = userInput[index]
              const isCorrect = isTyped && typedChar === char
              const isCurrent = index === userInput.length

              return (
                <span
                  key={index}
                  className={`relative ${
                    isCurrent
                      ? `${activeTheme.currentLine} rounded-xs ring-1 animate-pulse`
                      : isTyped
                      ? isCorrect
                        ? `${activeTheme.correctText} font-semibold`
                        : `${activeTheme.errorBg} underline`
                      : 'opacity-40'
                  }`}
                >
                  {char}
                </span>
              )
            })}
          </div>
        </div>

        {/* Completion Banner */}
        {isFinished && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-emerald-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-xs font-bold">Coding Session Completed!</div>
                <div className="text-[11px] opacity-80">
                  Speed: {stats.wpm} WPM | Accuracy: {stats.accuracy}%
                </div>
              </div>
            </div>
            <button
              onClick={resetState}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-neutral-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
            >
              Practice Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
