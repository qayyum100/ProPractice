import React, { useMemo } from 'react'
import { LiveTypingMetrics } from '../../types/typing'
import { formatTime } from '../../lib/utils'

interface LiveMetricsProps {
  metrics: LiveTypingMetrics
  durationLimit?: number
}

export const LiveMetrics: React.FC<LiveMetricsProps> = ({
  metrics,
  durationLimit
}) => {
  const displayTime = durationLimit
    ? Math.max(0, durationLimit - Math.floor(metrics.elapsedSeconds))
    : Math.floor(metrics.elapsedSeconds)

  const timerPercent = useMemo(() => {
    if (!durationLimit) return null
    return Math.max(0, Math.min(100, (displayTime / durationLimit) * 100))
  }, [displayTime, durationLimit])

  const timerColor = timerPercent !== null
    ? timerPercent > 30 ? 'bg-sky-500' : timerPercent > 10 ? 'bg-amber-500' : 'bg-red-500'
    : 'bg-sky-500'

  const timeIsLow = timerPercent !== null && timerPercent <= 15

  return (
    <div className="w-full space-y-3">
      {/* Timer progress bar */}
      {durationLimit && (
        <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${timerColor}`}
            style={{ width: `${timerPercent}%` }}
          />
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 px-1">
        {/* Time */}
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            {durationLimit ? 'Remaining' : 'Elapsed'}
          </span>
          <span className={`text-3xl sm:text-4xl font-mono font-bold tracking-tight mt-0.5 transition-colors ${
            timeIsLow ? 'text-red-500 dark:text-red-400 animate-pulse-subtle' : 'text-neutral-900 dark:text-white'
          }`}>
            {formatTime(displayTime)}
          </span>
        </div>

        {/* Net WPM */}
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Net Speed
          </span>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-sky-600 dark:text-sky-400">
              {metrics.netWpm}
            </span>
            <span className="text-xs font-semibold text-neutral-400">WPM</span>
          </div>
        </div>

        {/* Accuracy */}
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Accuracy
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className={`text-3xl sm:text-4xl font-mono font-bold tracking-tight ${
              metrics.accuracy < 90
                ? 'text-red-500 dark:text-red-400'
                : metrics.accuracy < 96
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-neutral-900 dark:text-white'
            }`}>
              {metrics.accuracy}
            </span>
            <span className="text-xs font-semibold text-neutral-400">%</span>
          </div>
        </div>

        {/* Progress & Errors */}
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Progress
          </span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-neutral-900 dark:text-white">
              {metrics.progressPercent}%
            </span>
            {metrics.incorrectChars > 0 && (
              <span className="text-xs font-mono font-semibold text-red-500 bg-red-50 dark:bg-red-950/40 px-1.5 py-0.5 rounded">
                {metrics.incorrectChars} err
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
