import React from 'react'
import { Achievement } from '../../types/gamification'
import {
  Sparkles,
  Gauge,
  Zap,
  Flame,
  CheckCircle,
  Crosshair,
  ShieldCheck,
  Calendar,
  Medal,
  Terminal,
  Lock
} from 'lucide-react'

interface AchievementCardProps {
  achievement: Achievement
  isUnlocked: boolean
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  isUnlocked
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Gauge': return <Gauge className="w-5 h-5" />
      case 'Zap': return <Zap className="w-5 h-5" />
      case 'Flame': return <Flame className="w-5 h-5" />
      case 'CheckCircle': return <CheckCircle className="w-5 h-5" />
      case 'Crosshair': return <Crosshair className="w-5 h-5" />
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />
      case 'Calendar': return <Calendar className="w-5 h-5" />
      case 'Medal': return <Medal className="w-5 h-5" />
      case 'Terminal': return <Terminal className="w-5 h-5" />
      default: return <Sparkles className="w-5 h-5" />
    }
  }

  return (
    <div
      className={`p-5 rounded-3xl border transition-all flex items-start gap-4 ${
        isUnlocked
          ? 'bg-white dark:bg-[#121216] border-neutral-200 dark:border-[#22222a] shadow-sm'
          : 'bg-neutral-50/60 dark:bg-[#0e0e12]/60 border-neutral-200/50 dark:border-neutral-800/40 opacity-60'
      }`}
    >
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
          isUnlocked
            ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800'
            : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400 border border-neutral-300 dark:border-neutral-700'
        }`}
      >
        {isUnlocked ? getIcon(achievement.iconName) : <Lock className="w-5 h-5" />}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-sm font-bold text-neutral-900 dark:text-white truncate">
            {achievement.title}
          </h4>
          <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 shrink-0">
            +{achievement.xpReward} XP
          </span>
        </div>

        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
          {achievement.description}
        </p>

        {isUnlocked && (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-2">
            <CheckCircle className="w-3 h-3" />
            <span>Unlocked</span>
          </span>
        )}
      </div>
    </div>
  )
}
