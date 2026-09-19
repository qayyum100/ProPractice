import React from 'react'
import { Container } from '../components/layout/Container'
import { useTypingSession } from '../context/TypingSessionContext'
import { ACHIEVEMENTS_CATALOG, LEVEL_TIERS } from '../data/achievementsList'
import { AchievementCard } from '../components/gamification/AchievementCard'
import { LevelCard } from '../components/gamification/LevelCard'
import { Trophy } from 'lucide-react'

export const AchievementsPage: React.FC = () => {
  const { userStats } = useTypingSession()

  const unlockedIds = new Set(userStats.unlockedAchievementIds)
  const unlockedCount = ACHIEVEMENTS_CATALOG.filter(a => unlockedIds.has(a.id)).length

  return (
    <div className="py-8 sm:py-12 space-y-10">
      <Container size="lg" className="space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Progression & Milestones
            </span>
            <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-0.5">
              Achievements & Tiers
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Earn XP, unlock milestones, and level up from Keyboard Explorer to Typing Master.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>{unlockedCount} of {ACHIEVEMENTS_CATALOG.length} Milestones Unlocked</span>
          </div>
        </div>

        {/* Current Level Status */}
        <LevelCard totalXp={userStats.totalXp} />

        {/* Achievements Grid */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            All Master Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACHIEVEMENTS_CATALOG.map((ach) => (
              <AchievementCard
                key={ach.id}
                achievement={ach}
                isUnlocked={unlockedIds.has(ach.id)}
              />
            ))}
          </div>
        </div>

        {/* Tier Ladder Preview */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Full Tier Progression Journey
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {LEVEL_TIERS.map((tier) => {
              const isCurrent = tier.level === userStats.currentLevel
              const isPast = tier.level < userStats.currentLevel

              return (
                <div
                  key={tier.level}
                  className={`p-4 rounded-2xl border text-center space-y-1.5 ${
                    isCurrent
                      ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-400 dark:border-sky-800 shadow-sm'
                      : isPast
                      ? 'bg-neutral-50 dark:bg-[#181820] border-neutral-200/60 dark:border-neutral-800'
                      : 'bg-neutral-50/40 dark:bg-[#101014]/40 border-neutral-200/40 dark:border-neutral-800/40 opacity-50'
                  }`}
                >
                  <span className="text-[10px] font-bold font-mono text-neutral-400 uppercase">
                    Level {tier.level}
                  </span>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                    {tier.title}
                  </h4>
                  <span className="text-[10px] text-neutral-500 font-mono block">
                    {tier.minXp} - {tier.maxXp} XP
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}
