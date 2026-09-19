export type EnglishLevel = 'Level 1' | 'Level 2' | 'Level 3' | 'Level 4' | 'Level 5'

export interface VocabularyItem {
  id: string
  word: string
  phonetic?: string
  partOfSpeech: string
  definition: string
  exampleSentence: string
  level: EnglishLevel
  category: 'business' | 'developer' | 'academic' | 'everyday' | 'idiom'
  synonyms?: string[]
}

export interface GrammarPattern {
  id: string
  title: string
  ruleExplanation: string
  commonMistake: string
  correctUsage: string
  practiceSentence: string
  level: EnglishLevel
}

export interface ScenarioPractice {
  id: string
  title: string
  category: 'email' | 'pr_review' | 'incident' | 'interview' | 'documentation' | 'meeting_notes'
  roleContext: string
  textToType: string
  targetVocabulary: string[]
  keyTakeaway: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

export interface EnglishSessionAnalysis {
  wordsTyped: number
  targetVocabularyUsed: { word: string; definition: string; mastered: boolean }[]
  grammarPointers: string[]
  readingEaseScore: number
  readabilityGrade: string
}
