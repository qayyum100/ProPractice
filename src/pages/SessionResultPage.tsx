import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { useTypingSession } from '../context/TypingSessionContext'
import { Heatmap } from '../components/typing/Heatmap'
import { FlightReplay } from '../components/typing/FlightReplay'
import { AICoachCard } from '../components/ai/AICoachCard'
import { AICoachService } from '../core/aiCoachService'
import { evaluateLevel } from '../core/xpCalculator'
import { ProgressBar } from '../components/ui/ProgressBar'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { generateSessionCoachFeedback } from '../lib/gemini'
import { AICoachFeedback } from '../types/ai'
import {
  Sparkles,
  RotateCcw,
  Share2
} from 'lucide-react'

export const SessionResultPage: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { latestResult, userStats } = useTypingSession()

  const result = location.state?.result || latestResult

  const [feedback, setFeedback] = useState<AICoachFeedback | null>(() => {
    return result ? AICoachService.analyzeSession(result) : null
  })

  useEffect(() => {
    if (!result) return
    let isCancelled = false

    generateSessionCoachFeedback({
      netWpm: result.netWpm,
      accuracy: result.accuracy,
      durationSeconds: result.durationSeconds,
      category: result.category || 'General',
      weakKeys: result.weakKeys || []
    })
      .then((aiInsights) => {
        if (isCancelled) return
        setFeedback((prev) => {
          if (!prev) return null
          return {
            ...prev,
            speedEvaluation: {
              ...prev.speedEvaluation,
              comment: aiInsights.speedComment
            },
            accuracyEvaluation: {
              ...prev.accuracyEvaluation,
              comment: aiInsights.accuracyComment
            },
            recommendedPractice: {
              ...prev.recommendedPractice,
              generatedContent: aiInsights.drillText,
              reason: aiInsights.coachingRecommendation
            },
            motivationalNote: aiInsights.motivationalNote
          }
        })
      })
      .catch((e) => {
        console.warn('Gemini coach telemetry note:', e)
      })

    return () => {
      isCancelled = true
    }
  }, [result])

  if (!result) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">No active session result found</h2>
        <p className="text-sm text-neutral-500">Complete a typing session to inspect your detailed telemetry.</p>
        <Link to="/practice">
          <Button variant="primary">Go to Practice Hub</Button>
        </Link>
      </div>
    )
  }

  const { currentLevel, tier, progressPercent } = evaluateLevel(userStats.totalXp)

  const handleStartRecommended = (drillText: string) => {
    navigate('/practice', {
      state: {
        customText: drillText,
        mode: 'ai_coaching'
      }
    })
  }

  const handleCopyResults = () => {
    const text = `Practice Run: ${result.netWpm} WPM | ${result.accuracy}% Accuracy | ${result.consistencyScore}% Consistency on Practice Platform.`
    navigator.clipboard.writeText(text)
    alert('Results copied to clipboard!')
  }

  return (
    <div className="py-8 sm:py-12 space-y-10">
      <Container size="lg" className="space-y-10">
        {/* 1. Large Hero Performance Telemetry Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-8 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Session Performance Report
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-0.5">
                Session Telemetry Complete
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={handleCopyResults}
                icon={<Share2 className="w-4 h-4" />}
              >
                Share
              </Button>
              <Button
                size="sm"
                variant="primary"
                onClick={() => navigate('/practice')}
                icon={<RotateCcw className="w-4 h-4" />}
              >
                Practice Again
              </Button>
            </div>
          </div>

          {/* Large Numbers HUD */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Net Speed
              </span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl sm:text-6xl font-mono font-extrabold text-sky-600 dark:text-sky-400 tracking-tight">
                  {result.netWpm}
                </span>
                <span className="text-sm font-bold text-neutral-400">WPM</span>
              </div>
              <span className="text-xs text-neutral-400">Gross: {result.grossWpm} WPM</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Accuracy
              </span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl sm:text-6xl font-mono font-extrabold text-neutral-900 dark:text-white tracking-tight">
                  {result.accuracy}
                </span>
                <span className="text-sm font-bold text-neutral-400">%</span>
              </div>
              <span className="text-xs text-neutral-400">{result.errorCount} total errors</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Consistency
              </span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl sm:text-6xl font-mono font-extrabold text-neutral-900 dark:text-white tracking-tight">
                  {result.consistencyScore}
                </span>
                <span className="text-sm font-bold text-neutral-400">%</span>
              </div>
              <span className="text-xs text-neutral-400">Rhythm Index</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Duration
              </span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl sm:text-6xl font-mono font-extrabold text-neutral-900 dark:text-white tracking-tight">
                  {Math.round(result.durationSeconds)}
                </span>
                <span className="text-sm font-bold text-neutral-400">sec</span>
              </div>
              <span className="text-xs text-neutral-400">{result.backspaceCount} backspaces</span>
            </div>
          </div>

          {/* XP & Level Progress Bar */}
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200/60 dark:border-neutral-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold">
              <div className="flex items-center gap-2 text-neutral-900 dark:text-white">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Earned +{result.xpEarned} XP this session</span>
              </div>
              <span className="text-neutral-500">
                Level {currentLevel} ({tier.title}) • {userStats.totalXp.toLocaleString()} Total XP
              </span>
            </div>
            <ProgressBar value={progressPercent} color="brand" />
          </div>
        </div>

        {/* 2. AI Coach Diagnostics Card */}
        {feedback && (
          <AICoachCard
            feedback={feedback}
            onStartRecommended={handleStartRecommended}
          />
        )}

        {/* 3. Keyboard Heatmap Section */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Keystroke Heatmap
              </h3>
              <p className="text-xs text-neutral-500">
                Visualizing character error densities and latencies across your physical keyboard layout.
              </p>
            </div>
            <Badge variant="neutral">Heatmap Overlay</Badge>
          </div>

          <Heatmap keyMetrics={result.keyMetrics} />
        </div>

        {/* 4. Flight Recorder Replay Widget */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Flight Recorder Session Replay
              </h3>
              <p className="text-xs text-neutral-500">
                Replay your exact keystroke cadence, pauses, backspaces, and speed variations in real-time.
              </p>
            </div>
            <Badge variant="brand">Flight Recorder</Badge>
          </div>

          <FlightReplay
            targetText={result.textContent}
            keystrokeLog={result.keystrokeLog}
          />
        </div>

        {/* 5. Bottom Navigation CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/practice">
            <Button size="lg" variant="primary" icon={<RotateCcw className="w-4 h-4" />}>
              Next Practice Session
            </Button>
          </Link>
          <Link to="/progress">
            <Button size="lg" variant="secondary">
              View Long-Term Analytics
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
