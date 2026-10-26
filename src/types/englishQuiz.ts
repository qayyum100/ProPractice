export type EnglishQuizLevelKey = 'level_1' | 'level_2' | 'level_3' | 'level_4' | 'level_5'

export type EnglishQuizDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'mixed'

export type EnglishQuizMode = 'learn' | 'assessment'

export interface EnglishQuestionOption {
  id: string
  text: string
  distractorReason?: string
}

export interface EnglishQuizQuestion {
  id: string
  level: EnglishQuizLevelKey
  levelNumber: number
  levelLabel: string
  topic: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  question: string
  options: EnglishQuestionOption[]
  correctAnswerIds: string[]
  explanation: string
  hint: string
  grammarRule?: string
  exampleSentence?: string
  referenceCEFR: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
  isVerified: boolean
}

export interface EnglishLevelMeta {
  key: EnglishQuizLevelKey
  number: number
  title: string
  shortTitle: string
  cefr: string
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

export interface EnglishFocusTopic {
  id: string
  title: string
  shortTitle: string
  badge: string
  query: string
  levelKey: EnglishQuizLevelKey
  description: string
}

export interface EnglishQuizConfig {
  levels: EnglishQuizLevelKey[]
  difficulty: EnglishQuizDifficulty
  questionCount: number
  mode: EnglishQuizMode
  timeLimitMinutes?: number
  focusTopic?: string
}

export interface EnglishUserAnswerState {
  selectedOptionIds: string[]
  isCorrect: boolean
  flaggedForReview?: boolean
  timeSpentSeconds?: number
}

export interface EnglishLevelBreakdown {
  total: number
  correct: number
  accuracy: number
}

export interface EnglishQuizAttemptRecord {
  id: string
  startedAt: number
  completedAt: number
  totalDurationSeconds: number
  config: EnglishQuizConfig
  questions: EnglishQuizQuestion[]
  answers: Record<string, EnglishUserAnswerState>
  score: number
  totalQuestions: number
  accuracyPercentage: number
  levelBreakdown: Record<EnglishQuizLevelKey, EnglishLevelBreakdown>
}

export interface EnglishQuizStats {
  totalAttempts: number
  totalQuestionsAnswered: number
  totalCorrect: number
  averageAccuracy: number
  levelAccuracy: Record<EnglishQuizLevelKey, { attempted: number; correct: number; accuracy: number }>
  lastActiveTimestamp?: number
}
