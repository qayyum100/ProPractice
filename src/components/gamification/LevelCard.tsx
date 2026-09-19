import React from 'react'
import { LEVEL_TIERS } from '../../data/achievementsList'
import { evaluateLevel } from '../../core/xpCalculator'
import { Zap, Lock, Check } from 'lucide-react'
import { ProgressBar } from '../ui/ProgressBar'

interface LevelCardProps {
  totalXp: number
}

export const LevelCard: React.FC<LevelCardProps> = ({ totalXp }) => {
  const { currentLevel, tier, progressPercent } = evaluateLevel(totalXp)
  const nextTier = LEVEL_TIERS.find(t => t.level === currentLevel + 1)

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Current Tier
          </span>
          <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-0.5">
            Level {currentLevel} — {tier.title}
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 max-w-md">
            {tier.description}
          </p>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-sky-500/20">
          L{currentLevel}
        </div>
      </div>

      {/* XP Progression Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-neutral-700 dark:text-neutral-300 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-sky-500 fill-sky-500" />
            <span>{totalXp.toLocaleString()} Total XP</span>
          </span>
          <span className="text-neutral-400 font-mono">
            {nextTier ? `${tier.maxXp - totalXp} XP to Level ${currentLevel + 1}` : 'Max Level'}
          </span>
        </div>
        <ProgressBar value={progressPercent} color="brand" />
      </div>

      {/* Unlocked Features List */}
      <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 space-y-2.5">
        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
          Tier Privileges & Modes
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {tier.unlockedFeatures.map((feat) => (
            <div key={feat} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
              <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span>{feat}</span>
            </div>
          ))}
          {nextTier && nextTier.unlockedFeatures.map((feat) => (
            <div key={feat} className="flex items-center gap-2 text-xs text-neutral-400 opacity-60">
              <div className="w-4 h-4 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                <Lock className="w-2.5 h-2.5" />
              </div>
              <span>{feat} (Lvl {nextTier.level})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
