import React, { useState, useEffect } from 'react'
import ParticleText from './ParticleText'

interface LoopedBlurredHeadingProps {
  prefix?: string
  suffix?: string
  loopInterval?: number
  className?: string
}

export const BlurredTypingText: React.FC<LoopedBlurredHeadingProps> = ({
  prefix = 'Type better.',
  suffix = 'Think faster.',
  loopInterval = 4800,
  className = '',
}) => {
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimKey((prev) => prev + 1)
    }, loopInterval)

    return () => clearInterval(timer)
  }, [loopInterval])

  const prefixChars = prefix.split('')
  const suffixChars = suffix.split('')

  return (
    <div className={`space-y-1 sm:space-y-2 select-none ${className}`}>
      {/* Line 1: Prefix (e.g. "Type better.") */}
      <div className="block text-neutral-900 dark:text-white">
        {prefixChars.map((char, i) => (
          <span
            key={`p-${animKey}-${i}`}
            className="inline-block animate-blur-type"
            style={{
              animationDelay: `${i * 38}ms`,
              willChange: 'filter, opacity, transform',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>

      {/* Line 2: Suffix (e.g. "Think faster.") with ParticleText */}
      <div className="block h-[1.2em] relative min-h-[60px] sm:min-h-[80px]">
        <ParticleText
          text={suffix}
          particleSize={2}
          density={4}
          color="#38bdf8"
          highlightColor="#0284c7"
          scatter={180}
          gatherDuration={1600}
          stagger={420}
          pointerRepel={40}
          repelRadius={120}
          idleDrift={0.7}
          trigger="hover"
          fontSize="1em"
          fontWeight={800}
          fontFamily="inherit"
          glow={true}
        />
      </div>

        {/* Glowing Pulsating Caret */}
        <span
          className="inline-block w-[3px] sm:w-[4px] h-[0.8em] ml-1.5 align-baseline bg-sky-400 rounded-full animate-smooth-blink shadow-[0_0_10px_rgba(56,189,248,0.8)]"
          aria-hidden="true"
        />
      </div>
  )
}
