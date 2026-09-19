import React from 'react'
import { cn } from '../../lib/utils'

export interface ProgressBarProps {
  value: number // 0 to 100
  max?: number
  className?: string
  color?: 'brand' | 'success' | 'amber' | 'neutral'
  showLabel?: boolean
  height?: 'sm' | 'md' | 'lg'
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  className,
  color = 'brand',
  showLabel = false,
  height = 'md'
}) => {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100))

  const colors = {
    brand: 'bg-sky-500',
    success: 'bg-emerald-500',
    amber: 'bg-amber-500',
    neutral: 'bg-neutral-800 dark:bg-white'
  }

  const heights = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  }

  return (
    <div className={cn('w-full flex items-center gap-3', className)}>
      <div className={cn('w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden', heights[height])}>
        <div
          className={cn('h-full transition-all duration-300 ease-out rounded-full', colors[color])}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-neutral-500 shrink-0 min-w-[32px] text-right">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  )
}
