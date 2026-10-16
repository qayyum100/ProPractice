import React, { useEffect, useState } from 'react'
import { Timer, AlertCircle } from 'lucide-react'

interface VoiceQuizTimerProps {
  totalSeconds: number
  onTimeExpired: () => void
  isPaused?: boolean
}

export const VoiceQuizTimer: React.FC<VoiceQuizTimerProps> = ({
  totalSeconds,
  onTimeExpired,
  isPaused = false
}) => {
  const [timeLeft, setTimeLeft] = useState(totalSeconds)

  useEffect(() => {
    setTimeLeft(totalSeconds)
  }, [totalSeconds])

  useEffect(() => {
    if (isPaused || timeLeft <= 0) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          onTimeExpired()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [timeLeft, isPaused, onTimeExpired])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  const fraction = timeLeft / totalSeconds
  const isWarning = fraction < 0.25 || timeLeft <= 60
  const isCritical = fraction < 0.1 || timeLeft <= 20

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-bold transition-all shadow-xs ${
        isCritical
          ? 'bg-rose-500/15 border-rose-500 text-rose-600 dark:text-rose-400 animate-pulse'
          : isWarning
          ? 'bg-amber-500/15 border-amber-500 text-amber-600 dark:text-amber-400'
          : 'bg-neutral-100 dark:bg-neutral-800/80 border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200'
      }`}
      title="Remaining Assessment Time"
    >
      {isCritical ? (
        <AlertCircle className="w-3.5 h-3.5 text-rose-500 animate-bounce" />
      ) : (
        <Timer className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
      )}
      <span className="tabular-nums tracking-wider">{formattedTime}</span>
    </div>
  )
}
