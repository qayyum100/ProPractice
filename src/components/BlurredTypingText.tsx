import React, { useState, useEffect, useRef } from 'react'

interface BlurredTypingTextProps {
  /** Words or phrases to loop through */
  words?: string[]
  /** Typing speed in ms per character. Default: 50ms */
  typingSpeed?: number
  /** Deleting speed in ms per character. Default: 25ms */
  deletingSpeed?: number
  /** Pause duration when word is fully typed (ms). Default: 2200ms */
  holdDuration?: number
  /** Delay before starting next word after deleting (ms). Default: 300ms */
  pauseBeforeNext?: number
  /** Additional wrapper className */
  className?: string
  /** Whether to show the blinking caret. Default: true */
  showCursor?: boolean
}

const DEFAULT_WORDS = [
  'Think faster.',
  'Code cleaner.',
  'Ship quicker.',
  'Express clearer.',
  'Master fluency.'
]

export const BlurredTypingText: React.FC<BlurredTypingTextProps> = ({
  words = DEFAULT_WORDS,
  typingSpeed = 50,
  deletingSpeed = 28,
  holdDuration = 2200,
  pauseBeforeNext = 300,
  className = '',
  showCursor = true,
}) => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isHolding, setIsHolding] = useState(false)

  const currentWord = words[index % words.length]
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (isHolding) {
      // Hold completed word
      timeoutRef.current = setTimeout(() => {
        setIsHolding(false)
        setIsDeleting(true)
      }, holdDuration)
      return
    }

    if (isDeleting) {
      if (subIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setSubIndex((prev) => prev - 1)
        }, deletingSpeed)
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false)
        timeoutRef.current = setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length)
        }, pauseBeforeNext)
      }
      return
    }

    // Typing forward
    if (subIndex < currentWord.length) {
      timeoutRef.current = setTimeout(() => {
        setSubIndex((prev) => prev + 1)
      }, typingSpeed + (Math.random() * 16 - 8))
    } else {
      // Reached full word
      setIsHolding(true)
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [subIndex, isDeleting, isHolding, currentWord, words.length, typingSpeed, deletingSpeed, holdDuration, pauseBeforeNext])

  const visibleText = currentWord.slice(0, subIndex)

  return (
    <span className={`inline-flex items-center tracking-tight select-none ${className}`}>
      {/* Typed Characters with Blur Animation */}
      <span className="inline">
        {visibleText.split('').map((char, i) => {
          const isLatest = !isDeleting && i === visibleText.length - 1
          return (
            <span
              key={`${index}-${i}`}
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

      {/* Blinking Glowing Cursor */}
      {showCursor && (
        <span
          className="inline-block w-[3px] sm:w-[4px] h-[0.85em] ml-1 sm:ml-1.5 align-middle bg-sky-400 rounded-full animate-smooth-blink shadow-[0_0_10px_rgba(56,189,248,0.8)]"
          aria-hidden="true"
        />
      )}
    </span>
  )
}
