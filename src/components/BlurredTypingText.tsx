import React, { useState, useEffect, useRef } from 'react'

export interface BlurredPhrase {
  prefix: string
  suffix: string
}

interface BlurredTypingTextProps {
  /** Array of phrases to loop through */
  phrases?: BlurredPhrase[]
  /** Typing speed in ms per character. Default: 50ms */
  typingSpeed?: number
  /** Deleting speed in ms per character. Default: 25ms */
  deletingSpeed?: number
  /** Pause duration when phrase is fully typed (ms). Default: 2200ms */
  holdDuration?: number
  /** Delay before starting next phrase after deleting (ms). Default: 300ms */
  pauseBeforeNext?: number
  /** Additional wrapper className */
  className?: string
  /** ClassName applied to prefix text (e.g. 'Type better.') */
  prefixClassName?: string
  /** ClassName applied to suffix text (e.g. 'Think faster.') */
  suffixClassName?: string
}

const DEFAULT_PHRASES: BlurredPhrase[] = [
  { prefix: 'Type better.', suffix: 'Think faster.' },
  { prefix: 'Code cleaner.', suffix: 'Ship quicker.' },
  { prefix: 'Think clearly.', suffix: 'Express faster.' },
  { prefix: 'Practice daily.', suffix: 'Master fluency.' },
]

export const BlurredTypingText: React.FC<BlurredTypingTextProps> = ({
  phrases = DEFAULT_PHRASES,
  typingSpeed = 55,
  deletingSpeed = 28,
  holdDuration = 2400,
  pauseBeforeNext = 350,
  className = '',
  prefixClassName = 'text-neutral-900 dark:text-white',
  suffixClassName = 'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400',
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [typedCount, setTypedCount] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isHolding, setIsHolding] = useState(false)

  const currentPhrase = phrases[phraseIndex % phrases.length]
  const fullText = `${currentPhrase.prefix} ${currentPhrase.suffix}`
  const prefixLength = currentPhrase.prefix.length
  // Split index where prefix ends and suffix begins (accounting for the space)
  const splitIndex = prefixLength + 1

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Clear any previous timer
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (isHolding) {
      // Hold completed text in crisp focus
      timeoutRef.current = setTimeout(() => {
        setIsHolding(false)
        setIsDeleting(true)
      }, holdDuration)
      return
    }

    if (isDeleting) {
      if (typedCount > 0) {
        // Quick deleting with blur
        timeoutRef.current = setTimeout(() => {
          setTypedCount((prev) => prev - 1)
        }, deletingSpeed)
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false)
        timeoutRef.current = setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }, pauseBeforeNext)
      }
      return
    }

    // Typing forwards
    if (typedCount < fullText.length) {
      timeoutRef.current = setTimeout(() => {
        setTypedCount((prev) => prev + 1)
      }, typingSpeed + (Math.random() * 20 - 10)) // subtle humanized typing cadence
    } else {
      // Reached full text
      setIsHolding(true)
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [typedCount, isDeleting, isHolding, fullText, phrases.length, typingSpeed, deletingSpeed, holdDuration, pauseBeforeNext])

  // Split current visible characters into prefix and suffix
  const visibleText = fullText.slice(0, typedCount)
  const visiblePrefix = visibleText.slice(0, prefixLength)
  const visibleSuffix = typedCount > splitIndex ? visibleText.slice(splitIndex) : ''
  const hasSpace = typedCount > prefixLength

  return (
    <span className={`inline-block tracking-tight select-none ${className}`}>
      {/* Prefix Part (e.g. "Type better.") */}
      <span className={`inline ${prefixClassName}`}>
        {visiblePrefix.split('').map((char, i) => {
          const isLatest = !isDeleting && i === visiblePrefix.length - 1 && typedCount <= prefixLength
          return (
            <span
              key={`p-${phraseIndex}-${i}`}
              className={`inline-block transition-all duration-150 ${
                isLatest ? 'animate-blur-type' : ''
              }`}
              style={{
                willChange: 'filter, opacity, transform',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          )
        })}
      </span>

      {/* Space between prefix and suffix if line wraps on mobile or is typed */}
      {hasSpace && <span className="inline sm:hidden">&nbsp;</span>}
      {hasSpace && <span className="hidden sm:inline">&nbsp;</span>}

      {/* Suffix Part (e.g. "Think faster.") */}
      <span className={`inline ${suffixClassName}`}>
        {visibleSuffix.split('').map((char, i) => {
          const isLatest = !isDeleting && i === visibleSuffix.length - 1
          return (
            <span
              key={`s-${phraseIndex}-${i}`}
              className={`inline-block transition-all duration-150 ${
                isLatest ? 'animate-blur-type' : ''
              }`}
              style={{
                willChange: 'filter, opacity, transform',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          )
        })}
      </span>

      {/* Glowing Pulsing Caret */}
      <span
        className="inline-block w-[3px] h-[0.9em] ml-1 align-baseline bg-sky-500 rounded-full animate-smooth-blink shadow-[0_0_8px_rgba(56,189,248,0.7)]"
        aria-hidden="true"
      />
    </span>
  )
}
