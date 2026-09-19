export interface KeystrokeEvent {
  key: string
  expectedChar: string
  timestamp: number // ms since session start
  isError: boolean
  isBackspace: boolean
  wpmAtInstant: number
}

export interface CharacterState {
  char: string
  state: 'pending' | 'correct' | 'incorrect' | 'extra'
  typedChar?: string
}

export interface LiveTypingMetrics {
  grossWpm: number
  netWpm: number
  cpm: number
  accuracy: number
  elapsedSeconds: number
  remainingSeconds?: number
  correctChars: number
  incorrectChars: number
  extraChars: number
  backspaceCount: number
  consistencyScore: number // 0-100% based on std deviation of intervals
  progressPercent: number
  lastKeystroke?: {
    key: string
    displayKey: string
    isError: boolean
    isBackspace: boolean
    timestamp: number
  }
}

export interface CompletedSessionResult {
  sessionId: string
  textId?: string
  textContent: string
  category: 'speed' | 'accuracy' | 'english' | 'developer' | 'scenario' | 'custom'
  durationSeconds: number
  grossWpm: number
  netWpm: number
  accuracy: number
  errorCount: number
  backspaceCount: number
  consistencyScore: number
  wpmTimeline: { second: number; wpm: number; rawWpm: number; errorCount: number }[]
  keyMetrics: Record<string, { total: number; errors: number; avgLatencyMs: number }>
  weakKeys: string[]
  keystrokeLog: KeystrokeEvent[]
  xpEarned: number
  unlockedAchievements: string[]
  englishFeedback?: {
    vocabularyHighlights: { word: string; definition: string; context: string }[]
    grammarNotes: string[]
    readingLevel: string
  }
}

export type PracticeMode = 'time' | 'words' | 'quote' | 'english' | 'developer' | 'scenario' | 'custom'

export interface PracticeSettings {
  mode: PracticeMode
  duration: 15 | 30 | 60 | 120 | 300
  wordCount?: 25 | 50 | 100
  includePunctuation: boolean
  includeNumbers: boolean
  soundEnabled: boolean
  soundProfile?: 'mechanical' | 'clicky' | 'tactile' | 'typewriter' | 'bubble'
  soundVolume?: number
  blindMode: boolean
  keyboardLayout: 'qwerty' | 'dvorak' | 'colemak'
  showLiveKeyboard: boolean
  theme: 'light' | 'dark' | 'system'
}

