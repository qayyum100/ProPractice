import React, { useRef, useEffect, useState } from 'react'
import { TypingEngine } from '../../core/typingEngine'
import { soundFx } from '../../lib/sound'
import { CharacterState, LiveTypingMetrics } from '../../types/typing'
import { Lock } from 'lucide-react'

interface TypingAreaProps {
  text: string
  engine: TypingEngine
  onMetricsUpdate: (metrics: LiveTypingMetrics) => void
  onComplete: () => void
  disabled?: boolean
  blindMode?: boolean
}

export const TypingArea: React.FC<TypingAreaProps> = ({
  text,
  engine,
  onMetricsUpdate,
  onComplete,
  disabled = false,
  blindMode = false
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [charStates, setCharStates] = useState<CharacterState[]>([])
  const [isFocused, setIsFocused] = useState<boolean>(true)
  const activeCharRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    engine.reset(text)
    setCharStates(engine.getCharacterStates())
    if (inputRef.current && !disabled) {
      inputRef.current.focus()
    }
  }, [text, engine, disabled])

  // Keep focus locked to typing area
  const focusInput = () => {
    if (inputRef.current && !disabled) {
      inputRef.current.focus()
      setIsFocused(true)
    }
  }

  // Scroll active char into view smoothly if long text
  useEffect(() => {
    if (activeCharRef.current && containerRef.current) {
      const container = containerRef.current
      const activeChar = activeCharRef.current
      const containerRect = container.getBoundingClientRect()
      const charRect = activeChar.getBoundingClientRect()

      if (charRect.bottom > containerRect.bottom - 40 || charRect.top < containerRect.top + 20) {
        activeChar.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [charStates])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return

    // Quick restart shortcut: Tab + Enter
    if (e.key === 'Tab') {
      e.preventDefault()
      return
    }

    if (e.key === 'Backspace') {
      e.preventDefault()
      const result = engine.handleKeyDown('', true)
      setCharStates(engine.getCharacterStates())
      onMetricsUpdate(result.metrics)
      soundFx.playKeyClick()
      return
    }

    if (e.key.length === 1 || e.key === 'Enter') {
      e.preventDefault()
      const result = engine.handleKeyDown(e.key)
      setCharStates(engine.getCharacterStates())
      onMetricsUpdate(result.metrics)

      const lastCharIndex = engine.getInputBuffer().length - 1
      const currentStates = engine.getCharacterStates()
      const lastState = currentStates[lastCharIndex]?.state

      if (lastState === 'incorrect' || lastState === 'extra') {
        soundFx.playErrorSound()
      } else {
        soundFx.playKeyClick()
      }

      if (result.isCompleted) {
        onComplete()
      }
    }
  }

  // Prevent paste attempts
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
  }

  const currentIndex = engine.getInputBuffer().length

  return (
    <div
      ref={containerRef}
      onClick={focusInput}
      className="relative w-full min-h-[180px] max-h-[300px] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-neutral-50/70 dark:bg-[#101014] border border-neutral-200/80 dark:border-[#202028] transition-all cursor-text select-none"
    >
      {/* Hidden input to capture keystrokes on desktop & mobile */}
      <input
        ref={inputRef}
        type="text"
        className="absolute opacity-0 pointer-events-none -top-10 left-0"
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoFocus
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
      />

      {/* Focus Loss Overlay */}
      {!isFocused && !disabled && (
        <div className="absolute inset-0 z-20 backdrop-blur-[2px] bg-black/10 dark:bg-black/30 flex items-center justify-center rounded-3xl animate-fade-in">
          <div className="px-4 py-2 rounded-xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-700 shadow-lg flex items-center gap-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
            <Lock className="w-3.5 h-3.5 text-sky-500" />
            <span>Click here to focus and resume typing</span>
          </div>
        </div>
      )}

      {/* Text Render Area with Characters */}
      <div className="text-xl sm:text-2xl md:text-3xl font-mono leading-relaxed sm:leading-loose tracking-wide break-words">
        {charStates.map((item, idx) => {
          const isCurrent = idx === currentIndex
          let charColor = 'text-neutral-400 dark:text-neutral-600' // Pending

          if (blindMode) {
            if (item.state === 'correct' || item.state === 'incorrect') {
              charColor = 'text-neutral-800 dark:text-neutral-200'
            }
          } else {
            if (item.state === 'correct') {
              charColor = 'text-emerald-600 dark:text-emerald-400'
            } else if (item.state === 'incorrect') {
              charColor = 'text-red-500 dark:text-red-400 bg-red-500/10 rounded px-0.5'
            } else if (item.state === 'extra') {
              charColor = 'text-amber-500 bg-amber-500/10 rounded px-0.5'
            }
          }

          return (
            <span
              key={idx}
              ref={isCurrent ? activeCharRef : undefined}
              className={`relative inline-block transition-colors duration-75 ${charColor}`}
            >
              {isCurrent && !disabled && (
                <span className="absolute -left-[1px] top-1 bottom-1 w-[2.5px] bg-sky-500 dark:bg-sky-400 rounded-full animate-pulse-subtle" />
              )}
              {item.char === ' ' ? '\u00A0' : item.char}
            </span>
          )
        })}

        {/* Trailing Caret at the end of input if complete */}
        {currentIndex >= charStates.length && !disabled && (
          <span className="inline-block w-[2.5px] h-6 bg-sky-500 align-middle animate-pulse-subtle ml-0.5" />
        )}
      </div>
    </div>
  )
}
