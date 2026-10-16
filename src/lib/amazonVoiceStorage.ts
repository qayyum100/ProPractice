import {
  QuizAttemptRecord,
  VoicePlatformUserStats,
  VoiceQuizQuestion,
  VoiceCategoryKey
} from '../types/amazonVoice'

const ATTEMPTS_STORAGE_KEY = 'propractice_voice_attempts_v1'
const STATS_STORAGE_KEY = 'propractice_voice_stats_v1'
const CACHED_QUESTIONS_KEY = 'propractice_voice_cached_questions_v1'
const BOOKMARKS_STORAGE_KEY = 'propractice_voice_bookmarks_v1'
const CUSTOM_NOTES_KEY = 'propractice_voice_custom_notes_v1'

const INITIAL_CATEGORY_STATS = (): Record<VoiceCategoryKey, { totalAttempts: number; totalCorrect: number; totalQuestions: number; accuracy: number; lastPracticed?: number }> => ({
  order_issues: { totalAttempts: 0, totalCorrect: 0, totalQuestions: 0, accuracy: 0 },
  product_issues: { totalAttempts: 0, totalCorrect: 0, totalQuestions: 0, accuracy: 0 },
  returns_refunds: { totalAttempts: 0, totalCorrect: 0, totalQuestions: 0, accuracy: 0 },
  fulfillment_seller: { totalAttempts: 0, totalCorrect: 0, totalQuestions: 0, accuracy: 0 },
  amazon_prime: { totalAttempts: 0, totalCorrect: 0, totalQuestions: 0, accuracy: 0 },
  ring_troubleshooting: { totalAttempts: 0, totalCorrect: 0, totalQuestions: 0, accuracy: 0 },
  call_structure: { totalAttempts: 0, totalCorrect: 0, totalQuestions: 0, accuracy: 0 },
  customer_scenarios: { totalAttempts: 0, totalCorrect: 0, totalQuestions: 0, accuracy: 0 },
  process_knowledge: { totalAttempts: 0, totalCorrect: 0, totalQuestions: 0, accuracy: 0 },
})

const INITIAL_STATS: VoicePlatformUserStats = {
  totalQuizzesTaken: 0,
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  overallAccuracy: 0,
  totalTimeSpentSeconds: 0,
  categoryStats: INITIAL_CATEGORY_STATS(),
  recentAttemptIds: [],
  bookmarkedQuestionIds: []
}

import { supabase, isSupabaseConfigured } from './supabase'

