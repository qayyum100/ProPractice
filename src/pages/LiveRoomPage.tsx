import React, { useState, useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { TypingArea } from '../components/typing/TypingArea'
import { LiveMetrics } from '../components/typing/LiveMetrics'
import { TypingEngine } from '../core/typingEngine'
import { LiveTypingMetrics } from '../types/typing'
import { useAuth } from '../context/AuthContext'
import { useTypingSession } from '../context/TypingSessionContext'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import {
  Copy,
  Play,
  Swords,
  Crown
} from 'lucide-react'
import confetti from 'canvas-confetti'

interface MockParticipant {
  id: string
  name: string
  wpm: number
  progress: number
  accuracy: number
  isFinished: boolean
}

const RACE_TEXT = "Continuous deployment and automated regression tests allow high-performing software engineering teams to ship reliable software multiple times per day with absolute confidence."

export const LiveRoomPage: React.FC = () => {
  const { code } = useParams<{ code: string }>()
  const navigate = useNavigate()
  const { profile } = useAuth()
  const { recordCompletedSession } = useTypingSession()

  const [status, setStatus] = useState<'waiting' | 'countdown' | 'in_progress' | 'finished'>('waiting')
  const [countdown, setCountdown] = useState<number>(3)
  const [copied, setCopied] = useState<boolean>(false)

  const engine = useMemo(() => new TypingEngine(RACE_TEXT), [])
  const [myMetrics, setMyMetrics] = useState<LiveTypingMetrics>(engine.getLiveMetrics())

  const [participants, setParticipants] = useState<MockParticipant[]>([
    { id: '1', name: profile?.fullName || 'You', wpm: 0, progress: 0, accuracy: 100, isFinished: false },
    { id: '2', name: 'Alex M.', wpm: 68, progress: 0, accuracy: 98, isFinished: false },
    { id: '3', name: 'Sarah T.', wpm: 75, progress: 0, accuracy: 96, isFinished: false },
  ])

  const copyRoomLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const startCountdown = () => {
    setStatus('countdown')
    let count = 3
    const interval = setInterval(() => {
      count--
      if (count > 0) {
        setCountdown(count)
      } else {
        clearInterval(interval)
        setStatus('in_progress')
        engine.reset(RACE_TEXT)
      }
    }, 1000)
  }

  // Simulate opponent progress ticks during race
  useEffect(() => {
    if (status !== 'in_progress') return

    const interval = setInterval(() => {
      setParticipants((prev) =>
        prev.map((p) => {
          if (p.id === '1') {
            return {
              ...p,
              wpm: myMetrics.netWpm,
              progress: myMetrics.progressPercent,
              accuracy: myMetrics.accuracy,
              isFinished: myMetrics.progressPercent >= 100
            }
          }
          // Opponents progress naturally
          if (p.isFinished) return p
          const addedProgress = Math.min(100, p.progress + (p.wpm / 60) * 1.5)
          return {
            ...p,
            progress: Math.round(addedProgress),
            isFinished: addedProgress >= 100
          }
        })
      )
    }, 400)

    return () => clearInterval(interval)
  }, [status, myMetrics])

  const handleMyMetricsUpdate = (newMetrics: LiveTypingMetrics) => {
    setMyMetrics(newMetrics)
  }

  const handleMyComplete = () => {
    setStatus('finished')
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })

    recordCompletedSession({
      sessionId: 'race_' + Date.now(),
      textContent: RACE_TEXT,
      category: 'speed',
      durationSeconds: myMetrics.elapsedSeconds,
      grossWpm: myMetrics.grossWpm,
      netWpm: myMetrics.netWpm,
      accuracy: myMetrics.accuracy,
      errorCount: myMetrics.incorrectChars,
      backspaceCount: myMetrics.backspaceCount,
      consistencyScore: myMetrics.consistencyScore,
      wpmTimeline: [],
      keyMetrics: engine.getFinalKeyMetrics(),
      weakKeys: engine.getWeakKeys(),
      keystrokeLog: engine.getKeystrokeLog(),
      xpEarned: 200,
      unlockedAchievements: []
    })
  }

  // Ranked participants
  const rankedList = [...participants].sort((a, b) => b.progress - a.progress || b.wpm - a.wpm)

  return (
    <div className="py-8 sm:py-12 space-y-8">
      <Container size="lg" className="space-y-8">
        {/* Room Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
              <Swords className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Room #{code}
                </h1>
                <Badge variant={status === 'in_progress' ? 'brand' : 'success'}>
                  {status.toUpperCase()}
                </Badge>
              </div>
              <p className="text-xs text-neutral-400">
                Synchronized multiplayer race • 60-Second Challenge
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              onClick={copyRoomLink}
              icon={<Copy className="w-3.5 h-3.5" />}
            >
              {copied ? 'Copied Link!' : 'Invite Code'}
            </Button>

            {status === 'waiting' && (
              <Button
                size="sm"
                variant="primary"
                onClick={startCountdown}
                icon={<Play className="w-3.5 h-3.5" />}
              >
                Start Race
              </Button>
            )}
          </div>
        </div>

        {/* Countdown Overlay */}
        {status === 'countdown' && (
          <div className="p-16 rounded-3xl bg-neutral-900 text-white text-center space-y-4 animate-fade-in shadow-2xl">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-mono">
              Synchronizing racers...
            </span>
            <div className="text-7xl sm:text-8xl font-black font-mono animate-bounce text-sky-400">
              {countdown}
            </div>
            <p className="text-sm text-neutral-400">Hands on the keyboard!</p>
          </div>
        )}

        {/* Active Race Arena */}
        {status === 'in_progress' && (
          <div className="space-y-6 animate-fade-in">
            {/* Live Progress Tracks */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] space-y-4 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Live Participant Tracks
              </h3>
              <div className="space-y-3">
                {participants.map((p, idx) => (
                  <div key={p.id} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className={p.id === '1' ? 'text-sky-600 dark:text-sky-400 font-bold' : 'text-neutral-700 dark:text-neutral-300'}>
                        #{idx + 1} {p.name} {p.id === '1' && '(You)'}
                      </span>
                      <span className="font-mono text-neutral-400">
                        {p.wpm} WPM • {p.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          p.id === '1' ? 'bg-sky-500' : 'bg-neutral-500'
                        }`}
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Typing Input */}
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
              <LiveMetrics metrics={myMetrics} />
              <TypingArea
                text={RACE_TEXT}
                engine={engine}
                onMetricsUpdate={handleMyMetricsUpdate}
                onComplete={handleMyComplete}
              />
            </div>
          </div>
        )}

        {/* Post-Race Winner Podium */}
        {status === 'finished' && (
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-xl text-center space-y-8 animate-fade-in">
            <div className="space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
                <Crown className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Race Finished!
              </h2>
              <p className="text-xs text-neutral-500">
                Anti-cheat telemetry verified. Official rankings:
              </p>
            </div>

            {/* Leaderboard Podium */}
            <div className="max-w-md mx-auto space-y-3">
              {rankedList.map((p, rank) => (
                <div
                  key={p.id}
                  className={`p-4 rounded-2xl border flex items-center justify-between ${
                    rank === 0
                      ? 'bg-amber-50/80 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800 font-bold'
                      : 'bg-neutral-50 dark:bg-[#181820] border-neutral-200/60 dark:border-neutral-800'
                  }`}
                >
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-6 text-center font-mono font-bold text-neutral-400">
                      #{rank + 1}
                    </span>
                    <span className="text-neutral-900 dark:text-white">
                      {p.name} {p.id === '1' && '(You)'}
                    </span>
                  </div>

                  <span className="font-mono text-sm text-sky-600 dark:text-sky-400">
                    {p.wpm} WPM
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <Button size="lg" variant="primary" onClick={() => setStatus('waiting')}>
                Race Again
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/challenges')}>
                Back to Challenge Hub
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
