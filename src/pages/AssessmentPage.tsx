import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { TypingArea } from '../components/typing/TypingArea'
import { LiveMetrics } from '../components/typing/LiveMetrics'
import { TypingEngine } from '../core/typingEngine'
import { LiveTypingMetrics } from '../types/typing'
import { useTypingSession } from '../context/TypingSessionContext'
import { useAuth } from '../context/AuthContext'
import { SkillDNAChart } from '../components/analytics/SkillDNAChart'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react'

const ASSESSMENT_TEXT = "Mastering both keyboard velocity and clear articulation is the cornerstone of effective modern engineering. By building neuromuscular consistency, eliminating backspaces, and practicing deliberate vocabulary, you elevate your daily productivity."

export const AssessmentPage: React.FC = () => {
  const navigate = useNavigate()
  const { recordCompletedSession } = useTypingSession()
  const { updateProfile } = useAuth()
  const engine = useMemo(() => new TypingEngine(ASSESSMENT_TEXT), [])

  const [metrics, setMetrics] = useState<LiveTypingMetrics>(engine.getLiveMetrics())
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  const handleMetricsUpdate = (newMetrics: LiveTypingMetrics) => {
    setMetrics(newMetrics)
  }

  const handleComplete = () => {
    setIsCompleted(true)
    const keyMetrics = engine.getFinalKeyMetrics()
    const weakKeys = engine.getWeakKeys()

    const sessionResult = recordCompletedSession({
      sessionId: 'assessment_' + Date.now(),
      textContent: ASSESSMENT_TEXT,
      category: 'accuracy',
      durationSeconds: metrics.elapsedSeconds,
      grossWpm: metrics.grossWpm,
      netWpm: metrics.netWpm,
      accuracy: metrics.accuracy,
      errorCount: metrics.incorrectChars,
      backspaceCount: metrics.backspaceCount,
      consistencyScore: metrics.consistencyScore,
      wpmTimeline: [],
      keyMetrics,
      weakKeys,
      keystrokeLog: engine.getKeystrokeLog(),
      xpEarned: 150,
      unlockedAchievements: ['first_practice']
    })

    // Determine starting English & Experience tier
    let expLevel = 'beginner'
    let engLevel = 'Level 1'

    if (sessionResult.netWpm >= 70 && sessionResult.accuracy >= 95) {
      expLevel = 'advanced'
      engLevel = 'Level 4'
    } else if (sessionResult.netWpm >= 45 && sessionResult.accuracy >= 90) {
      expLevel = 'intermediate'
      engLevel = 'Level 3'
    } else {
      expLevel = 'starter'
      engLevel = 'Level 2'
    }

    updateProfile({
      experienceLevel: expLevel,
      englishLevel: engLevel
    })
  }

  const restartAssessment = () => {
    engine.reset(ASSESSMENT_TEXT)
    setMetrics(engine.getLiveMetrics())
    setIsCompleted(false)
  }

  return (
    <div className="py-10 sm:py-16">
      <Container size="md" className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <Badge variant="brand">Baseline Calibration</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Initial Skill Assessment
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            Type the passage below naturally. We will measure your baseline speed, neuromuscular accuracy, rhythm, and vocabulary comprehension.
          </p>
        </div>

        {!isCompleted ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
            <LiveMetrics metrics={metrics} />

            <TypingArea
              text={ASSESSMENT_TEXT}
              engine={engine}
              onMetricsUpdate={handleMetricsUpdate}
              onComplete={handleComplete}
            />

            <div className="flex items-center justify-between text-xs text-neutral-400 pt-2">
              <span>💡 Focus on accuracy first — avoid excessive backspaces.</span>
              <button
                onClick={restartAssessment}
                className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restart</span>
              </button>
            </div>
          </div>
        ) : (
          /* Post Assessment Baseline Report */
          <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-xl space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Assessment Complete!
              </h2>
              <p className="text-xs text-neutral-500">
                Here is your baseline skill fingerprint:
              </p>
            </div>

            {/* Core Baseline Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-neutral-50 dark:bg-[#181820] text-center">
              <div>
                <span className="text-[11px] font-bold text-neutral-400 uppercase">Speed</span>
                <p className="text-3xl font-mono font-bold text-sky-600 dark:text-sky-400 mt-0.5">
                  {metrics.netWpm} <span className="text-xs font-normal">WPM</span>
                </p>
              </div>
              <div>
                <span className="text-[11px] font-bold text-neutral-400 uppercase">Accuracy</span>
                <p className="text-3xl font-mono font-bold text-neutral-900 dark:text-white mt-0.5">
                  {metrics.accuracy}%
                </p>
              </div>
              <div>
                <span className="text-[11px] font-bold text-neutral-400 uppercase">Typing Level</span>
                <p className="text-lg font-bold text-neutral-900 dark:text-white mt-1">
                  {metrics.netWpm >= 65 ? 'Advanced' : metrics.netWpm >= 40 ? 'Intermediate' : 'Starter'}
                </p>
              </div>
              <div>
                <span className="text-[11px] font-bold text-neutral-400 uppercase">English Tier</span>
                <p className="text-lg font-bold text-neutral-900 dark:text-white mt-1">
                  Level {metrics.netWpm >= 65 ? '3' : '2'}
                </p>
              </div>
            </div>

            {/* Skill DNA Visualization */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white text-center">
                Calibrated Skill Fingerprint (DNA)
              </h3>
              <SkillDNAChart
                metrics={{
                  speedScore: Math.min(100, Math.round((metrics.netWpm / 100) * 100)),
                  accuracyScore: Math.round(metrics.accuracy),
                  consistencyScore: metrics.consistencyScore,
                  enduranceScore: 60,
                  punctuationMastery: 70,
                  vocabularyBreadth: 65,
                  developerLexicon: 55,
                  rhythmFluidity: metrics.consistencyScore
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <Button
                size="lg"
                variant="primary"
                onClick={() => navigate('/dashboard')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Go to My Dashboard
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/practice')}
              >
                Start Practice Session
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
