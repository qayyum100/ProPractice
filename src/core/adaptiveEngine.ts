import { CompletedSessionResult } from '../types/typing'
import { SkillDnaMetrics } from '../types/ai'

export function computeSkillDna(sessions: CompletedSessionResult[]): SkillDnaMetrics {
  if (sessions.length === 0) {
    return {
      speedScore: 45,
      accuracyScore: 75,
      consistencyScore: 60,
      enduranceScore: 40,
      punctuationMastery: 50,
      vocabularyBreadth: 55,
      developerLexicon: 40,
      rhythmFluidity: 60
    }
  }

  const recent = sessions.slice(0, 15)
  const avgWpm = recent.reduce((sum, s) => sum + s.netWpm, 0) / recent.length
  const avgAcc = recent.reduce((sum, s) => sum + s.accuracy, 0) / recent.length
  const avgConsistency = recent.reduce((sum, s) => sum + s.consistencyScore, 0) / recent.length

  const devSessions = recent.filter(s => s.category === 'developer' || s.category === 'scenario')
  const englishSessions = recent.filter(s => s.category === 'english')

  // Normalized to 0-100 scale
  const speedScore = Math.min(100, Math.round((avgWpm / 110) * 100))
  const accuracyScore = Math.min(100, Math.round(avgAcc))
  const consistencyScore = Math.min(100, Math.round(avgConsistency))
  const enduranceScore = Math.min(100, Math.round((recent.reduce((sum, s) => sum + s.durationSeconds, 0) / (recent.length * 60)) * 70))
  
  // Calculate punctuation accuracy
  let punctErrors = 0
  let punctTotal = 0
  recent.forEach(s => {
    for (const [key, val] of Object.entries(s.keyMetrics)) {
      if (/^[.,!?;:'"-]/.test(key)) {
        punctTotal += val.total
        punctErrors += val.errors
      }
    }
  })
  const punctuationMastery = punctTotal > 0 
    ? Math.max(20, Math.min(100, Math.round(((punctTotal - punctErrors) / punctTotal) * 100))) 
    : 70

  const vocabularyBreadth = Math.min(100, 50 + englishSessions.length * 10)
  const developerLexicon = Math.min(100, 45 + devSessions.length * 12)
  const rhythmFluidity = Math.min(100, Math.round(avgConsistency * 0.9 + (avgWpm / 120) * 10))

  return {
    speedScore,
    accuracyScore,
    consistencyScore,
    enduranceScore,
    punctuationMastery,
    vocabularyBreadth,
    developerLexicon,
    rhythmFluidity
  }
}

export function detectTopWeaknesses(sessions: CompletedSessionResult[]): {
  topWeakKeys: { key: string; errorCount: number; errorRate: number }[]
  recommendedCategory: 'speed' | 'accuracy' | 'english' | 'developer' | 'punctuation'
} {
  const aggregatedKeys: Record<string, { total: number; errors: number }> = {}

  sessions.slice(0, 10).forEach(s => {
    for (const [key, val] of Object.entries(s.keyMetrics)) {
      if (!aggregatedKeys[key]) {
        aggregatedKeys[key] = { total: 0, errors: 0 }
      }
      aggregatedKeys[key].total += val.total
      aggregatedKeys[key].errors += val.errors
    }
  })

  const topWeakKeys = Object.entries(aggregatedKeys)
    .filter(([, data]) => data.total >= 3 && data.errors > 0)
    .map(([key, data]) => ({
      key,
      errorCount: data.errors,
      errorRate: Math.round((data.errors / data.total) * 100)
    }))
    .sort((a, b) => b.errorRate - a.errorRate)
    .slice(0, 5)

  // Recommend category based on recent accuracy vs speed
  const recentAcc = sessions.length > 0 ? sessions[0].accuracy : 100
  let recommendedCategory: 'speed' | 'accuracy' | 'english' | 'developer' | 'punctuation' = 'speed'

  if (recentAcc < 93) {
    recommendedCategory = 'accuracy'
  } else if (topWeakKeys.some(k => /^[.,!?;:'"-]/.test(k.key))) {
    recommendedCategory = 'punctuation'
  } else if (sessions.some(s => s.category === 'developer')) {
    recommendedCategory = 'developer'
  } else {
    recommendedCategory = 'english'
  }

  return {
    topWeakKeys,
    recommendedCategory
  }
}
