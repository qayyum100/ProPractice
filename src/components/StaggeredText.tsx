import React, { useEffect, useRef, useState, useMemo } from 'react'

type AnimationVariant =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scaleUp'
  | 'blur'
  | 'flip'
  | 'wave'

type StaggerMode = 'word' | 'char' | 'line'

interface StaggeredTextProps {
  /** The text string to animate */
  text: string
  /** Animation style for each unit. Default: 'fadeUp' */
  variant?: AnimationVariant
  /** Whether to split by 'word', 'char', or 'line'. Default: 'word' */
  by?: StaggerMode
  /** Delay between each unit (ms). Default: 60 */
  staggerDelay?: number
  /** Duration of each unit's animation (ms). Default: 500 */
  duration?: number
  /** Delay before the whole animation begins (ms). Default: 0 */
  delay?: number
  /** Whether to trigger when element enters viewport. Default: true */
  onScroll?: boolean
  /** CSS class applied to the wrapper element */
  className?: string
  /** CSS class applied to each text unit span */
  charClassName?: string
  /** Custom element type for the wrapper. Default: 'p' */
  as?: React.ElementType
  /** Replay animation every time element enters viewport. Default: false */
  replay?: boolean
}

const getTransformFrom = (variant: AnimationVariant): string => {
  switch (variant) {
    case 'fadeUp':    return 'translate3d(0, 24px, 0)'
    case 'fadeDown':  return 'translate3d(0, -24px, 0)'
    case 'fadeLeft':  return 'translate3d(24px, 0, 0)'
    case 'fadeRight': return 'translate3d(-24px, 0, 0)'
    case 'scaleUp':   return 'scale(0.8)'
    case 'blur':      return 'translate3d(0, 8px, 0)'
    case 'flip':      return 'rotateX(-90deg)'
    case 'wave':      return 'translate3d(0, 12px, 0)'
    default:          return 'translate3d(0, 24px, 0)'
  }
}

const getFilterFrom = (variant: AnimationVariant): string => {
  return variant === 'blur' ? 'blur(8px)' : 'none'
}

export const StaggeredText: React.FC<StaggeredTextProps> = ({
  text,
  variant = 'fadeUp',
  by = 'word',
  staggerDelay = 60,
  duration = 500,
  delay = 0,
  onScroll = true,
  className = '',
  charClassName = '',
  as: Tag = 'p',
  replay = false,
}) => {
  const containerRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(!onScroll)

  // Split text into units
  const units = useMemo(() => {
    if (by === 'char') return text.split('')
    if (by === 'line') return text.split('\n')
    return text.split(' ')
  }, [text, by])

  useEffect(() => {
    if (!onScroll) return

    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (!replay) observer.disconnect()
        } else if (replay) {
          setVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [onScroll, replay])

  const isPerspective = variant === 'flip'

  return (
    <Tag
      ref={containerRef}
      className={`inline ${className}`}
      style={isPerspective ? { perspective: '600px' } : undefined}
      aria-label={text}
    >
      {units.map((unit, i) => {
        const isWave = variant === 'wave'
        const waveY = isWave ? Math.sin((i / units.length) * Math.PI) * -8 : 0
        const individualDelay = delay + i * staggerDelay

        return (
          <span
            key={i}
            aria-hidden="true"
            className={`inline-block ${charClassName}`}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? isWave && !visible
                  ? `translate3d(0, ${waveY}px, 0)`
                  : 'none'
                : getTransformFrom(variant),
              filter: visible ? 'none' : getFilterFrom(variant),
              transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${individualDelay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${individualDelay}ms, filter ${duration}ms ease ${individualDelay}ms`,
              // Keep words together (not breaking across lines mid-word)
              whiteSpace: by === 'word' ? 'nowrap' : 'pre',
            }}
          >
            {unit}
            {/* Add space back after each word */}
            {by === 'word' && i < units.length - 1 && (
              <span style={{ display: 'inline' }}>&nbsp;</span>
            )}
          </span>
        )
      })}
    </Tag>
  )
}
