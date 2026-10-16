import {
  QuizConfig,
  VoiceQuizQuestion,
  VoiceCategoryKey
} from '../types/amazonVoice'
import { VERIFIED_QUESTION_BANK } from '../data/amazonVoiceQuestionBank'
import { amazonVoiceStorage } from './amazonVoiceStorage'

export interface GenerationResult {
  questions: VoiceQuizQuestion[]
  source: 'verified_bank' | 'cached_ai' | 'gemini_api' | 'mixed'
  error?: string
}

/**
 * Filter questions from question bank matching category, difficulty, and type criteria
 */
function filterFromPool(
  pool: VoiceQuizQuestion[],
  config: QuizConfig
): VoiceQuizQuestion[] {
  return pool.filter((q) => {
    // Category match
    if (config.categories.length > 0 && !config.categories.includes(q.category)) {
      return false
    }
    // Difficulty match
    if (config.difficulty !== 'mixed' && q.difficulty !== config.difficulty) {
      return false
    }
    // Type match
    if (config.questionType !== 'mixed' && q.type !== config.questionType) {
      return false
    }
    return true
  })
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export const geminiQuizService = {
  /**
   * Main quiz generation engine: combines verified bank, cached questions, and dynamic Gemini API
   */
  async generateQuiz(config: QuizConfig, forceAiFresh = false): Promise<GenerationResult> {
    const desiredCount = config.questionCount || 5

    // 1. If not forcing fresh AI, check if verified static bank + cached AI pool have enough matching questions
    if (!forceAiFresh) {
      const verifiedMatches = filterFromPool(VERIFIED_QUESTION_BANK, config)
      const cachedMatches = filterFromPool(amazonVoiceStorage.getCachedQuestions(), config)

      const combinedPool = shuffle([...verifiedMatches, ...cachedMatches])

      if (combinedPool.length >= desiredCount) {
        return {
          questions: combinedPool.slice(0, desiredCount),
          source: verifiedMatches.length >= desiredCount ? 'verified_bank' : 'cached_ai'
        }
      }
    }

    // 2. Need dynamic questions: Call backend serverless endpoint /api/amazon-quiz
    try {
      const response = await fetch('/api/amazon-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categories: config.categories.length > 0 ? config.categories : ['order_issues', 'returns_refunds', 'call_structure'],
          difficulty: config.difficulty,
          questionCount: desiredCount,
          questionType: config.questionType,
          customNotes: amazonVoiceStorage.getCustomNotes(),
          hideAnswersForAssessment: config.mode === 'assessment'
        })
      })

      if (response.ok) {
        const data = await response.json()
        if (Array.isArray(data.questions) && data.questions.length > 0) {
          // If in assessment mode and server gave us assessmentSessionKey, decode it to verify
          let parsedQuestions: VoiceQuizQuestion[] = data.questions
          if (data.assessmentSessionKey) {
            try {
              const decoded = JSON.parse(atob(data.assessmentSessionKey))
              parsedQuestions = decoded
            } catch {
              // fallback to client questions
            }
          }

          // Cache AI generated questions for future cost savings
          amazonVoiceStorage.saveCachedQuestions(parsedQuestions)

          return {
            questions: parsedQuestions.slice(0, desiredCount),
            source: 'gemini_api'
          }
        }
      }
    } catch (networkErr) {
      console.warn('Backend /api/amazon-quiz fetch failed, falling back to local client/bank:', networkErr)
    }

    // 3. Fallback to client-side direct Gemini API if VITE_GEMINI_API_KEY is available
    const clientApiKey = (import.meta.env.VITE_GEMINI_API_KEY as string)?.trim()
    if (clientApiKey) {
      try {
        const directQuestions = await this.generateDirectWithClientKey(config, clientApiKey)
        if (directQuestions.length > 0) {
          amazonVoiceStorage.saveCachedQuestions(directQuestions)
          return {
            questions: directQuestions.slice(0, desiredCount),
            source: 'gemini_api'
          }
        }
      } catch (clientGeminiErr) {
        console.warn('Client-side Gemini generation failed:', clientGeminiErr)
      }
    }

    // 4. Ultimate fallback: Serve best-effort matched questions from verified bank
    const fallbackMatches = filterFromPool(VERIFIED_QUESTION_BANK, config)
    const questionsToReturn = fallbackMatches.length >= desiredCount
      ? shuffle(fallbackMatches).slice(0, desiredCount)
      : shuffle(VERIFIED_QUESTION_BANK).slice(0, desiredCount)

    return {
      questions: questionsToReturn,
      source: 'verified_bank',
      error: 'AI generation quota or endpoint was unavailable; served verified Amazon Voice SOP question bank.'
    }
  },

  /**
   * Client-side fallback generator using direct REST API to Google Gemini
   */
  async generateDirectWithClientKey(config: QuizConfig, apiKey: string): Promise<VoiceQuizQuestion[]> {
    const models = ['gemini-3.5-flash', 'gemini-3.8-flash', 'gemini-flash-latest', 'gemini-3.5-flash-lite']
    const categories = config.categories.length > 0 ? config.categories : ['order_issues', 'returns_refunds', 'call_structure']
    const safeCount = Math.min(Math.max(config.questionCount, 1), 10)

    const prompt = `Generate ${safeCount} multiple-choice training questions for the Amazon North America (NA) Voice Process.
Target Categories: ${categories.join(', ')}. Difficulty: ${config.difficulty}.
SOP Rules:
- DNR Buffer: Mandatory 24-48 hours from delivery timestamp before refund or replacement.
- Refund SLAs: Gift Card 2-3 hours, Credit Card 3-5 business days, Debit/Bank up to 10 business days.
- 30-day return window. FBA vs MFN 48h seller contact. Prime cancellation full refund only if unused.
- Ring Doorbell: 2.4GHz Wi-Fi, RSSI, 20s hard reset.
- 9 Call Flow steps: Greeting, Verification (PII masked), ACA, Probing/Hold (1-2 min max), Resolution, Confirm, Further assistance, Power Closing.

Output a valid JSON array only:
[
  {
    "id": "direct-ai-1",
    "category": "${categories[0]}",
    "topic": "SOP Topic",
    "difficulty": "${config.difficulty === 'mixed' ? 'intermediate' : config.difficulty}",
    "type": "single_choice",
    "question": "Question text",
    "options": [
      { "id": "opt_1", "text": "Option text 1", "distractorReason": "Pedagogical explanation" },
      { "id": "opt_2", "text": "Option text 2", "distractorReason": "Pedagogical explanation" },
      { "id": "opt_3", "text": "Option text 3", "distractorReason": "Pedagogical explanation" },
      { "id": "opt_4", "text": "Option text 4", "distractorReason": "Pedagogical explanation" }
    ],
    "correctAnswerIds": ["opt_1"],
    "explanation": "Detailed explanation citing SOP.",
    "hint": "Pedagogical clue.",
    "referenceSource": "Amazon NA Voice Process - Gemini AI",
    "isVerified": false
  }
]`

    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.4,
              maxOutputTokens: 2000,
              responseMimeType: 'application/json'
            }
          })
        })

        if (!res.ok) continue
        const resData = await res.json()
        const text = resData?.candidates?.[0]?.content?.parts?.[0]?.text
        if (text) {
          const parsed = JSON.parse(text)
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed.map((q: any, i: number) => ({
              ...q,
              id: q.id || `direct-${Date.now()}-${i}`,
              isVerified: false
            }))
          }
        }
      } catch {
        // try next model
      }
    }

    return []
  }
}
