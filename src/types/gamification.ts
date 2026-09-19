export interface LevelTier {
  level: number
  title: string
  minXp: number
  maxXp: number
  badgeIcon: string
  description: string
  unlockedFeatures: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  category: 'general' | 'speed' | 'accuracy' | 'streak' | 'english' | 'developer' | 'endurance' | 'social'
  iconName: string
  xpReward: number
  condition: {
    type: 'wpm' | 'accuracy' | 'streak' | 'sessions' | 'words_typed' | 'flawless'
    target: number
  }
}

export interface UserStatsState {
  totalXp: number
  currentLevel: number
  currentStreak: number
  longestStreak: number
  lastPracticeDate: string | null
  totalSessions: number
  totalPracticeSeconds: number
  avgWpm: number
  topWpm: number
  avgAccuracy: number
  unlockedAchievementIds: string[]
  personalBests: Record<string, { wpm: number; accuracy: number; date: string }>
}
