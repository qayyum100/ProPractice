import {
  EnglishQuizAttemptRecord,
  EnglishQuizStats,
  EnglishQuizLevelKey
} from '../types/englishQuiz'

const STORAGE_KEY_ATTEMPTS = 'propractice_english_quiz_attempts'
const STORAGE_KEY_STATS = 'propractice_english_quiz_stats'
const STORAGE_KEY_BOOKMARKS = 'propractice_english_quiz_bookmarks'
const STORAGE_KEY_NOTES = 'propractice_english_quiz_notes'

const DEFAULT_LEVEL_STATS: Record<EnglishQuizLevelKey, { attempted: number; correct: number; accuracy: number }> = {
  level_1: { attempted: 0, correct: 0, accuracy: 0 },
  level_2: { attempted: 0, correct: 0, accuracy: 0 },
  level_3: { attempted: 0, correct: 0, accuracy: 0 },
  level_4: { attempted: 0, correct: 0, accuracy: 0 },
  level_5: { attempted: 0, correct: 0, accuracy: 0 }
}

const DEFAULT_STATS: EnglishQuizStats = {
  totalAttempts: 0,
  totalQuestionsAnswered: 0,
  totalCorrect: 0,
  averageAccuracy: 0,
  levelAccuracy: { ...DEFAULT_LEVEL_STATS }
}

export const englishQuizStorage = {
  getAttempts(): EnglishQuizAttemptRecord[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY_ATTEMPTS)
      return data ? JSON.parse(data) : []
    } catch (e) {
      console.error('Failed to read English quiz attempts from localStorage:', e)
      return []
    }
  },

  saveAttempt(record: EnglishQuizAttemptRecord): void {
    try {
      const attempts = this.getAttempts()
      attempts.unshift(record)
      localStorage.setItem(STORAGE_KEY_ATTEMPTS, JSON.stringify(attempts.slice(0, 50)))

      // Update aggregate stats
      const stats = this.getStats()
      stats.totalAttempts += 1
      stats.totalQuestionsAnswered += record.totalQuestions
      stats.totalCorrect += record.score
      stats.averageAccuracy =
        stats.totalQuestionsAnswered > 0
          ? Math.round((stats.totalCorrect / stats.totalQuestionsAnswered) * 100)
          : 0
      stats.lastActiveTimestamp = Date.now()

      // Update level-specific accuracy
      Object.entries(record.levelBreakdown).forEach(([levelKey, data]) => {
        const key = levelKey as EnglishQuizLevelKey
        if (stats.levelAccuracy[key]) {
          stats.levelAccuracy[key].attempted += data.total
          stats.levelAccuracy[key].correct += data.correct
          stats.levelAccuracy[key].accuracy =
            stats.levelAccuracy[key].attempted > 0
              ? Math.round((stats.levelAccuracy[key].correct / stats.levelAccuracy[key].attempted) * 100)
              : 0
        }
      })

      localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats))
    } catch (e) {
      console.error('Failed to save English quiz attempt:', e)
    }
  },

  getStats(): EnglishQuizStats {
    try {
      const data = localStorage.getItem(STORAGE_KEY_STATS)
      if (data) {
        const parsed = JSON.parse(data)
        return {
          ...DEFAULT_STATS,
          ...parsed,
          levelAccuracy: {
            ...DEFAULT_LEVEL_STATS,
            ...(parsed.levelAccuracy || {})
          }
        }
      }
    } catch (e) {
      console.error('Failed to read English quiz stats from localStorage:', e)
    }
    return { ...DEFAULT_STATS }
  },

  getBookmarks(): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY_BOOKMARKS)
      return data ? JSON.parse(data) : []
    } catch (e) {
      console.error('Failed to read English quiz bookmarks:', e)
      return []
    }
  },

  toggleBookmark(questionId: string): boolean {
    try {
      const bookmarks = this.getBookmarks()
      const exists = bookmarks.includes(questionId)
      const updated = exists ? bookmarks.filter((id) => id !== questionId) : [...bookmarks, questionId]
      localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(updated))
      return !exists
    } catch (e) {
      console.error('Failed to toggle bookmark:', e)
      return false
    }
  },

  getNotes(): string {
    try {
      return localStorage.getItem(STORAGE_KEY_NOTES) || ''
    } catch (e) {
      console.error('Failed to get English study notes:', e)
      return ''
    }
  },

  saveNotes(notes: string): void {
    try {
      localStorage.setItem(STORAGE_KEY_NOTES, notes)
    } catch (e) {
      console.error('Failed to save English study notes:', e)
    }
  },

  clearAllData(): void {
    try {
      localStorage.removeItem(STORAGE_KEY_ATTEMPTS)
      localStorage.removeItem(STORAGE_KEY_STATS)
      localStorage.removeItem(STORAGE_KEY_BOOKMARKS)
      localStorage.removeItem(STORAGE_KEY_NOTES)
    } catch (e) {
      console.error('Failed to clear English quiz storage:', e)
    }
  }
}
