export interface ChallengeRoom {
  id: string
  roomCode: string
  hostId: string
  title: string
  textContent: string
  durationSeconds: number
  maxParticipants: number
  status: 'waiting' | 'countdown' | 'in_progress' | 'completed'
  countdownRemaining?: number
  createdAt: string
}

export interface ParticipantTelemetry {
  userId: string
  username: string
  avatarUrl?: string
  currentWpm: number
  progressPercent: number
  accuracy: number
  isFinished: boolean
  finalWpm?: number
  rank?: number
}

export interface LeaderboardEntry {
  userId: string
  username: string
  avatarUrl?: string
  topWpm: number
  avgAccuracy: number
  totalXp: number
  currentLevel: number
  streak: number
}