export const amazonVoiceStorage = {
  getAttempts(): QuizAttemptRecord[] {
    try {
      const data = localStorage.getItem(ATTEMPTS_STORAGE_KEY)
      return data ? JSON.parse(data) : []
    } catch {
      return []
    }
  },

  getAttemptById(id: string): QuizAttemptRecord | null {
    const attempts = this.getAttempts()
    return attempts.find((a) => a.id === id) || null
  },

  saveAttempt(attempt: QuizAttemptRecord): void {
    try {
      const attempts = this.getAttempts()
      const updated = [attempt, ...attempts].slice(0, 100) // keep last 100 attempts
      localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(updated))

      // Update aggregate stats
      this.recalculateStats(updated)

      // Background sync to Supabase if configured
      if (isSupabaseConfigured && supabase) {
        const client = supabase
        client.auth.getUser().then(({ data }) => {
          const userId = data?.user?.id || null
          ;(client as any).from('voice_quiz_attempts').insert({
            id: attempt.id,
            user_id: userId,
            category: attempt.config.categories.join(', ') || 'all',
            difficulty: attempt.config.difficulty,
            question_count: attempt.totalQuestions,
            score: attempt.score,
            accuracy_percentage: attempt.accuracyPercentage,
            total_duration_seconds: attempt.totalDurationSeconds,
            mode: attempt.config.mode,
            category_breakdown: attempt.categoryBreakdown as unknown as import('../types/database').Json,
            started_at: new Date(attempt.startedAt).toISOString(),
            completed_at: new Date(attempt.completedAt).toISOString()
          }).then(({ error }: { error: any }) => {
            if (error) console.info('Supabase sync notice:', error.message)
          })
        }).catch(() => {
          // Ignore network errors on background sync
        })
      }
    } catch (e) {
      console.error('Failed to save voice quiz attempt', e)
    }
  },

  getStats(): VoicePlatformUserStats {
    try {
      const data = localStorage.getItem(STATS_STORAGE_KEY)
      if (data) {
        const parsed = JSON.parse(data)
        return {
          ...INITIAL_STATS,
          ...parsed,
          categoryStats: {
            ...INITIAL_CATEGORY_STATS(),
            ...(parsed.categoryStats || {})
          }
        }
      }
      return INITIAL_STATS
    } catch {
      return INITIAL_STATS
    }
  },

  recalculateStats(attempts: QuizAttemptRecord[]): VoicePlatformUserStats {
    const categoryStats = INITIAL_CATEGORY_STATS()
    let totalQuestions = 0
    let totalCorrect = 0
    let totalTime = 0

    attempts.forEach((att) => {
      totalQuestions += att.totalQuestions
      totalCorrect += att.score
      totalTime += att.totalDurationSeconds

      Object.entries(att.categoryBreakdown).forEach(([catKey, breakdown]) => {
        const k = catKey as VoiceCategoryKey
        if (categoryStats[k]) {
          categoryStats[k].totalAttempts += 1
          categoryStats[k].totalQuestions += breakdown.total
          categoryStats[k].totalCorrect += breakdown.correct
          categoryStats[k].lastPracticed = Math.max(categoryStats[k].lastPracticed || 0, att.completedAt)
        }
      })
    })

    Object.keys(categoryStats).forEach((key) => {
      const k = key as VoiceCategoryKey
      const item = categoryStats[k]
      item.accuracy = item.totalQuestions > 0 ? Math.round((item.totalCorrect / item.totalQuestions) * 100) : 0
    })

    const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

    const updatedStats: VoicePlatformUserStats = {
      totalQuizzesTaken: attempts.length,
      totalQuestionsAnswered: totalQuestions,
      totalCorrectAnswers: totalCorrect,
      overallAccuracy,
      totalTimeSpentSeconds: totalTime,
      categoryStats,
      recentAttemptIds: attempts.slice(0, 10).map((a) => a.id),
      bookmarkedQuestionIds: this.getBookmarks()
    }

    try {
      localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(updatedStats))
    } catch (e) {
      console.error('Failed to save stats', e)
    }

    return updatedStats
  },

  getBookmarks(): string[] {
    try {
      const data = localStorage.getItem(BOOKMARKS_STORAGE_KEY)
      return data ? JSON.parse(data) : []
    } catch {
      return []
    }
  },

  toggleBookmark(questionId: string): boolean {
    const current = this.getBookmarks()
    const index = current.indexOf(questionId)
    let updated: string[]
    let isBookmarked: boolean
    if (index >= 0) {
      updated = current.filter((id) => id !== questionId)
      isBookmarked = false
    } else {
      updated = [...current, questionId]
      isBookmarked = true
    }
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated))
    } catch (e) {
      console.error('Failed to update bookmarks', e)
    }
    return isBookmarked
  },

  // Cached AI questions to optimize costs & avoid duplicate queries
  getCachedQuestions(): VoiceQuizQuestion[] {
    try {
      const data = localStorage.getItem(CACHED_QUESTIONS_KEY)
      return data ? JSON.parse(data) : []
    } catch {
      return []
    }
  },

  saveCachedQuestions(newQuestions: VoiceQuizQuestion[]): void {
    try {
      const existing = this.getCachedQuestions()
      const existingIds = new Set(existing.map((q) => q.id))
      const deduplicated = [...existing, ...newQuestions.filter((q) => !existingIds.has(q.id))]
      // Cap cached pool to 200 questions to respect localStorage size
      const trimmed = deduplicated.slice(-200)
      localStorage.setItem(CACHED_QUESTIONS_KEY, JSON.stringify(trimmed))
    } catch (e) {
      console.error('Failed to cache questions', e)
    }
  },

  // Custom User Training Notes / SOP Upload
  getCustomNotes(): string {
    return localStorage.getItem(CUSTOM_NOTES_KEY) || ''
  },

  saveCustomNotes(notes: string): void {
    localStorage.setItem(CUSTOM_NOTES_KEY, notes)
  }
}
