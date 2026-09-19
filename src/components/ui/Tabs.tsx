import React from 'react'
import { cn } from '../../lib/utils'

export interface TabItem {
  id: string
  label: string
  icon?: React.ReactNode
  badge?: string | number
}

export interface TabsProps {
  tabs: TabItem[]
  activeTab: string
  onChange: (tabId: string) => void
  className?: string
  size?: 'sm' | 'md'
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
  size = 'md'
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center p-1 bg-neutral-100 dark:bg-[#18181f] border border-neutral-200/80 dark:border-neutral-800 rounded-xl',
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              'inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 text-xs sm:text-sm select-none',
              size === 'sm' ? 'px-2.5 py-1' : 'px-3.5 py-1.5',
              isActive
                ? 'bg-white dark:bg-[#23232a] text-neutral-900 dark:text-white shadow-sm font-semibold'
                : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200'
            )}
          >
            {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={cn(
                  'px-1.5 py-0.2 text-[10px] rounded-full font-bold',
                  isActive
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                    : 'bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300'
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
