/**
 * TypeScript Type Definitions for ProPractice - Amazon NA Voice Process Quiz Platform
 */

export type VoiceCategoryKey =
  | 'security_fundamentals'
  | 'order_delivery'
  | 'returns_refunds'
  | 'payments_concessions'
  | 'fulfillment_marketplace'
  | 'prime_subscriptions'
  | 'international_shipping'
  | 'transfers_operations'
  | 'call_handling'
  | 'assessment_performance'
  // Legacy / granular keys
  | 'order_issues'
  | 'product_issues'
  | 'fulfillment_seller'
  | 'amazon_prime'
  | 'ring_troubleshooting'
  | 'call_structure'
  | 'customer_scenarios'
  | 'process_knowledge'

export type QuestionDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'mixed'
export type QuestionType = 'single_choice' | 'multi_select' | 'true_false' | 'scenario' | 'mixed'
export type PracticeMode = 'learn' | 'assessment' | 'timed' | 'review'

export interface VoiceCategoryMeta {
  key: VoiceCategoryKey
  title: string
  shortTitle: string
  badge: string
  description: string
  topics: string[]
  iconName: string
  color: {
    accent: string
    border: string
    bgLight: string
    bgDark: string
    text: string
  }
}

export interface QuizOption {
  id: string
  text: string
  distractorReason?: string // Pedagogical explanation for why this choice is incorrect
}

export interface VoiceQuizQuestion {
  id: string
  category: VoiceCategoryKey
  topic: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  type: 'single_choice' | 'multi_select' | 'true_false' | 'scenario'
  question: string
  options: QuizOption[]
  correctAnswerIds: string[] // Array of option IDs that are correct
  explanation: string
  hint: string
  scenarioContext?: {
    customerName?: string
    callerTone?: 'Angry' | 'Confused' | 'Urgent' | 'Polite' | 'Frustrated'
    orderId?: string
    itemTitle?: string
    carrierStatus?: string
  }
  referenceSource?: string
  isVerified: boolean
}

export interface QuizConfig {
  categories: VoiceCategoryKey[] // Empty means all
  difficulty: QuestionDifficulty
  questionCount: number
  questionType: QuestionType
  mode: PracticeMode
  timeLimitSeconds?: number // For timed mode
  includeScenariosOnly?: boolean
  focusTopic?: string // Optional specific syllabus topic drill (e.g. A-to-z, WMS, Subscribe & Save, etc.)
}

export interface UserAnswerState {
  questionId: string
  selectedOptionIds: string[]
  isCorrect?: boolean
  isMarkedForReview: boolean
  timeSpentSeconds: number
  answeredAt?: number
}

export interface QuizAttemptRecord {
  id: string
  userId?: string
  startedAt: number
  completedAt: number
  totalDurationSeconds: number
  config: QuizConfig
  questions: VoiceQuizQuestion[]
  answers: Record<string, UserAnswerState>
  score: number // Correct count
  totalQuestions: number
  accuracyPercentage: number
  categoryBreakdown: Record<
    VoiceCategoryKey,
    {
      total: number
      correct: number
      accuracy: number
    }
  >
}

export interface CategoryStats {
  totalAttempts: number
  totalCorrect: number
  totalQuestions: number
  accuracy: number
  lastPracticed?: number
}

export interface VoicePlatformUserStats {
  totalQuizzesTaken: number
  totalQuestionsAnswered: number
  totalCorrectAnswers: number
  overallAccuracy: number
  totalTimeSpentSeconds: number
  categoryStats: Record<VoiceCategoryKey, CategoryStats>
  recentAttemptIds: string[]
  bookmarkedQuestionIds: string[]
}

// Call Flow & Interactive Scenario Simulator Types
export type CallFlowStage =
  | 'greeting'
  | 'verification'
  | 'aca'
  | 'probing_hold'
  | 'resolution'
  | 'confirm_resolution'
  | 'further_assistance'
  | 'power_closing'

export interface CallFlowStepOption {
  id: string
  agentUtterance: string
  complianceRating: 'exemplary' | 'acceptable' | 'non_compliant' | 'critical_fail'
  feedback: string
  empathyScore: number // 1-5
  fcrScore: number // 1-5
  complianceNote: string
}

export interface CallFlowScenario {
  id: string
  title: string
  category: VoiceCategoryKey
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  customerPersona: {
    name: string
    tone: 'Irate' | 'Anxious' | 'Deceptive' | 'Elderly / Confused' | 'Impatient'
    summary: string
  }
  initialPrompt: string
  context: {
    orderId: string
    trackingStatus: string
    item: string
    itemPrice: string
    deliveryBufferMet: boolean
    primeMember: boolean
  }
  stages: {
    stage: CallFlowStage
    stageTitle: string
    customerDialogue: string
    options: CallFlowStepOption[]
  }[]
}
