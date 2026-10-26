import React, { useState, useEffect, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import {
  EnglishQuizConfig,
  EnglishQuizQuestion,
  EnglishQuizLevelKey,
  EnglishUserAnswerState,
  EnglishQuizAttemptRecord
} from '../types/englishQuiz'
import {
  ENGLISH_LEVELS_METADATA,
  FOCUS_ENGLISH_TOPICS,
  VERIFIED_ENGLISH_QUESTION_BANK
} from '../data/englishLevelsQuestionBank'
import { englishQuizStorage } from '../lib/englishQuizStorage'
import { EnglishSetupModal } from '../components/englishQuiz/EnglishSetupModal'
import {
  Compass,
  BookOpen,
  Zap,
  Sparkles,
  Crown,
  Target,
  Sliders,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  RotateCw,
  Search,
  Bookmark,
  BookmarkCheck,
  Award,
  Headphones,
  Check,
  Lightbulb,
  ExternalLink,
  AlertCircle,
  Flag,
  FileText
} from 'lucide-react'

type PageViewMode = 'dashboard' | 'active_quiz' | 'results'

export const EnglishLevelsQuizPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<PageViewMode>('dashboard')
  const [isSetupOpen, setIsSetupOpen] = useState(false)
  const [setupInitialLevel, setSetupInitialLevel] = useState<EnglishQuizLevelKey | undefined>()
  const [setupInitialFocusTopic, setSetupInitialFocusTopic] = useState<string | undefined>()

  // Active Quiz State
  const [currentConfig, setCurrentConfig] = useState<EnglishQuizConfig | null>(null)
  const [activeQuestions, setActiveQuestions] = useState<EnglishQuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, EnglishUserAnswerState>>({})
  const [quizStartTime, setQuizStartTime] = useState<number>(0)
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(0)
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false)
  const [showHint, setShowHint] = useState<boolean>(false)

  // Results State
  const [lastAttempt, setLastAttempt] = useState<EnglishQuizAttemptRecord | null>(null)
  const [resultsFilter, setResultsFilter] = useState<'all' | 'incorrect' | 'flagged'>('all')

  // Storage Stats & Bookmarks
  const [stats, setStats] = useState(englishQuizStorage.getStats())
  const [bookmarks, setBookmarks] = useState<string[]>(englishQuizStorage.getBookmarks())
  const [recentAttempts, setRecentAttempts] = useState<EnglishQuizAttemptRecord[]>(englishQuizStorage.getAttempts())

  // Refresh user data helper
  const refreshUserData = () => {
    setStats(englishQuizStorage.getStats())
    setBookmarks(englishQuizStorage.getBookmarks())
    setRecentAttempts(englishQuizStorage.getAttempts())
  }

  // Assessment Timer
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  useEffect(() => {
    if (viewMode === 'active_quiz' && currentConfig?.mode === 'assessment' && timeRemainingSeconds > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!)
            handleSubmitQuiz(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [viewMode, currentConfig, timeRemainingSeconds])

  // Prevent accidental unload during assessment
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (viewMode === 'active_quiz' && activeQuestions.length > 0) {
        e.preventDefault()
        e.returnValue = ''
      }
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [viewMode, activeQuestions])

  // Launch Quiz from Config
  const handleStartQuiz = (config: EnglishQuizConfig) => {
    setIsSetupOpen(false)
    let pool = [...VERIFIED_ENGLISH_QUESTION_BANK]

    // 1. Filter by levels
    if (config.levels.length > 0) {
      pool = pool.filter((q) => config.levels.includes(q.level))
    }

    // 2. Filter by difficulty
    if (config.difficulty !== 'mixed') {
      pool = pool.filter((q) => q.difficulty === config.difficulty)
    }

    // 3. Filter by focusTopic query
    if (config.focusTopic && config.focusTopic.trim().length > 0) {
      const qTerm = config.focusTopic.toLowerCase().trim()
      const matching = pool.filter(
        (q) =>
          q.topic.toLowerCase().includes(qTerm) ||
          q.question.toLowerCase().includes(qTerm) ||
          q.explanation.toLowerCase().includes(qTerm) ||
          (q.grammarRule && q.grammarRule.toLowerCase().includes(qTerm))
      )
      if (matching.length > 0) {
        pool = matching
      }
    }

    // Shuffle using Fisher-Yates
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, Math.min(config.questionCount, shuffled.length))

    if (selected.length === 0) {
      alert('No questions found matching your filter criteria. Please adjust your settings.')
      return
    }

    setCurrentConfig(config)
    setActiveQuestions(selected)
    setCurrentIndex(0)
    setUserAnswers({})
    setShowHint(false)
    setQuizStartTime(Date.now())

    if (config.mode === 'assessment' && config.timeLimitMinutes) {
      setTimeRemainingSeconds(config.timeLimitMinutes * 60)
    } else {
      setTimeRemainingSeconds(0)
    }

    setViewMode('active_quiz')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Quick Start 10-Q mixed drill
  const handleQuickStart = () => {
    handleStartQuiz({
      levels: ['level_1', 'level_2', 'level_3', 'level_4', 'level_5'],
      difficulty: 'mixed',
      questionCount: 10,
      mode: 'learn'
    })
  }

  // 1-Click Level Drill
  const handleLaunchLevelDrill = (levelKey: EnglishQuizLevelKey) => {
    handleStartQuiz({
      levels: [levelKey],
      difficulty: 'mixed',
      questionCount: 10,
      mode: 'learn'
    })
  }

  // 1-Click Topic Drill
  const handleLaunchTopicDrill = (query: string, levelKey: EnglishQuizLevelKey) => {
    handleStartQuiz({
      levels: [levelKey],
      difficulty: 'mixed',
      questionCount: 10,
      mode: 'learn',
      focusTopic: query
    })
  }

  // Answer selection in active quiz
  const handleSelectOption = (optionId: string) => {
    const currentQ = activeQuestions[currentIndex]
    if (!currentQ) return

    const isCorrect = currentQ.correctAnswerIds.includes(optionId)
    const currentAns = userAnswers[currentQ.id]

    // In Learn mode: if already answered, allow reviewing options without mutating score
    if (currentConfig?.mode === 'learn' && currentAns) {
      return
    }

    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        selectedOptionIds: [optionId],
        isCorrect,
        flaggedForReview: prev[currentQ.id]?.flaggedForReview || false
      }
    }))
  }

  // Toggle flag for review in assessment mode
  const handleToggleFlag = (questionId: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: {
        selectedOptionIds: prev[questionId]?.selectedOptionIds || [],
        isCorrect: prev[questionId]?.isCorrect || false,
        flaggedForReview: !prev[questionId]?.flaggedForReview
      }
    }))
  }

  // Bookmark toggle
  const handleToggleBookmark = (questionId: string) => {
    englishQuizStorage.toggleBookmark(questionId)
    setBookmarks(englishQuizStorage.getBookmarks())
  }

  // Submit and grade quiz
  const handleSubmitQuiz = (isTimeExpired = false) => {
    if (!currentConfig) return

    const completedAt = Date.now()
    const totalDurationSeconds = Math.max(1, Math.round((completedAt - quizStartTime) / 1000))

    let correctCount = 0
    const levelBreakdown: Record<EnglishQuizLevelKey, { total: number; correct: number; accuracy: number }> = {
      level_1: { total: 0, correct: 0, accuracy: 0 },
      level_2: { total: 0, correct: 0, accuracy: 0 },
      level_3: { total: 0, correct: 0, accuracy: 0 },
      level_4: { total: 0, correct: 0, accuracy: 0 },
      level_5: { total: 0, correct: 0, accuracy: 0 }
    }

    activeQuestions.forEach((q) => {
      const ans = userAnswers[q.id]
      const isQCorrect = ans ? ans.isCorrect : false

      levelBreakdown[q.level].total++
      if (isQCorrect) {
        correctCount++
        levelBreakdown[q.level].correct++
      }
    })

    Object.keys(levelBreakdown).forEach((k) => {
      const lvl = levelBreakdown[k as EnglishQuizLevelKey]
      lvl.accuracy = lvl.total > 0 ? Math.round((lvl.correct / lvl.total) * 100) : 0
    })

    const accuracyPercentage =
      activeQuestions.length > 0 ? Math.round((correctCount / activeQuestions.length) * 100) : 0

    const attemptRecord: EnglishQuizAttemptRecord = {
      id: `eng-att-${Date.now()}`,
      startedAt: quizStartTime,
      completedAt,
      totalDurationSeconds,
      config: currentConfig,
      questions: activeQuestions,
      answers: userAnswers,
      score: correctCount,
      totalQuestions: activeQuestions.length,
      accuracyPercentage,
      levelBreakdown
    }

    englishQuizStorage.saveAttempt(attemptRecord)
    setLastAttempt(attemptRecord)
    setShowSubmitConfirm(false)
    setViewMode('results')
    refreshUserData()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Get Level Icon
  const getLevelIcon = (key: EnglishQuizLevelKey, className = 'w-4 h-4') => {
    switch (key) {
      case 'level_1': return <Compass className={className} />
      case 'level_2': return <BookOpen className={className} />
      case 'level_3': return <Zap className={className} />
      case 'level_4': return <Sparkles className={className} />
      case 'level_5': return <Crown className={className} />
      default: return <BookOpen className={className} />
    }
  }

  const answeredCount = Object.keys(userAnswers).filter(
    (k) => userAnswers[k]?.selectedOptionIds.length > 0
  ).length

  return (
    <div className="py-8 sm:py-12 space-y-10 min-h-screen">
      <Container size="lg" className="space-y-8">
        {/* ================= VIEW: DASHBOARD ================= */}
        {viewMode === 'dashboard' && (
          <div className="space-y-10">
            {/* 1. Header Hero Banner */}
            <div className="relative p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
              <div className="space-y-3 z-10 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="p-1.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center gap-1.5 border border-blue-500/20">
                    <BookOpen className="w-3.5 h-3.5" />
                    English Levels Mastery Suite
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    CEFR Alignment (A1 to C2)
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    55+ Verified Questions
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                  English Levels Quiz &amp; Grammar Mastery
                </h1>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Systematic progression across 5 CEFR proficiency tiers: from beginner grammatical foundations to advanced negative inversion, technical vocabulary (idempotent, pragmatic), and executive communication.
                </p>

                {/* Cross Navigation Link */}
                <div className="pt-2 flex items-center gap-3">
                  <Link
                    to="/voice-training"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-amber-500 transition-colors"
                  >
                    <Headphones className="w-3.5 h-3.5 text-amber-500" />
                    <span>Practicing for Amazon Customer Service? Switch to <strong>Voice Process Quiz</strong></span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 z-10 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setSetupInitialLevel(undefined)
                    setSetupInitialFocusTopic(undefined)
                    setIsSetupOpen(true)
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 text-xs font-bold text-neutral-800 dark:text-neutral-200 bg-white dark:bg-[#181820] transition-all cursor-pointer shadow-2xs"
                >
                  <Sliders className="w-4 h-4 text-neutral-400" />
                  <span>Custom Quiz Setup</span>
                </button>

                <button
                  type="button"
                  onClick={handleQuickStart}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Start 10-Q Drill</span>
                </button>
              </div>
            </div>

            {/* 2. Global Performance & Stats Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xs flex flex-col justify-between">
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                  Quizzes Completed
                </div>
                <div className="text-2xl font-extrabold text-neutral-900 dark:text-white font-mono mt-2">
                  {stats.totalAttempts}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">Total quiz sessions</div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xs flex flex-col justify-between">
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                  Questions Solved
                </div>
                <div className="text-2xl font-extrabold text-neutral-900 dark:text-white font-mono mt-2">
                  {stats.totalQuestionsAnswered}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">Across all 5 levels</div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xs flex flex-col justify-between">
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                  Overall Accuracy
                </div>
                <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono mt-2">
                  {stats.averageAccuracy}%
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">{stats.totalCorrect} correct answers</div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xs flex flex-col justify-between">
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                  Saved Bookmarks
                </div>
                <div className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono mt-2">
                  {bookmarks.length}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">For review &amp; study</div>
              </div>
            </div>

            {/* 3. Five CEFR English Levels Cards Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    CEFR Proficiency Levels (Levels 1 to 5)
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Select any level to start a targeted 10-question practice test or launch custom configurations
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
                {ENGLISH_LEVELS_METADATA.map((lvl) => {
                  const levelStats = stats.levelAccuracy[lvl.key]
                  const qCount = VERIFIED_ENGLISH_QUESTION_BANK.filter((q) => q.level === lvl.key).length

                  return (
                    <div
                      key={lvl.key}
                      className="p-5 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-blue-500/40"
                    >
                      <div>
                        {/* Level Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-200">
                              {getLevelIcon(lvl.key, 'w-4 h-4')}
                            </div>
                            <span className="text-xs font-mono font-bold text-neutral-400">
                              #{lvl.number}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                            CEFR {lvl.cefr}
                          </span>
                        </div>

                        <h3 className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-blue-500 transition-colors">
                          {lvl.shortTitle}
                        </h3>
                        <p className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 mt-0.5">
                          {lvl.badge}
                        </p>

                        <p className="text-[11px] text-neutral-400 leading-snug mt-2 line-clamp-3">
                          {lvl.description}
                        </p>

                        {/* Topics bullet list */}
                        <div className="mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                            Core Competencies:
                          </span>
                          <ul className="text-[11px] text-neutral-500 dark:text-neutral-400 space-y-0.5">
                            {lvl.topics.slice(0, 3).map((t, idx) => (
                              <li key={idx} className="line-clamp-1 flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-blue-500" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Performance & Action Buttons */}
                      <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-neutral-400 font-mono">{qCount} Bank Qs</span>
                          <span className="font-bold font-mono text-emerald-600 dark:text-emerald-400">
                            {levelStats.attempted > 0 ? `${levelStats.accuracy}% accuracy` : 'Not tested'}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleLaunchLevelDrill(lvl.key)}
                            className="flex-1 py-1.5 px-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <span>Drill 10Q</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setSetupInitialLevel(lvl.key)
                              setSetupInitialFocusTopic(undefined)
                              setIsSetupOpen(true)
                            }}
                            className="p-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                            title="Custom Drill Setup"
                          >
                            <Sliders className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 4. Focus Competency Drills Showcase */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    Specialized Competency Drills
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Targeted practice modules for high-yield grammar rules, verb tenses, and workplace communication
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {FOCUS_ENGLISH_TOPICS.map((topic) => (
                  <div
                    key={topic.id}
                    className="p-4 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xs hover:border-blue-500/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          {topic.badge}
                        </span>
                        <span className="text-[11px] font-mono font-semibold text-neutral-400">
                          {topic.levelKey.toUpperCase()}
                        </span>
                      </div>

                      <h3 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                        {topic.title}
                      </h3>
                      <p className="text-[11px] text-neutral-400 leading-snug mt-1 line-clamp-2">
                        {topic.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleLaunchTopicDrill(topic.query, topic.levelKey)}
                        className="flex-1 py-1.5 px-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Drill Topic</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSetupInitialLevel(topic.levelKey)
                          setSetupInitialFocusTopic(topic.query)
                          setIsSetupOpen(true)
                        }}
                        className="p-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                        title="Configure Topic Quiz"
                      >
                        <Sliders className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW: ACTIVE QUIZ ================= */}
        {viewMode === 'active_quiz' && activeQuestions.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            {/* Active Quiz Header Bar */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold font-mono">
                  Question {currentIndex + 1} of {activeQuestions.length}
                </span>

                <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 hidden sm:inline">
                  {activeQuestions[currentIndex].levelLabel}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Assessment Timer */}
                {currentConfig?.mode === 'assessment' && (
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold font-mono ${
                    timeRemainingSeconds < 60 ? 'bg-red-500/10 text-red-500 animate-pulse' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                  }`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {Math.floor(timeRemainingSeconds / 60)}:
                      {(timeRemainingSeconds % 60).toString().padStart(2, '0')}
                    </span>
                  </div>
                )}

                {/* Flag for Review button */}
                <button
                  type="button"
                  onClick={() => handleToggleFlag(activeQuestions[currentIndex].id)}
                  className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                    userAnswers[activeQuestions[currentIndex].id]?.flaggedForReview
                      ? 'border-amber-500 text-amber-500 bg-amber-500/10'
                      : 'border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                  }`}
                  title="Flag for review"
                >
                  <Flag className="w-3.5 h-3.5" />
                </button>

                {/* Bookmark button */}
                <button
                  type="button"
                  onClick={() => handleToggleBookmark(activeQuestions[currentIndex].id)}
                  className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                    bookmarks.includes(activeQuestions[currentIndex].id)
                      ? 'border-cyan-500 text-cyan-500 bg-cyan-500/10'
                      : 'border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                  }`}
                  title="Bookmark question"
                >
                  {bookmarks.includes(activeQuestions[currentIndex].id) ? (
                    <BookmarkCheck className="w-3.5 h-3.5" />
                  ) : (
                    <Bookmark className="w-3.5 h-3.5" />
                  )}
                </button>

                {/* Exit button */}
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Exit quiz and return to dashboard? Your current session progress will be lost.')) {
                      setViewMode('dashboard')
                    }
                  }}
                  className="text-xs font-semibold text-neutral-400 hover:text-neutral-900 dark:hover:text-white px-2 py-1 cursor-pointer"
                >
                  Exit
                </button>
              </div>
            </div>

            {/* Quiz Progress Bar */}
            <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-blue-500 to-emerald-500 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
              />
            </div>

            {/* Active Question Card */}
            {(() => {
              const currentQ = activeQuestions[currentIndex]
              const currentAns = userAnswers[currentQ.id]
              const isAnswered = currentAns && currentAns.selectedOptionIds.length > 0
              const isLearnMode = currentConfig?.mode === 'learn'

              return (
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 space-y-6 shadow-sm">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold font-mono">
                        {currentQ.topic}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-500 font-mono">
                        CEFR {currentQ.referenceCEFR}
                      </span>
                    </div>

                    {/* Hint Button */}
                    <button
                      type="button"
                      onClick={() => setShowHint(!showHint)}
                      className={`text-xs font-semibold flex items-center gap-1 cursor-pointer px-2.5 py-1 rounded-xl border transition-colors ${
                        showHint
                          ? 'border-amber-500 text-amber-500 bg-amber-500/10'
                          : 'border-neutral-200 dark:border-neutral-700 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
                    </button>
                  </div>

                  {/* Hint Container */}
                  {showHint && (
                    <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2 animate-fade-in">
                      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong>Grammar Hint: </strong>
                        {currentQ.hint}
                      </div>
                    </div>
                  )}

                  {/* Question Text */}
                  <h2 className="text-base sm:text-xl font-bold text-neutral-900 dark:text-white leading-relaxed">
                    {currentQ.question}
                  </h2>

                  {/* Options List */}
                  <div className="space-y-2.5">
                    {currentQ.options.map((opt, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx)
                      const isSelected = currentAns?.selectedOptionIds.includes(opt.id)
                      const isOptCorrect = currentQ.correctAnswerIds.includes(opt.id)

                      let optionClasses =
                        'w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 cursor-pointer '

                      if (!isLearnMode) {
                        // Assessment mode: simple selected state without revealing correctness
                        optionClasses += isSelected
                          ? 'bg-blue-500/10 border-blue-500 text-neutral-900 dark:text-white font-semibold shadow-xs'
                          : 'bg-neutral-50/50 dark:bg-[#181820]/50 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 text-neutral-800 dark:text-neutral-200'
                      } else {
                        // Learn mode: instant pedagogical feedback
                        if (!isAnswered) {
                          optionClasses +=
                            'bg-neutral-50/50 dark:bg-[#181820]/50 border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 text-neutral-800 dark:text-neutral-200'
                        } else if (isOptCorrect) {
                          optionClasses +=
                            'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold'
                        } else if (isSelected && !isOptCorrect) {
                          optionClasses +=
                            'bg-red-50 dark:bg-red-950/20 border-red-500 text-red-900 dark:text-red-200'
                        } else {
                          optionClasses +=
                            'bg-neutral-50/30 dark:bg-[#181820]/30 border-neutral-200/50 dark:border-neutral-800/50 text-neutral-400 opacity-60'
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectOption(opt.id)}
                          className={optionClasses}
                        >
                          <span
                            className={`w-6 h-6 rounded-lg text-xs font-bold font-mono flex items-center justify-center shrink-0 ${
                              isLearnMode && isAnswered
                                ? isOptCorrect
                                  ? 'bg-emerald-500 text-white'
                                  : isSelected
                                  ? 'bg-red-500 text-white'
                                  : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500'
                                : isSelected
                                ? 'bg-blue-500 text-white'
                                : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
                            }`}
                          >
                            {isLearnMode && isAnswered && isOptCorrect ? (
                              <Check className="w-3.5 h-3.5" />
                            ) : isLearnMode && isAnswered && isSelected ? (
                              <XCircle className="w-3.5 h-3.5" />
                            ) : (
                              letter
                            )}
                          </span>

                          <div className="flex-1 leading-snug">
                            <span>{opt.text}</span>
                            {/* Distractor feedback in learn mode */}
                            {isLearnMode && isAnswered && isSelected && !isOptCorrect && opt.distractorReason && (
                              <div className="mt-1 text-[11px] text-red-600 dark:text-red-400 font-normal">
                                Why this is incorrect: {opt.distractorReason}
                              </div>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {/* Learn Mode: Comprehensive Explanation Card */}
                  {isLearnMode && isAnswered && (
                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-3 animate-fade-in">
                      <div className="flex items-center gap-2">
                        {currentAns?.isCorrect ? (
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            Correct Answer
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1">
                            <XCircle className="w-4 h-4" />
                            Incorrect Selection
                          </span>
                        )}
                        <span className="text-[11px] text-neutral-400 font-mono">
                          Grammar Breakdown
                        </span>
                      </div>

                      <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {currentQ.explanation}
                      </p>

                      {/* Rule & Example Box */}
                      {currentQ.grammarRule && (
                        <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-900 dark:text-blue-200 space-y-1">
                          <div className="font-bold flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                            <span>Rule: {currentQ.grammarRule}</span>
                          </div>
                          {currentQ.exampleSentence && (
                            <p className="text-[11px] opacity-80 italic">
                              Example: "{currentQ.exampleSentence}"
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                    <button
                      type="button"
                      disabled={currentIndex === 0}
                      onClick={() => {
                        setCurrentIndex((i) => i - 1)
                        setShowHint(false)
                      }}
                      className="px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>

                    {currentIndex < activeQuestions.length - 1 ? (
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentIndex((i) => i + 1)
                          setShowHint(false)
                        }}
                        className="px-5 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold hover:opacity-90 flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <span>Next Question</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          if (answeredCount < activeQuestions.length) {
                            setShowSubmitConfirm(true)
                          } else {
                            handleSubmitQuiz(false)
                          }
                        }}
                        className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <span>Submit &amp; View Results</span>
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              )
            })()}

            {/* Question Selector Quick Grid */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-3 shadow-2xs">
              <span className="text-xs font-semibold text-neutral-400">
                Answered: {answeredCount}/{activeQuestions.length}
              </span>

              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                {activeQuestions.map((q, idx) => {
                  const isCurrent = idx === currentIndex
                  const ans = userAnswers[q.id]
                  const isAnswered = ans && ans.selectedOptionIds.length > 0
                  const isFlagged = ans?.flaggedForReview

                  let btnStyle = 'w-7 h-7 rounded-lg text-xs font-bold font-mono transition-all '
                  if (isCurrent) {
                    btnStyle += 'ring-2 ring-blue-500 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                  } else if (isFlagged) {
                    btnStyle += 'bg-amber-500 text-white'
                  } else if (isAnswered) {
                    btnStyle += 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
                  } else {
                    btnStyle += 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:bg-neutral-200'
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => {
                        setCurrentIndex(idx)
                        setShowHint(false)
                      }}
                      className={btnStyle}
                    >
                      {idx + 1}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Submit Confirmation Modal */}
            {showSubmitConfirm && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
                <div className="p-6 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 max-w-sm w-full space-y-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-500 shrink-0" />
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                      Unanswered Questions
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    You have answered {answeredCount} out of {activeQuestions.length} questions. Are you sure you want to finalize your score now?
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowSubmitConfirm(false)}
                      className="flex-1 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    >
                      Review Answers
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSubmitQuiz(false)}
                      className="flex-1 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold hover:opacity-90"
                    >
                      Submit Anyway
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= VIEW: RESULTS ================= */}
        {viewMode === 'results' && lastAttempt && (
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            {/* Score Hero Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-3xl bg-blue-500/10 text-blue-500 mx-auto flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
                  English Quiz Completed
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
                  Completed in {Math.floor(lastAttempt.totalDurationSeconds / 60)}m {lastAttempt.totalDurationSeconds % 60}s
                </p>
              </div>

              {/* Score Display */}
              <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200 dark:border-neutral-800 max-w-md mx-auto space-y-2">
                <div className="text-4xl font-extrabold font-mono text-neutral-900 dark:text-white">
                  {lastAttempt.score} / {lastAttempt.totalQuestions}
                </div>
                <div className={`text-base font-bold font-mono ${
                  lastAttempt.accuracyPercentage >= 80 ? 'text-emerald-500' : 'text-amber-500'
                }`}>
                  {lastAttempt.accuracyPercentage}% Accuracy
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {lastAttempt.accuracyPercentage >= 80
                    ? 'Outstanding! You demonstrated robust grammatical precision and vocabulary depth.'
                    : 'Good practice! Review the missed questions below to solidify your grammar rules.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleStartQuiz(lastAttempt.config)}
                  className="py-2.5 px-5 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold hover:opacity-90 flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('dashboard')}
                  className="py-2.5 px-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  Back to Levels Dashboard
                </button>
              </div>
            </div>

            {/* Level Breakdown Grid */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 space-y-4 shadow-sm">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider font-mono">
                Performance by CEFR Level
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                {ENGLISH_LEVELS_METADATA.map((lvl) => {
                  const data = lastAttempt.levelBreakdown[lvl.key]
                  if (!data || data.total === 0) return null

                  return (
                    <div
                      key={lvl.key}
                      className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200 dark:border-neutral-800 text-center space-y-1"
                    >
                      <div className="text-[10px] font-mono text-neutral-400 font-bold">
                        {lvl.shortTitle}
                      </div>
                      <div className="text-lg font-bold font-mono text-neutral-900 dark:text-white">
                        {data.correct}/{data.total}
                      </div>
                      <div className={`text-[11px] font-bold font-mono ${
                        data.accuracy >= 80 ? 'text-emerald-500' : 'text-amber-500'
                      }`}>
                        {data.accuracy}%
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Detailed Question Review */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider font-mono">
                  Detailed Answer Review
                </h3>

                {/* Review Filters */}
                <div className="flex items-center gap-1.5">
                  {(['all', 'incorrect', 'flagged'] as const).map((flt) => (
                    <button
                      key={flt}
                      type="button"
                      onClick={() => setResultsFilter(flt)}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
                        resultsFilter === flt
                          ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                      }`}
                    >
                      {flt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {lastAttempt.questions
                  .filter((q) => {
                    const ans = lastAttempt.answers[q.id]
                    if (resultsFilter === 'incorrect') return !ans || !ans.isCorrect
                    if (resultsFilter === 'flagged') return ans?.flaggedForReview
                    return true
                  })
                  .map((q, idx) => {
                    const ans = lastAttempt.answers[q.id]
                    const isCorrect = ans?.isCorrect || false
                    const userSelectedOpt = q.options.find((o) => ans?.selectedOptionIds.includes(o.id))
                    const correctOpt = q.options.find((o) => q.correctAnswerIds.includes(o.id))

                    return (
                      <div
                        key={q.id}
                        className={`p-5 rounded-2xl border text-xs space-y-3 ${
                          isCorrect
                            ? 'bg-emerald-50/40 dark:bg-emerald-950/10 border-emerald-500/30'
                            : 'bg-red-50/40 dark:bg-red-950/10 border-red-500/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-neutral-400">#{idx + 1}</span>
                            <span className="font-bold text-neutral-600 dark:text-neutral-300">
                              {q.levelLabel} • {q.topic}
                            </span>
                          </div>

                          {isCorrect ? (
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                            </span>
                          ) : (
                            <span className="text-red-600 dark:text-red-400 font-bold flex items-center gap-1">
                              <XCircle className="w-3.5 h-3.5" /> Incorrect
                            </span>
                          )}
                        </div>

                        <p className="font-bold text-neutral-900 dark:text-white text-sm">
                          {q.question}
                        </p>

                        {!isCorrect && (
                          <div className="text-[11px] text-red-600 dark:text-red-400">
                            <strong>Your selection: </strong>
                            {userSelectedOpt ? userSelectedOpt.text : 'No answer selected'}
                          </div>
                        )}

                        <div className="text-[11px] text-emerald-700 dark:text-emerald-300">
                          <strong>Correct answer: </strong>
                          {correctOpt?.text}
                        </div>

                        <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200/50 dark:border-neutral-800/50 pt-2">
                          {q.explanation}
                        </p>

                        {q.grammarRule && (
                          <div className="text-[10px] font-mono text-blue-600 dark:text-blue-400 bg-white/60 dark:bg-black/30 p-2 rounded-xl">
                            <strong>Rule: </strong>{q.grammarRule}
                          </div>
                        )}
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        )}

        {/* Custom Setup Modal */}
        <EnglishSetupModal
          isOpen={isSetupOpen}
          onClose={() => setIsSetupOpen(false)}
          onStartQuiz={handleStartQuiz}
          initialLevel={setupInitialLevel}
          initialFocusTopic={setupInitialFocusTopic}
        />
      </Container>
    </div>
  )
}
