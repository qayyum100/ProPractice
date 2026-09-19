import { LEVEL_TIERS, ACHIEVEMENTS_CATALOG } from '../data/achievementsList'
import { CompletedSessionResult } from '../types/typing'
import { UserStatsState } from '../types/gamification'

export function calculateSessionXp(session: {
  netWpm: number
  accuracy: number
  durationSeconds: number
  category: string
}): number {
  // Base XP: 1 XP per second of active typing
  let xp = Math.round(session.durationSeconds)

  // Speed multiplier: higher WPM earns bonus proportional to achievement
  const wpmBonus = Math.floor(session.netWpm * 0.5)
  xp += wpmBonus

  // Accuracy bonus: 95%+ grants scaling multiplier
  if (session.accuracy >= 98) {
    xp = Math.round(xp * 1.5)
  } else if (session.accuracy >= 95) {
    xp = Math.round(xp * 1.25)
  } else if (session.accuracy < 80) {
    xp = Math.round(xp * 0.7) // Discourage careless smashing
  }

  // Developer / Scenario bonus
  if (session.category === 'developer' || session.category === 'scenario' || session.category === 'english') {
    xp += 20
  }

  return Math.max(10, Math.min(300, xp))
}

export function evaluateLevel(totalXp: number): { currentLevel: number; tier: typeof LEVEL_TIERS[0]; progressPercent: number } {
  let matchedTier = LEVEL_TIERS[0]

  for (let i = LEVEL_TIERS.length - 1; i >= 0; i--) {
    if (totalXp >= LEVEL_TIERS[i].minXp) {
      matchedTier = LEVEL_TIERS[i]
      break
    }
  }

  const range = matchedTier.maxXp - matchedTier.minXp
  const currentInRange = totalXp - matchedTier.minXp
  const progressPercent = Math.min(100, Math.round((currentInRange / range) * 100))

  return {
    currentLevel: matchedTier.level,
    tier: matchedTier,
    progressPercent
  }
}

export function checkNewAchievements(
  currentStats: UserStatsState,
  latestSession: CompletedSessionResult
): string[] {
  const newUnlocked: string[] = []
  const existingIds = new Set(currentStats.unlockedAchievementIds)

  for (const ach of ACHIEVEMENTS_CATALOG) {
    if (existingIds.has(ach.id)) continue

    let unlocked = false
    switch (ach.condition.type) {
      case 'wpm':
        if (latestSession.netWpm >= ach.condition.target) unlocked = true
        break
      case 'accuracy':
        if (latestSession.accuracy >= ach.condition.target) unlocked = true
        break
      case 'flawless':
        if (latestSession.accuracy === 100 && latestSession.backspaceCount === 0) unlocked = true
        break
      case 'streak':
        if (currentStats.currentStreak >= ach.condition.target) unlocked = true
        break
      case 'sessions':
        if (currentStats.totalSessions + 1 >= ach.condition.target) unlocked = true
        break
    }

    if (unlocked) {
      newUnlocked.push(ach.id)
    }
  }

  return newUnlocked
}

export function updateStreak(lastPracticeDate: string | null, currentStreak: number): { newStreak: number; streakMaintained: boolean } {
  const today = new Date().toISOString().split('T')[0]
  if (!lastPracticeDate) {
    return { newStreak: 1, streakMaintained: true }
  }

  if (lastPracticeDate === today) {
    return { newStreak: currentStreak, streakMaintained: true }
  }

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
  if (lastPracticeDate === yesterday) {
    return { newStreak: currentStreak + 1, streakMaintained: true }
  }

  // Broken streak
  return { newStreak: 1, streakMaintained: false }
}
