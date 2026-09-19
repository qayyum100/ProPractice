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
  totalXp: 0,
  currentLevel: 1,
  currentStreak: 0,
  longestStreak: 0,
  lastPracticeDate: '',
  totalSessions: 0,
  totalPracticeSeconds: 0,
  avgWpm: 0,
  topWpm: 0,
  avgAccuracy: 0,
  unlockedAchievementIds: [],
  personalBests: {},
}

export interface LeaderboardUser {
  rank: number
  userId: string
  name: string
  username: string
  wpm: number
  accuracy: number
  level: number
  xp: number
  streak: number
}

export interface RoomListing {
  id: string
  code: string
  title: string
  hostName: string
  duration: number
  participantsCount: number
  maxParticipants: number
  status: 'waiting' | 'in_progress'
}

const SEEDED_LEADERBOARD: LeaderboardUser[] = [
  { rank: 0, userId: 'u1', name: 'Marcus Vance', username: 'mvance', wpm: 124, accuracy: 99.4, level: 10, xp: 24500, streak: 42 },
  { rank: 0, userId: 'u2', name: 'Elena Rostova', username: 'elena_r', wpm: 118, accuracy: 98.9, level: 9, xp: 19800, streak: 31 },
  { rank: 0, userId: 'u3', name: 'Devon Thorne', username: 'dthorne', wpm: 112, accuracy: 99.1, level: 9, xp: 18200, streak: 28 },
  { rank: 0, userId: 'u5', name: 'Samantha Wu', username: 'sam_wu', wpm: 79, accuracy: 97.5, level: 5, xp: 3400, streak: 12 },
  { rank: 0, userId: 'u6', name: 'Lucas Meyer', username: 'lmeyer', wpm: 76, accuracy: 96.8, level: 4, xp: 2800, streak: 7 },
  { rank: 0, userId: 'u7', name: 'Aria Patel', username: 'aria_p', wpm: 72, accuracy: 98.0, level: 4, xp: 2200, streak: 15 },
]

const SEEDED_ROOMS: RoomListing[] = [
  { id: 'room_1', code: 'SPEED9', title: '60-Second Developer Sprint', hostName: 'DevLead_Alex', duration: 60, participantsCount: 3, maxParticipants: 8, status: 'waiting' },
  { id: 'room_2', code: 'LEXICON', title: 'Advanced English Vocabulary Race', hostName: 'Sarah_Writer', duration: 90, participantsCount: 2, maxParticipants: 6, status: 'waiting' },
]

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
  },

  getLeaderboard(): LeaderboardUser[] {
    try {
      const saved = localStorage.getItem('practice_leaderboard')
      return saved ? JSON.parse(saved) : SEEDED_LEADERBOARD
    } catch {
      return SEEDED_LEADERBOARD
    }
  },

  getRooms(): RoomListing[] {
    try {
      const saved = localStorage.getItem('practice_rooms')
      return saved ? JSON.parse(saved) : SEEDED_ROOMS
    } catch {
      return SEEDED_ROOMS
    }
  },

  saveRoom(room: RoomListing) {
    try {
      const rooms = this.getRooms()
      const updated = [room, ...rooms]
      localStorage.setItem('practice_rooms', JSON.stringify(updated))
    } catch (e) {
      console.error('Failed to save room', e)
    }
  }
}
