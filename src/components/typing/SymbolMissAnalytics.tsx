import React from 'react'
import { AlertCircle, Target, Sparkles, Flame } from 'lucide-react'

interface SymbolMissAnalyticsProps {
  missedSymbolsMap: Record<string, number>
  onTriggerTargetedDrill: (weakSymbols: string[]) => void
}

export const SymbolMissAnalytics: React.FC<SymbolMissAnalyticsProps> = ({
  missedSymbolsMap,
  onTriggerTargetedDrill,
}) => {
  const entries = Object.entries(missedSymbolsMap).sort((a, b) => b[1] - a[1])
  const topWeakSymbols = entries.slice(0, 6).map(([char]) => char)

  if (entries.length === 0) {
    return (
      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
        <Sparkles className="w-4 h-4 shrink-0 text-emerald-400" />
        <span>Flawless Symbol Precision! Zero syntax keys missed in this session.</span>
      </div>
    )
  }

  return (
    <div className="p-5 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-4 shadow-xl text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-purple-400" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
            Symbol Key Precision Breakdown
          </h4>
        </div>

        <button
          onClick={() => onTriggerTargetedDrill(topWeakSymbols)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors shadow-md shadow-purple-500/20"
        >
          <Flame className="w-3.5 h-3.5 text-amber-300" />
          <span>Drill Weak Symbols ({topWeakSymbols.join(' ')})</span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {entries.map(([symbolChar, count]) => (
          <div
            key={symbolChar}
            className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60"
          >
            <span className="font-mono text-sm font-bold text-sky-400 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700">
              {symbolChar}
            </span>
            <span className="text-xs font-mono text-rose-400 font-semibold">{count} misses</span>
          </div>
        ))}
      </div>
    </div>
  )
}
