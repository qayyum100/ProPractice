import { CompletedSessionResult, PracticeSettings } from '../types/typing'
import { UserStatsState } from '../types/gamification'
import { DailyPracticePlan } from '../types/ai'

const DEFAULT_SETTINGS: PracticeSettings = {
  mode: 'time',
  duration: 60,
  includePunctuation: true,
  includeNumbers: false,
  soundEnabled: true,
  blindMode: false,
  keyboardLayout: 'qwerty',
  showLiveKeyboard: true,
  theme: 'system',
}

const DEFAULT_STATS: UserStatsState = {
  totalXp: 450,
  currentLevel: 2,
  currentStreak: 3,
  longestStreak: 5,
  lastPracticeDate: new Date().toISOString().split('T')[0],
  totalSessions: 14,
  totalPracticeSeconds: 840,
  avgWpm: 54,
  topWpm: 72,
  avgAccuracy: 96.4,
  unlockedAchievementIds: ['first_practice', 'speed_50', 'accuracy_95'],
  personalBests: {
    '15s': { wpm: 78, accuracy: 98, date: '2026-09-15' },
    '30s': { wpm: 72, accuracy: 97, date: '2026-09-16' },
    '60s': { wpm: 68, accuracy: 96, date: '2026-09-17' },
  },
}

export const storage = {
  getSettings(): PracticeSettings {
    try {
      const saved = localStorage.getItem('practice_settings')
      return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS
    } catch {
      return DEFAULT_SETTINGS
    }
  },

  saveSettings(settings: Partial<PracticeSettings>) {
    try {
      const current = this.getSettings()
      const updated = { ...current, ...settings }
      localStorage.setItem('practice_settings', JSON.stringify(updated))
      return updated
    } catch {
      return DEFAULT_SETTINGS
    }
  },

  getStats(): UserStatsState {
    try {
      const saved = localStorage.getItem('practice_user_stats')
      return saved ? { ...DEFAULT_STATS, ...JSON.parse(saved) } : DEFAULT_STATS
    } catch {
      return DEFAULT_STATS
    }
  },

  saveStats(stats: UserStatsState) {
    try {
      localStorage.setItem('practice_user_stats', JSON.stringify(stats))
    } catch (e) {
      console.error('Failed to save stats locally', e)
    }
  },

  getRecentSessions(): CompletedSessionResult[] {
    try {
      const saved = localStorage.getItem('practice_recent_sessions')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  },

  saveSession(session: CompletedSessionResult) {
    try {
      const history = this.getRecentSessions()
      const updated = [session, ...history].slice(0, 50) // Keep last 50
      localStorage.setItem('practice_recent_sessions', JSON.stringify(updated))
    } catch (e) {
      console.error('Failed to save session locally', e)
    }
  },

  getDailyPlan(): DailyPracticePlan | null {
    try {
      const saved = localStorage.getItem('practice_daily_plan')
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  },

  saveDailyPlan(plan: DailyPracticePlan) {
    try {
      localStorage.setItem('practice_daily_plan', JSON.stringify(plan))
    } catch (e) {
      console.error('Failed to save daily plan', e)
    }
  }
}
