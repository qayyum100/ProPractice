import React from 'react'

interface HeatmapProps {
  keyMetrics: Record<string, { total: number; errors: number; avgLatencyMs: number }>
}

const HEATMAP_ROWS = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
]

export const Heatmap: React.FC<HeatmapProps> = ({ keyMetrics }) => {
  const getKeyColor = (char: string) => {
    const data = keyMetrics[char.toLowerCase()]
    if (!data || data.total === 0) {
      return 'bg-neutral-100 dark:bg-[#181820] text-neutral-400 dark:text-neutral-600 border-neutral-200 dark:border-neutral-800'
    }

    const errorRate = data.errors / data.total

    if (errorRate >= 0.4) {
      return 'bg-red-500/80 text-white border-red-600 font-bold shadow-sm'
    }
    if (errorRate > 0) {
      return 'bg-amber-400/80 text-neutral-900 border-amber-500 font-semibold'
    }
    // Mastered key with 0 errors
    return 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/40 font-semibold'
  }

  return (
    <div className="w-full flex flex-col items-center gap-1.5 sm:gap-2 select-none">
      {HEATMAP_ROWS.map((row, rowIdx) => (
        <div key={rowIdx} className="flex items-center gap-1 sm:gap-1.5">
          {row.map((key) => {
            const data = keyMetrics[key.toLowerCase()]
            return (
              <div
                key={key}
                className={`w-8 sm:w-11 h-9 sm:h-11 rounded-xl border flex flex-col items-center justify-center font-mono text-xs transition-all ${getKeyColor(key)}`}
                title={data ? `${data.total} presses, ${data.errors} errors (${Math.round((data.errors / data.total) * 100)}%)` : 'Untyped'}
              >
                <span className="font-medium">{key}</span>
                {data && data.errors > 0 && (
                  <span className="text-[9px] text-red-100 opacity-90 font-mono -mt-0.5">
                    {data.errors}e
                  </span>
                )}
              </div>
            )
          })}
        </div>
      ))}

      {/* Heatmap Legend */}
      <div className="flex items-center gap-6 mt-4 text-xs text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-emerald-500/30 border border-emerald-500/50" />
          <span>Accurate (0 errors)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-amber-400 border border-amber-500" />
          <span>Occasional Error</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-red-500 border border-red-600" />
          <span>High Error Rate (30%+)</span>
        </div>
      </div>
    </div>
  )
}
