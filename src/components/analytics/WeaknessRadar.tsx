import React from 'react'
import { AlertCircle, Target, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Link } from 'react-router-dom'

interface WeaknessRadarProps {
  weakKeys: { key: string; errorCount: number; errorRate: number }[]
  recommendedCategory: string
}

export const WeaknessRadar: React.FC<WeaknessRadarProps> = ({
  weakKeys,
  recommendedCategory
}) => {
  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-red-500" />
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Weakness Radar
          </h3>
        </div>
        <span className="text-xs font-semibold text-neutral-400">
          Last 10 sessions analysis
        </span>
      </div>

      {weakKeys.length === 0 ? (
        <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-center space-y-2">
          <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            Exceptional Precision Detected!
          </p>
          <p className="text-xs text-neutral-500">
            No frequent error patterns identified in your recent runs. Keep up the high consistency!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-xs text-neutral-500">
            Keys exhibiting elevated mistake frequency during transitions:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {weakKeys.map((item) => (
              <div
                key={item.key}
                className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-900 flex items-center justify-center font-mono font-bold text-red-600 dark:text-red-400">
                    {item.key}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-900 dark:text-white block">
                      Key [{item.key}]
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      {item.errorCount} misses
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-red-500">
                  {item.errorRate}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Suggested Fix Action */}
      <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200/60 dark:border-sky-800/40 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-sky-500 shrink-0" />
          <div className="text-xs">
            <p className="font-semibold text-neutral-900 dark:text-white">
              Recommended Focus: {recommendedCategory.toUpperCase()}
            </p>
            <p className="text-neutral-500 dark:text-neutral-400">
              Run a targeted 3-minute precision drill to balance neuromuscular coordination.
            </p>
          </div>
        </div>

        <Link to={`/practice?mode=${recommendedCategory}`}>
          <Button size="sm" variant="primary" icon={<ArrowRight className="w-3.5 h-3.5" />}>
            Train
          </Button>
        </Link>
      </div>
    </div>
  )
}
