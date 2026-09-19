import React from 'react'
import { cn } from '../../lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'interactive' | 'outline'
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => {
  const variants = {
    default: 'bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#23232a] shadow-sm',
    glass: 'glass-card shadow-sm',
    interactive: 'bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#23232a] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 cursor-pointer hover:shadow-md active:scale-[0.99]',
    outline: 'border border-dashed border-neutral-300 dark:border-neutral-800 bg-transparent'
  }

  return (
    <div
      className={cn('rounded-2xl p-6 transition-all', variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
}
