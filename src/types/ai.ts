export interface AICoachFeedback {
  id: string
  sessionSummary: string
  speedEvaluation: {
    status: 'improving' | 'steady' | 'needs_work'
    comment: string
  }
  accuracyEvaluation: {
    status: 'improving' | 'steady' | 'needs_work'
    comment: string
  }
  weakKeysDetected: string[]
  recommendedPractice: {
    title: string
    category: 'weak_keys' | 'punctuation' | 'numbers' | 'vocabulary' | 'developer' | 'endurance'
    durationMinutes: number
    generatedContent: string
    reason: string
  }
  motivationalNote: string
}

export interface DailyPracticePlan {
  date: string
  estimatedTotalMinutes: number
  totalXpReward: number
  tasks: {
    id: string
    title: string
    category: string
    durationMinutes: number
    xp: number
    completed: boolean
    targetText: string
  }[]
}

export interface SkillDnaMetrics {
  speedScore: number // 0-100
  accuracyScore: number
  consistencyScore: number
  enduranceScore: number
  punctuationMastery: number
  vocabularyBreadth: number
  developerLexicon: number
  rhythmFluidity: number
}
