import { CompletedSessionResult } from '../types/typing'
import { AICoachFeedback, DailyPracticePlan } from '../types/ai'

export class AICoachService {
  /**
   * Generates comprehensive, actionable feedback for a completed typing/English session
   */
  public static analyzeSession(session: CompletedSessionResult): AICoachFeedback {
    const isAccurate = session.accuracy >= 96
    const weakKeys = session.weakKeys || []

    let speedStatus: 'improving' | 'steady' | 'needs_work' = 'steady'
    let speedComment = `Your cadence clocked ${session.netWpm} Net WPM with smooth rhythm.`
    if (session.netWpm >= 75) {
      speedStatus = 'improving'
      speedComment = `Impressive velocity! You sustained ${session.netWpm} WPM without fatigue.`
    } else if (session.netWpm < 40) {
      speedStatus = 'needs_work'
      speedComment = `Focus on keeping a continuous finger flow rather than stopping between words.`
    }

    let accStatus: 'improving' | 'steady' | 'needs_work' = isAccurate ? 'improving' : 'needs_work'
    let accComment = `${session.accuracy}% accuracy is solid. Minimal backspaces detected.`
    if (session.accuracy < 92) {
      accComment = `Accuracy dropped to ${session.accuracy}%. Slow down by 5-10% on punctuation to build clean muscle memory.`
    } else if (session.accuracy >= 98) {
      accComment = `Near surgical precision at ${session.accuracy}%. You can safely push for higher burst speed.`
    }

    // Weak key targeted generator
    let practiceTitle = 'Punctuation & Flow Drills'
    let practiceCategory: 'weak_keys' | 'punctuation' | 'numbers' | 'vocabulary' | 'developer' | 'endurance' = 'punctuation'
    let generatedContent = 'Precision requires deliberate control. Practicing commas, periods, and semicolons will balance your typing rhythm.'
    let reason = 'Strengthening your accuracy on transition keys will elevate your net WPM.'

    if (weakKeys.length > 0) {
      const primaryWeak = weakKeys[0]
      practiceTitle = `Targeted Key Focus: [${primaryWeak.toUpperCase()}]`
      practiceCategory = 'weak_keys'
      generatedContent = this.generateWeakKeyDrill(primaryWeak)
      reason = `You exhibited higher error latency on the "${primaryWeak}" key during this run.`
    } else if (session.category === 'developer') {
      practiceTitle = 'API & System Architecture Lexicon'
      practiceCategory = 'developer'
      generatedContent = 'Implement idempotent webhook receivers with cryptographic HMAC signature verification and exponential backoff retry policies.'
      reason = 'Reinforce practical software engineering terminology and camelCase accuracy.'
    }

    return {
      id: 'coach_' + Date.now(),
      sessionSummary: `Completed a ${Math.round(session.durationSeconds)}s ${session.category} session at ${session.netWpm} WPM and ${session.accuracy}% accuracy.`,
      speedEvaluation: {
        status: speedStatus,
        comment: speedComment
      },
      accuracyEvaluation: {
        status: accStatus,
        comment: accComment
      },
      weakKeysDetected: weakKeys,
      recommendedPractice: {
        title: practiceTitle,
        category: practiceCategory,
        durationMinutes: 3,
        generatedContent,
        reason
      },
      motivationalNote: isAccurate 
        ? 'Great consistency today! Regular deliberate practice compounds quickly.'
        : 'Precision precedes velocity. Keep your focus on clean keystrokes.'
    }
  }

  /**
   * Generates a weak-key specific drill sentence
   */
  public static generateWeakKeyDrill(key: string): string {
    const drills: Record<string, string> = {
      t: 'The tenacious technician thoughtfully tested three architectural theories through thorough telemetry.',
      p: 'Pragmatic programmers prioritize predictable performance, proper profiling, and polished production pipelines.',
      s: 'Systematic software solutions scale seamlessly across distributed server clusters with sensible security policies.',
      c: 'Clean code communicates clear concepts, concise conditions, and consistent computational constructs.',
      r: 'Reliable real-time replication requires robust error recovery and resilient distributed routing routines.',
      e: 'Engineers eagerly evaluate every edge case to ensure excellent end-user experience across enterprise ecosystems.'
    }
    return drills[key.toLowerCase()] || `Practice deliberate repetitions of words featuring the "${key}" key with relaxed hand posture.`
  }

  /**
   * Generates a tailored daily practice plan
   */
  public static generateDailyPlan(): DailyPracticePlan {
    const today = new Date().toISOString().split('T')[0]
    return {
      date: today,
      estimatedTotalMinutes: 15,
      totalXpReward: 250,
      tasks: [
        {
          id: 'task_warmup',
          title: 'Morning Flow Warm-up',
          category: 'Warm-up',
          durationMinutes: 3,
          xp: 40,
          completed: false,
          targetText: 'A steady rhythm unlocks effortless velocity. Focus on maintaining relaxed wrists and smooth transitions.'
        },
        {
          id: 'task_weak_key',
          title: 'Precision Punctuation Sprint',
          category: 'Precision',
          durationMinutes: 4,
          xp: 60,
          completed: false,
          targetText: 'Clear documentation, structured commits, and reliable code reviews: these three pillars elevate high-performing teams.'
        },
        {
          id: 'task_english',
          title: 'Professional English & Vocabulary',
          category: 'English',
          durationMinutes: 5,
          xp: 80,
          completed: false,
          targetText: 'Articulating complex trade-offs with clarity and empathy ensures alignment between product managers and technical architects.'
        },
        {
          id: 'task_speed',
          title: '60-Second Challenge Milestone',
          category: 'Challenge',
          durationMinutes: 3,
          xp: 70,
          completed: false,
          targetText: 'High-frequency keystroke cadence demands rapid word recognition and neuromuscular coordination under time pressure.'
        }
      ]
    }
  }
}
