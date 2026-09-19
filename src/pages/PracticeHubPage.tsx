import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { TypingArea } from '../components/typing/TypingArea'
import { LiveMetrics } from '../components/typing/LiveMetrics'
import { VirtualKeyboard } from '../components/typing/VirtualKeyboard'
import { TypingEngine } from '../core/typingEngine'
import { LiveTypingMetrics } from '../types/typing'
import { useTypingSession } from '../context/TypingSessionContext'
import { CURATED_TEXTS } from '../data/curatedTexts'
import { VOCABULARY_CURRICULUM, GRAMMAR_PATTERNS } from '../data/englishCurriculum'
import { DEVELOPER_SCENARIOS } from '../data/developerScenarios'
import { Tabs } from '../components/ui/Tabs'
import {
  RotateCcw,
  Keyboard as KeyboardIcon,
  Sparkles,
  Zap,
  BookOpen,
  Terminal,
  Quote,
  RefreshCw
} from 'lucide-react'

export const PracticeHubPage: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { settings, updateSettings, recordCompletedSession } = useTypingSession()

  // Read URL query param ?mode=
  const initialMode = useMemo(() => {
    const params = new URLSearchParams(location.search)
    return params.get('mode') || 'speed'
  }, [location.search])

  const [activeTab, setActiveTab] = useState<string>(initialMode)
  const [selectedDuration, setSelectedDuration] = useState<number>(settings.duration || 60)
  const [showKeyboard, setShowKeyboard] = useState<boolean>(settings.showLiveKeyboard)
  const [textSeed, setTextSeed] = useState<number>(0) // bump to regenerate text
  const [sessionActive, setSessionActive] = useState<boolean>(false)
  const [timeExpired, setTimeExpired] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Determine practice text
  const targetText = useMemo(() => {
    if (location.state?.customText) {
      return location.state.customText
    }

    if (activeTab === 'english') {
      const vocab = VOCABULARY_CURRICULUM[textSeed % VOCABULARY_CURRICULUM.length]
      return `${vocab.word} (${vocab.partOfSpeech}): ${vocab.definition} For example: "${vocab.exampleSentence}"`
    }

    if (activeTab === 'grammar') {
      const gram = GRAMMAR_PATTERNS[textSeed % GRAMMAR_PATTERNS.length]
      return `${gram.title} — ${gram.ruleExplanation} Practice: ${gram.practiceSentence}`
    }

    if (activeTab === 'developer') {
      const dev = DEVELOPER_SCENARIOS[textSeed % DEVELOPER_SCENARIOS.length]
      return `[${dev.title}] ${dev.textToType}`
    }

    if (activeTab === 'quote') {
      const quotes = CURATED_TEXTS.filter(t => t.category === 'quote')
      const q = quotes[textSeed % quotes.length]
      return `"${q.text}" — ${q.author || 'Anonymous'}`
    }

    // Default Speed texts
    const speedTexts = CURATED_TEXTS.filter(t => t.category === 'speed')
    return speedTexts[textSeed % speedTexts.length].text
  }, [activeTab, location.state, textSeed])

  const engine = useMemo(() => new TypingEngine(targetText), [targetText])
  const [metrics, setMetrics] = useState<LiveTypingMetrics>(engine.getLiveMetrics())

  // Track whether session is active (first keystroke) to start timer
  const handleMetricsUpdate = useCallback((newMetrics: LiveTypingMetrics) => {
    setMetrics(newMetrics)

    // Start timer on first keystroke
    if (!sessionActive && newMetrics.elapsedSeconds > 0) {
      setSessionActive(true)
    }
  }, [sessionActive])

  // When session becomes active, set a timer for duration
  useEffect(() => {
    if (!sessionActive || timeExpired) return

    timerRef.current = setTimeout(() => {
      setTimeExpired(true)
      // Auto-complete with current engine state
      const keyMetrics = engine.getFinalKeyMetrics()
      const weakKeys = engine.getWeakKeys()
      const currentMetrics = engine.getLiveMetrics()

      const sessionResult = recordCompletedSession({
        sessionId: 'sess_' + Date.now(),
        textContent: targetText,
        category: activeTab === 'developer' ? 'developer' : activeTab === 'english' ? 'english' : 'speed',
        durationSeconds: selectedDuration,
        grossWpm: currentMetrics.grossWpm,
        netWpm: currentMetrics.netWpm,
        accuracy: currentMetrics.accuracy,
        errorCount: currentMetrics.incorrectChars,
        backspaceCount: currentMetrics.backspaceCount,
        consistencyScore: currentMetrics.consistencyScore,
        wpmTimeline: [],
        keyMetrics,
        weakKeys,
        keystrokeLog: engine.getKeystrokeLog(),
        xpEarned: 0,
        unlockedAchievements: []
      })

      navigate('/result', { state: { result: sessionResult } })
    }, selectedDuration * 1000)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [sessionActive]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleComplete = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    const keyMetrics = engine.getFinalKeyMetrics()
    const weakKeys = engine.getWeakKeys()

    const sessionResult = recordCompletedSession({
      sessionId: 'sess_' + Date.now(),
      textContent: targetText,
      category: activeTab === 'developer' ? 'developer' : activeTab === 'english' ? 'english' : 'speed',
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
      xpEarned: 0,
      unlockedAchievements: []
    })

    navigate('/result', { state: { result: sessionResult } })
  }, [engine, metrics, activeTab, targetText, recordCompletedSession, navigate])

  const handleRestart = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setSessionActive(false)
    setTimeExpired(false)
    engine.reset(targetText)
    setMetrics(engine.getLiveMetrics())
  }

  const handleNewText = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setSessionActive(false)
    setTimeExpired(false)
    setTextSeed(s => s + 1)
  }

  const tabsList = [
    { id: 'speed', label: 'Speed & Flow', icon: <Zap className="w-4 h-4" /> },
    { id: 'english', label: 'Vocabulary', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'developer', label: 'Developer English', icon: <Terminal className="w-4 h-4" /> },
    { id: 'grammar', label: 'Grammar Syntax', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'quote', label: 'Curated Quotes', icon: <Quote className="w-4 h-4" /> },
  ]

  // Next expected key for virtual keyboard
  const nextExpectedKey = engine.getTargetText()[engine.getInputBuffer().length] ?? ''

  return (
    <div className="py-8 sm:py-12 space-y-8">
      <Container size="lg" className="space-y-6">
        {/* Mode Selector and Duration Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Tabs
            tabs={tabsList}
            activeTab={activeTab}
            onChange={(tabId) => {
              setActiveTab(tabId)
              setSessionActive(false)
              setTimeExpired(false)
              if (timerRef.current) clearTimeout(timerRef.current)
              if (location.state?.customText) {
                navigate('/practice', { replace: true, state: {} })
              }
            }}
          />

          <div className="flex items-center gap-2">
            {/* Duration Toggles */}
            <div className="flex items-center gap-1 bg-neutral-100 dark:bg-[#18181f] p-1 rounded-xl border border-neutral-200/80 dark:border-neutral-800 text-xs font-mono font-semibold">
              {[15, 30, 60, 120].map((dur) => (
                <button
                  key={dur}
                  onClick={() => {
                    setSelectedDuration(dur)
                    handleRestart()
                  }}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    selectedDuration === dur
                      ? 'bg-white dark:bg-[#23232a] text-neutral-900 dark:text-white shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400'
                  }`}
                >
                  {dur}s
                </button>
              ))}
            </div>

            {/* New Text Button */}
            <button
              onClick={handleNewText}
              className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#18181f] text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
              title="Load New Text"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            {/* Keyboard Visualization Toggle */}
            <button
              onClick={() => {
                const next = !showKeyboard
                setShowKeyboard(next)
                updateSettings({ showLiveKeyboard: next })
              }}
              className={`p-2 rounded-xl border transition-colors ${
                showKeyboard
                  ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-300 dark:border-sky-800 text-sky-600 dark:text-sky-300'
                  : 'bg-white dark:bg-[#18181f] border-neutral-200 dark:border-neutral-800 text-neutral-500'
              }`}
              title="Toggle Live Visual Keyboard"
            >
              <KeyboardIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Typing Arena Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
          <LiveMetrics metrics={metrics} durationLimit={selectedDuration} />

          <TypingArea
            text={targetText}
            engine={engine}
            onMetricsUpdate={handleMetricsUpdate}
            onComplete={handleComplete}
          />

          {/* Quick Actions & Shortcut Indicators */}
          <div className="flex flex-wrap items-center justify-between text-xs text-neutral-400 pt-2 border-t border-neutral-100 dark:border-neutral-800/80 gap-2">
            <div className="flex items-center gap-4">
              <span>Category: <strong className="text-neutral-700 dark:text-neutral-300 capitalize">{activeTab}</strong></span>
              <span>Characters: <strong className="text-neutral-700 dark:text-neutral-300">{targetText.length}</strong></span>
              {!sessionActive && <span className="text-neutral-400">⌨ Start typing to begin the timer</span>}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleNewText}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-[#181820] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors font-medium"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>New Text</span>
              </button>
              <button
                onClick={handleRestart}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-[#181820] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restart</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Virtual Keyboard Preview */}
        {showKeyboard && (
          <div className="animate-fade-in">
            <VirtualKeyboard
              activeKey={nextExpectedKey}
            />
          </div>
        )}
      </Container>
    </div>
  )
}
