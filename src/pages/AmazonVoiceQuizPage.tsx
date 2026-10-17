import React, { useState, useEffect } from 'react'
import { Container } from '../components/layout/Container'
import { VOICE_CATEGORIES, VERIFIED_QUESTION_BANK, PRIORITY_VOICE_TOPICS } from '../data/amazonVoiceQuestionBank'
import { VoiceCategoryCard } from '../components/amazonVoice/VoiceCategoryCard'
import { VoiceQuizCard } from '../components/amazonVoice/VoiceQuizCard'
import { VoiceQuizTimer } from '../components/amazonVoice/VoiceQuizTimer'
import { VoiceResultsReview } from '../components/amazonVoice/VoiceResultsReview'
import { VoiceSetupModal } from '../components/amazonVoice/VoiceSetupModal'
import { VoiceCallSimulator } from '../components/amazonVoice/VoiceCallSimulator'
import { geminiQuizService } from '../lib/geminiQuizService'
import { amazonVoiceStorage } from '../lib/amazonVoiceStorage'
import {
  QuizConfig,
  VoiceQuizQuestion,
  UserAnswerState,
  QuizAttemptRecord,
  VoiceCategoryKey
} from '../types/amazonVoice'
import {
  Headphones,
  Sparkles,
  PhoneCall,
  Sliders,
  AlertCircle,
  Flag,
  Loader2,
  ShieldCheck,
  PackageSearch,
  Layers,
  Repeat,
  Wallet,
  RotateCcw,
  CreditCard,
  Crown,
  Target,
  ArrowRight
} from 'lucide-react'

type PageViewMode = 'dashboard' | 'active_quiz' | 'results' | 'simulator'

export const AmazonVoiceQuizPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<PageViewMode>('dashboard')
  const [isSetupOpen, setIsSetupOpen] = useState(false)
  const [setupInitialCategory, setSetupInitialCategory] = useState<VoiceCategoryKey | undefined>()
  const [setupInitialFocusTopic, setSetupInitialFocusTopic] = useState<string | undefined>()

  // Active Quiz State
  const [currentConfig, setCurrentConfig] = useState<QuizConfig | null>(null)
  const [activeQuestions, setActiveQuestions] = useState<VoiceQuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswerState>>({})
  const [quizStartTime, setQuizStartTime] = useState<number>(0)
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false)
  const [generationError, setGenerationError] = useState<string | null>(null)
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false)

  // Results State
  const [lastAttempt, setLastAttempt] = useState<QuizAttemptRecord | null>(null)

  // Local Storage Stats & Bookmarks
  const [stats, setStats] = useState(amazonVoiceStorage.getStats())
  const [bookmarks, setBookmarks] = useState<string[]>(amazonVoiceStorage.getBookmarks())
  const [recentAttempts, setRecentAttempts] = useState<QuizAttemptRecord[]>(amazonVoiceStorage.getAttempts())

  // Refresh stats on return to dashboard
  const refreshUserData = () => {
    setStats(amazonVoiceStorage.getStats())
    setBookmarks(amazonVoiceStorage.getBookmarks())
    setRecentAttempts(amazonVoiceStorage.getAttempts())
  }

  // Warn user before leaving active assessment
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

  // Start Quiz Handler
  const handleStartQuiz = async (config: QuizConfig, forceAiFresh = false) => {
    setIsSetupOpen(false)
    setIsLoadingQuiz(true)
    setGenerationError(null)

    try {
      const result = await geminiQuizService.generateQuiz(config, forceAiFresh)
      if (result.questions.length === 0) {
        throw new Error('No questions could be loaded for the selected filters.')
      }

      setCurrentConfig(config)
      setActiveQuestions(result.questions)
      setCurrentIndex(0)
      setUserAnswers({})
      setQuizStartTime(Date.now())
      setViewMode('active_quiz')
      if (result.error) {
        setGenerationError(result.error)
      }
    } catch (err: any) {
      setGenerationError(err?.message || 'Failed to initialize quiz. Please try again.')
    } finally {
      setIsLoadingQuiz(false)
    }
  }

  // Quick Start Default Quiz
  const handleQuickStart = () => {
    handleStartQuiz({
      categories: [],
      difficulty: 'intermediate',
      questionCount: 10,
      questionType: 'single_choice',
      mode: 'learn'
    })
  }

  // Priority Syllabus Focus Drill (1-click drill for the 8 core syllabus topics)
  const handleLaunchFocusDrill = (topicQuery: string, categoryKey: VoiceCategoryKey) => {
    handleStartQuiz({
      categories: [categoryKey],
      difficulty: 'mixed',
      questionCount: 10,
      questionType: 'single_choice',
      mode: 'learn',
      focusTopic: topicQuery
    })
  }

  // Option Selection
  const handleSelectOption = (optionId: string, isMulti = false) => {
    const currentQ = activeQuestions[currentIndex]
    if (!currentQ) return

    const existingAnswer = userAnswers[currentQ.id] || {
      questionId: currentQ.id,
      selectedOptionIds: [],
      isMarkedForReview: false,
      timeSpentSeconds: 0
    }

    let newSelected: string[]
    if (isMulti) {
      if (existingAnswer.selectedOptionIds.includes(optionId)) {
        newSelected = existingAnswer.selectedOptionIds.filter((id) => id !== optionId)
      } else {
        newSelected = [...existingAnswer.selectedOptionIds, optionId]
      }
    } else {
      newSelected = [optionId]
    }

    // Check correctness
    const isCorrect =
      newSelected.length === currentQ.correctAnswerIds.length &&
      newSelected.every((id) => currentQ.correctAnswerIds.includes(id))

    setUserAnswers({
      ...userAnswers,
      [currentQ.id]: {
        ...existingAnswer,
        selectedOptionIds: newSelected,
        isCorrect,
        answeredAt: Date.now()
      }
    })
  }

  const handleClearSelection = () => {
    const currentQ = activeQuestions[currentIndex]
    if (!currentQ) return
    const updated = { ...userAnswers }
    delete updated[currentQ.id]
    setUserAnswers(updated)
  }

  const handleToggleMarkReview = () => {
    const currentQ = activeQuestions[currentIndex]
    if (!currentQ) return
    const existing = userAnswers[currentQ.id] || {
      questionId: currentQ.id,
      selectedOptionIds: [],
      isMarkedForReview: false,
      timeSpentSeconds: 0
    }
    setUserAnswers({
      ...userAnswers,
      [currentQ.id]: {
        ...existing,
        isMarkedForReview: !existing.isMarkedForReview
      }
    })
  }

  const handleToggleBookmark = (questionId: string) => {
    const isNowBookmarked = amazonVoiceStorage.toggleBookmark(questionId)
    setBookmarks(isNowBookmarked ? [...bookmarks, questionId] : bookmarks.filter((id) => id !== questionId))
  }

  // Submit and finalize Quiz Attempt
  const handleSubmitQuiz = () => {
    if (!currentConfig || activeQuestions.length === 0) return

    const completedAt = Date.now()
    const totalDurationSeconds = Math.max(Math.round((completedAt - quizStartTime) / 1000), 1)

    let correctCount = 0
    const categoryBreakdown: Record<
      VoiceCategoryKey,
      { total: number; correct: number; accuracy: number }
    > = {
      security_fundamentals: { total: 0, correct: 0, accuracy: 0 },
      order_delivery: { total: 0, correct: 0, accuracy: 0 },
      returns_refunds: { total: 0, correct: 0, accuracy: 0 },
      payments_concessions: { total: 0, correct: 0, accuracy: 0 },
      fulfillment_marketplace: { total: 0, correct: 0, accuracy: 0 },
      prime_subscriptions: { total: 0, correct: 0, accuracy: 0 },
      international_shipping: { total: 0, correct: 0, accuracy: 0 },
      transfers_operations: { total: 0, correct: 0, accuracy: 0 },
      call_handling: { total: 0, correct: 0, accuracy: 0 },
      assessment_performance: { total: 0, correct: 0, accuracy: 0 },
      // legacy aliases
      order_issues: { total: 0, correct: 0, accuracy: 0 },
      product_issues: { total: 0, correct: 0, accuracy: 0 },
      fulfillment_seller: { total: 0, correct: 0, accuracy: 0 },
      amazon_prime: { total: 0, correct: 0, accuracy: 0 },
      ring_troubleshooting: { total: 0, correct: 0, accuracy: 0 },
      call_structure: { total: 0, correct: 0, accuracy: 0 },
      customer_scenarios: { total: 0, correct: 0, accuracy: 0 },
      process_knowledge: { total: 0, correct: 0, accuracy: 0 }
    }

    activeQuestions.forEach((q) => {
      const ans = userAnswers[q.id]
      const isRight =
        ans &&
        ans.selectedOptionIds.length === q.correctAnswerIds.length &&
        ans.selectedOptionIds.every((id) => q.correctAnswerIds.includes(id))

      if (isRight) correctCount++

      if (categoryBreakdown[q.category]) {
        categoryBreakdown[q.category].total += 1
        if (isRight) categoryBreakdown[q.category].correct += 1
      }
    })

    Object.keys(categoryBreakdown).forEach((k) => {
      const cat = categoryBreakdown[k as VoiceCategoryKey]
      cat.accuracy = cat.total > 0 ? Math.round((cat.correct / cat.total) * 100) : 0
    })

    const accuracyPercentage =
      activeQuestions.length > 0
        ? Math.round((correctCount / activeQuestions.length) * 100)
        : 0

    const attemptRecord: QuizAttemptRecord = {
      id: `att-${Date.now()}`,
      startedAt: quizStartTime,
      completedAt,
      totalDurationSeconds,
      config: currentConfig,
      questions: activeQuestions,
      answers: userAnswers,
      score: correctCount,
      totalQuestions: activeQuestions.length,
      accuracyPercentage,
      categoryBreakdown
    }

    amazonVoiceStorage.saveAttempt(attemptRecord)
    setLastAttempt(attemptRecord)
    setShowSubmitConfirm(false)
    setViewMode('results')
    refreshUserData()
  }

  // Drill a specific category from category card
  const handleLaunchCategory = (categoryKey: VoiceCategoryKey) => {
    setSetupInitialCategory(categoryKey)
    setSetupInitialFocusTopic(undefined)
    setIsSetupOpen(true)
  }

  // Answered questions count
  const answeredCount = Object.keys(userAnswers).filter(
    (k) => userAnswers[k]?.selectedOptionIds.length > 0
  ).length

  return (
    <div className="py-8 sm:py-12 space-y-10">
      <Container size="lg" className="space-y-8">
        {/* ======================= VIEW: DASHBOARD ======================= */}
        {viewMode === 'dashboard' && (
          <div className="space-y-10">
            {/* 1. Header Banner & Quick Launch Controls */}
            <div className="relative p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
              <div className="space-y-3 z-10 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs flex items-center gap-1.5 border border-amber-500/20">
                    <Headphones className="w-3.5 h-3.5" />
                    Amazon NA Voice Support Academy
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    SOP &amp; CSC Simulator
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                  ProPractice — Amazon NA Voice Process
                </h1>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Prepare for high-volume customer service operations. Master the 9-stage call flow, strict 24-48 hr DNR buffers, precise refund SLAs, FBA vs MFN routing, and Ring smart device troubleshooting with Google Gemini AI.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 z-10 shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode('simulator')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-amber-500/60 text-xs font-bold text-neutral-800 dark:text-neutral-200 bg-neutral-50 dark:bg-[#181820] hover:bg-white transition-all cursor-pointer shadow-2xs"
                >
                  <PhoneCall className="w-4 h-4 text-amber-500" />
                  <span>Call Flow Simulator</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSetupInitialCategory(undefined)
                    setSetupInitialFocusTopic(undefined)
                    setIsSetupOpen(true)
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 text-xs font-bold text-neutral-800 dark:text-neutral-200 bg-white dark:bg-[#181820] transition-all cursor-pointer shadow-2xs"
                >
                  <Sliders className="w-4 h-4 text-neutral-400" />
                  <span>Custom Quiz</span>
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

            {/* Error banner if previous generation failed */}
            {generationError && (
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-800 dark:text-amber-200">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{generationError}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setGenerationError(null)}
                  className="text-neutral-400 hover:text-neutral-600 font-bold cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* 2. Top-Level Metric Showcase Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                  Overall Accuracy
                </span>
                <p className="text-3xl font-mono font-bold text-neutral-900 dark:text-white">
                  {stats.overallAccuracy}%
                </p>
                <span className="text-xs text-neutral-400 block">
                  {stats.totalCorrectAnswers} / {stats.totalQuestionsAnswered} correct
                </span>
              </div>

              <div className="p-5 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                  Sessions Completed
                </span>
                <p className="text-3xl font-mono font-bold text-neutral-900 dark:text-white">
                  {stats.totalQuizzesTaken}
                </p>
                <span className="text-xs text-neutral-400 block">
                  Voice practice sessions
                </span>
              </div>

              <div className="p-5 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                  Verified Question Bank
                </span>
                <p className="text-3xl font-mono font-bold text-neutral-900 dark:text-white">
                  {VERIFIED_QUESTION_BANK.length}+
                </p>
                <span className="text-xs text-neutral-400 block">
                  SOP-compliant standards
                </span>
              </div>

              <div className="p-5 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                  Bookmarked Items
                </span>
                <p className="text-3xl font-mono font-bold text-neutral-900 dark:text-white">
                  {bookmarks.length}
                </p>
                <span className="text-xs text-neutral-400 block">
                  Saved for review
                </span>
              </div>
            </div>

            {/* Priority Voice Process Focus Drills (The 8 Key Syllabus Areas) */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      Core Curriculum
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      Priority Voice Process Focus Drills
                    </h2>
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Targeted 10-question practice drills for high-yield voice customer service modules and nesting assessments
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {PRIORITY_VOICE_TOPICS.map((topic) => {
                  const getTopicIcon = () => {
                    switch (topic.id) {
                      case 'a_to_z': return <ShieldCheck className="w-4 h-4 text-cyan-500" />
                      case 'wms': return <PackageSearch className="w-4 h-4 text-orange-500" />
                      case 'returns_refunds_exceptions': return <RotateCcw className="w-4 h-4 text-emerald-500" />
                      case 'order_item_types': return <Layers className="w-4 h-4 text-indigo-500" />
                      case 'subscribe_save': return <Repeat className="w-4 h-4 text-blue-500" />
                      case 'payment_charges': return <CreditCard className="w-4 h-4 text-pink-500" />
                      case 'amazon_prime_types': return <Crown className="w-4 h-4 text-amber-500" />
                      case 'payment_methods': return <Wallet className="w-4 h-4 text-purple-500" />
                      default: return <Target className="w-4 h-4 text-amber-500" />
                    }
                  }

                  return (
                    <div
                      key={topic.id}
                      className="group p-4 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 hover:border-amber-500/50 dark:hover:border-amber-500/50 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 flex items-center justify-center">
                              {getTopicIcon()}
                            </div>
                            <span className="text-[11px] font-bold font-mono text-neutral-400">
                              #{topic.number}
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
                            {topic.badge}
                          </span>
                        </div>

                        <h3 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors line-clamp-1">
                          {topic.title}
                        </h3>
                        <p className="text-[11px] text-neutral-400 leading-snug mt-1 line-clamp-2">
                          {topic.description}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleLaunchFocusDrill(topic.query, topic.categoryKey)}
                          className="flex-1 py-1.5 px-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>Drill 10Q</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSetupInitialCategory(topic.categoryKey)
                            setSetupInitialFocusTopic(topic.query)
                            setIsSetupOpen(true)
                          }}
                          className="p-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                          title="Custom Drill Setup"
                        >
                          <Sliders className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 3. Nine Core Voice Question Categories Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    Question Categories &amp; SOP Modules
                  </h2>
                  <p className="text-xs text-neutral-400">
                    Choose any category to drill specific policies or customer scenarios
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {VOICE_CATEGORIES.map((category) => {
                  const catStat = stats.categoryStats[category.key]
                  return (
                    <VoiceCategoryCard
                      key={category.key}
                      category={category}
                      accuracy={catStat?.accuracy || 0}
                      totalQuestionsAnswered={catStat?.totalQuestions || 0}
                      onStartCategoryQuiz={handleLaunchCategory}
                    />
                  )
                })}
              </div>
            </div>

            {/* 4. Recent Attempts Table */}
            {recentAttempts.length > 0 && (
              <div className="p-6 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 space-y-4 shadow-xs">
                <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                  Recent Practice Sessions
                </h3>
                <div className="divide-y divide-neutral-100 dark:divide-neutral-800/80">
                  {recentAttempts.slice(0, 5).map((att) => (
                    <div
                      key={att.id}
                      className="py-3 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="space-y-0.5">
                        <span className="font-semibold text-neutral-900 dark:text-white">
                          {att.totalQuestions} Questions • {att.config.mode.toUpperCase()}
                        </span>
                        <p className="text-[11px] text-neutral-400">
                          {new Date(att.completedAt).toLocaleDateString()} at{' '}
                          {new Date(att.completedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <span
                          className={`font-mono font-bold ${
                            att.accuracyPercentage >= 80
                              ? 'text-emerald-500'
                              : att.accuracyPercentage >= 60
                              ? 'text-amber-500'
                              : 'text-rose-500'
                          }`}
                        >
                          {att.accuracyPercentage}% ({att.score}/{att.totalQuestions})
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setLastAttempt(att)
                            setViewMode('results')
                          }}
                          className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 text-neutral-700 dark:text-neutral-300 font-semibold cursor-pointer"
                        >
                          View Review
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================= VIEW: ACTIVE QUIZ ======================= */}
        {viewMode === 'active_quiz' && activeQuestions.length > 0 && (
          <div className="space-y-6">
            {/* Top Sticky Test Controls Bar */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowSubmitConfirm(true)}
                  className="text-xs font-bold px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 cursor-pointer"
                >
                  Exit Quiz
                </button>

                <div className="text-xs">
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {answeredCount} of {activeQuestions.length} answered
                  </span>
                </div>
              </div>

              {/* Question Navigation Drawer & Timer */}
              <div className="flex items-center gap-3">
                {currentConfig?.mode === 'timed' && currentConfig.timeLimitSeconds && (
                  <VoiceQuizTimer
                    totalSeconds={currentConfig.timeLimitSeconds}
                    onTimeExpired={handleSubmitQuiz}
                  />
                )}

                <button
                  type="button"
                  onClick={handleToggleMarkReview}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                    userAnswers[activeQuestions[currentIndex]?.id]?.isMarkedForReview
                      ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400'
                      : 'border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>Review Later</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowSubmitConfirm(true)}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 cursor-pointer shadow-xs"
                >
                  Submit Assessment
                </button>
              </div>
            </div>

            {/* Question Quick Jump Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {activeQuestions.map((q, idx) => {
                const ans = userAnswers[q.id]
                const isCurrent = idx === currentIndex
                const isAnswered = ans && ans.selectedOptionIds.length > 0
                const isFlagged = ans?.isMarkedForReview

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-8 h-8 rounded-xl text-xs font-mono font-bold shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                      isCurrent
                        ? 'ring-2 ring-amber-500 bg-amber-500 text-white shadow-2xs'
                        : isFlagged
                        ? 'border border-amber-500 text-amber-600 bg-amber-50 dark:bg-amber-950/20'
                        : isAnswered
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:bg-neutral-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                )
              })}
            </div>

            {/* Active Question Card */}
            {activeQuestions[currentIndex] && (
              <VoiceQuizCard
                question={activeQuestions[currentIndex]}
                currentIndex={currentIndex}
                totalQuestions={activeQuestions.length}
                userAnswer={userAnswers[activeQuestions[currentIndex].id]}
                onSelectOption={handleSelectOption}
                onClearSelection={handleClearSelection}
                onToggleBookmark={handleToggleBookmark}
                isBookmarked={bookmarks.includes(activeQuestions[currentIndex].id)}
                mode={currentConfig?.mode || 'learn'}
              />
            )}

            {/* Next / Previous Stepper Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 disabled:opacity-30 cursor-pointer"
              >
                Previous Question
              </button>

              {currentIndex < activeQuestions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 cursor-pointer shadow-xs"
                >
                  Next Question
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowSubmitConfirm(true)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer shadow-xs"
                >
                  Finish &amp; Review Score
                </button>
              )}
            </div>
          </div>
        )}

        {/* ======================= VIEW: RESULTS ======================= */}
        {viewMode === 'results' && lastAttempt && (
          <VoiceResultsReview
            attempt={lastAttempt}
            onRetakeQuiz={() => {
              setCurrentConfig(lastAttempt.config)
              setActiveQuestions(lastAttempt.questions)
              setCurrentIndex(0)
              setUserAnswers({})
              setQuizStartTime(Date.now())
              setViewMode('active_quiz')
            }}
            onGenerateNewQuiz={() => {
              if (lastAttempt.config) {
                handleStartQuiz(lastAttempt.config, true)
              } else {
                handleQuickStart()
              }
            }}
            onPracticeCategory={(categoryKey) => {
              handleLaunchCategory(categoryKey as VoiceCategoryKey)
            }}
          />
        )}

        {/* ======================= VIEW: CALL SIMULATOR ======================= */}
        {viewMode === 'simulator' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setViewMode('dashboard')}
                className="text-xs font-bold px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 cursor-pointer"
              >
                ← Back to Quiz Dashboard
              </button>
            </div>
            <VoiceCallSimulator />
          </div>
        )}
      </Container>

      {/* Submit Confirmation Dialog */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-xl text-center">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Submit Assessment?
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              You have answered {answeredCount} of {activeQuestions.length} questions. You will not be able to change your answers once submitted.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 py-2 rounded-xl text-xs font-semibold border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 cursor-pointer"
              >
                Keep Practicing
              </button>
              <button
                type="button"
                onClick={handleSubmitQuiz}
                className="flex-1 py-2 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 cursor-pointer"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Modal overlay */}
      {isLoadingQuiz && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs">
          <div className="p-6 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 flex items-center gap-3 shadow-2xl">
            <Loader2 className="w-5 h-5 animate-spin text-amber-500" />
            <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 font-mono">
              Synthesizing Amazon Voice SOP Questions...
            </span>
          </div>
        </div>
      )}

      {/* Custom Quiz Setup Modal */}
      <VoiceSetupModal
        isOpen={isSetupOpen}
        onClose={() => {
          setIsSetupOpen(false)
          setSetupInitialCategory(undefined)
          setSetupInitialFocusTopic(undefined)
        }}
        onStartQuiz={handleStartQuiz}
        initialCategory={setupInitialCategory}
        initialFocusTopic={setupInitialFocusTopic}
      />
    </div>
  )
}
