import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import {
  BEGINNER_VOICE_TOPICS,
  BEGINNER_MCQ_BANK,
  BeginnerMCQQuestion
} from '../data/amazonVoiceBeginnerBank'
import {
  ShieldCheck,
  PackageSearch,
  RotateCcw,
  Layers,
  Repeat,
  CreditCard,
  Crown,
  Wallet,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  RotateCw,
  Search,
  Bookmark,
  BookmarkCheck,
  Award,
  Headphones,
  Check,
  Lightbulb,
  ExternalLink
} from 'lucide-react'

type ViewMode = 'practice' | 'quiz_active' | 'quiz_summary'
type QuestionFilter = 'all' | 'unanswered' | 'bookmarked' | 'incorrect'

interface UserProgress {
  selectedAnswers: Record<string, string> // questionId -> selectedOptionId
  bookmarked: string[]
  quizScores: {
    total: number
    correct: number
    completedAt: string
    topicBreakdown: Record<string, { total: number; correct: number }>
  }[]
}

const STORAGE_KEY = 'voice_beginner_mcq_progress'

function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) {
    console.error('Failed to load beginner MCQ progress:', e)
  }
  return { selectedAnswers: {}, bookmarked: [], quizScores: [] }
}

function saveProgress(progress: UserProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (e) {
    console.error('Failed to save beginner MCQ progress:', e)
  }
}

export const VoiceProcessBeginnerMCQPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('practice')
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<QuestionFilter>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showHints, setShowHints] = useState<Record<string, boolean>>({})

  // Persistent state
  const [progress, setProgress] = useState<UserProgress>(loadProgress)

  // Quiz active mode state
  const [quizQuestions, setQuizQuestions] = useState<BeginnerMCQQuestion[]>([])
  const [quizCurrentIndex, setQuizCurrentIndex] = useState(0)
  const [quizUserAnswers, setQuizUserAnswers] = useState<Record<string, string>>({})
  const [quizStartTime, setQuizStartTime] = useState<number>(0)
  const [quizTimeTaken, setQuizTimeTaken] = useState<number>(0)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  // Get topic icon helper
  const getTopicIcon = (topicId: string, className = 'w-4 h-4') => {
    switch (topicId) {
      case 'a_to_z': return <ShieldCheck className={className} />
      case 'wms': return <PackageSearch className={className} />
      case 'returns_refunds_exceptions': return <RotateCcw className={className} />
      case 'order_item_types': return <Layers className={className} />
      case 'subscribe_save': return <Repeat className={className} />
      case 'payment_charges': return <CreditCard className={className} />
      case 'amazon_prime_types': return <Crown className={className} />
      case 'payment_methods': return <Wallet className={className} />
      default: return <BookOpen className={className} />
    }
  }

  // Filtered practice questions
  const filteredQuestions = useMemo(() => {
    return BEGINNER_MCQ_BANK.filter((q) => {
      // Topic filter
      if (selectedTopicId !== 'all' && q.topicId !== selectedTopicId) return false

      // Question Type filter ('what', 'how', 'which', 'when')
      if (selectedType !== 'all' && q.questionType !== selectedType) return false

      // Status filter
      const userAns = progress.selectedAnswers[q.id]
      if (statusFilter === 'unanswered' && userAns !== undefined) return false
      if (statusFilter === 'bookmarked' && !progress.bookmarked.includes(q.id)) return false
      if (statusFilter === 'incorrect' && (userAns === undefined || userAns === q.correctAnswerId)) return false

      // Search Query
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase().trim()
        const matchQ = q.question.toLowerCase().includes(query)
        const matchExpl = q.explanation.toLowerCase().includes(query)
        const matchTopic = q.topicTitle.toLowerCase().includes(query)
        const matchOpts = q.options.some((o) => o.text.toLowerCase().includes(query))
        if (!matchQ && !matchExpl && !matchTopic && !matchOpts) return false
      }

      return true
    })
  }, [selectedTopicId, selectedType, statusFilter, searchQuery, progress])

  // Answer selection in Practice Mode
  const handleSelectPracticeOption = (questionId: string, optionId: string) => {
    setProgress((prev) => ({
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [questionId]: optionId
      }
    }))
  }

  // Toggle bookmark
  const toggleBookmark = (questionId: string) => {
    setProgress((prev) => {
      const isBookmarked = prev.bookmarked.includes(questionId)
      return {
        ...prev,
        bookmarked: isBookmarked
          ? prev.bookmarked.filter((id) => id !== questionId)
          : [...prev.bookmarked, questionId]
      }
    })
  }

  // Toggle hint
  const toggleHint = (questionId: string) => {
    setShowHints((prev) => ({ ...prev, [questionId]: !prev[questionId] }))
  }

  // Reset practice progress
  const handleResetProgress = () => {
    if (window.confirm('Reset all your answered questions and scores on this page?')) {
      const resetData: UserProgress = { selectedAnswers: {}, bookmarked: progress.bookmarked, quizScores: [] }
      setProgress(resetData)
      saveProgress(resetData)
    }
  }

  // Start Assessment Quiz
  const handleStartQuiz = (count = 15, topicId = 'all') => {
    let pool = [...BEGINNER_MCQ_BANK]
    if (topicId !== 'all') {
      pool = pool.filter((q) => q.topicId === topicId)
    }
    // Shuffle
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length))
    setQuizQuestions(shuffled)
    setQuizCurrentIndex(0)
    setQuizUserAnswers({})
    setQuizStartTime(Date.now())
    setViewMode('quiz_active')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Quiz Option Select
  const handleSelectQuizOption = (optionId: string) => {
    const currentQ = quizQuestions[quizCurrentIndex]
    setQuizUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId
    }))
  }

  // Quiz Submit
  const handleCompleteQuiz = () => {
    const elapsedSeconds = Math.round((Date.now() - quizStartTime) / 1000)
    setQuizTimeTaken(elapsedSeconds)

    let correctCount = 0
    const topicBreakdown: Record<string, { total: number; correct: number }> = {}

    quizQuestions.forEach((q) => {
      if (!topicBreakdown[q.topicId]) {
        topicBreakdown[q.topicId] = { total: 0, correct: 0 }
      }
      topicBreakdown[q.topicId].total++

      if (quizUserAnswers[q.id] === q.correctAnswerId) {
        correctCount++
        topicBreakdown[q.topicId].correct++
      }
    })

    // Save score
    setProgress((prev) => ({
      ...prev,
      quizScores: [
        {
          total: quizQuestions.length,
          correct: correctCount,
          completedAt: new Date().toISOString(),
          topicBreakdown
        },
        ...prev.quizScores
      ]
    }))

    setViewMode('quiz_summary')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Overall Statistics
  const totalQuestions = BEGINNER_MCQ_BANK.length
  const answeredTotal = Object.keys(progress.selectedAnswers).length
  const correctTotal = Object.entries(progress.selectedAnswers).filter(
    ([qId, ansId]) => BEGINNER_MCQ_BANK.find((q) => q.id === qId)?.correctAnswerId === ansId
  ).length
  const accuracyPercentage = answeredTotal > 0 ? Math.round((correctTotal / answeredTotal) * 100) : 0

  return (
    <div className="py-8 sm:py-12 space-y-10 min-h-screen">
      <Container size="lg" className="space-y-8">
        {/* ================= HEADER HERO ================= */}
        <div className="relative p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
          <div className="space-y-3 z-10 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs flex items-center gap-1.5 border border-cyan-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                Foundational Curriculum
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                Level 1: What, How &amp; Which Concepts
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                48 Verified MCQs
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Voice Process Beginner MCQs
            </h1>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Master the core definitions, policies, timelines, and terminology of the Amazon Voice Process. Designed with direct, beginner-friendly <em>What</em>, <em>How</em>, <em>Which</em>, and <em>When</em> questions before entering full customer dialogue simulations.
            </p>

            {/* Quick Switch to Advanced SOP Simulator */}
            <div className="pt-2 flex items-center gap-3">
              <Link
                to="/voice-training"
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-amber-500 transition-colors"
              >
                <Headphones className="w-3.5 h-3.5 text-amber-500" />
                <span>Ready for live customer call simulations? Switch to <strong>Advanced Voice SOP Simulator</strong></span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Overall Stats Card */}
          <div className="z-10 p-5 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200 dark:border-neutral-800 flex flex-col gap-3 min-w-[240px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Progress</span>
              <span className="text-xs font-bold font-mono text-neutral-700 dark:text-neutral-300">
                {answeredTotal} / {totalQuestions} Answered
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-cyan-500 to-amber-500 rounded-full transition-all duration-300"
                style={{ width: `${Math.round((answeredTotal / totalQuestions) * 100)}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-200/60 dark:border-neutral-800/60 text-center">
              <div>
                <div className="text-lg font-extrabold text-neutral-900 dark:text-white font-mono">
                  {accuracyPercentage}%
                </div>
                <div className="text-[10px] text-neutral-400 uppercase font-semibold">Accuracy</div>
              </div>
              <div>
                <div className="text-lg font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
                  {progress.bookmarked.length}
                </div>
                <div className="text-[10px] text-neutral-400 uppercase font-semibold">Bookmarked</div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => handleStartQuiz(15, selectedTopicId)}
                className="flex-1 py-2 px-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Take 15-Q Quiz</span>
              </button>
              <button
                type="button"
                onClick={handleResetProgress}
                title="Reset answers"
                className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= VIEW: PRACTICE MODE ================= */}
        {viewMode === 'practice' && (
          <div className="space-y-8">
            {/* 1. Eight Core Concepts Filter Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
                  Choose a Concept Area ({BEGINNER_VOICE_TOPICS.length} Topics)
                </span>
                {selectedTopicId !== 'all' && (
                  <button
                    type="button"
                    onClick={() => setSelectedTopicId('all')}
                    className="text-xs font-semibold text-amber-500 hover:underline cursor-pointer"
                  >
                    View All Topics
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-2">
                {/* All Topics Pill */}
                <button
                  type="button"
                  onClick={() => setSelectedTopicId('all')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedTopicId === 'all'
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-transparent shadow-xs'
                      : 'bg-white dark:bg-[#121217] border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  <div className="text-[10px] font-mono opacity-70">All</div>
                  <div className="text-xs font-bold mt-1">All Concepts</div>
                  <div className="text-[10px] font-mono opacity-80 mt-2">
                    {BEGINNER_MCQ_BANK.length} Qs
                  </div>
                </button>

                {/* Individual 8 Topics */}
                {BEGINNER_VOICE_TOPICS.map((topic) => {
                  const isSelected = selectedTopicId === topic.id
                  const topicCount = BEGINNER_MCQ_BANK.filter((q) => q.topicId === topic.id).length
                  const topicAnswered = BEGINNER_MCQ_BANK.filter(
                    (q) => q.topicId === topic.id && progress.selectedAnswers[q.id] !== undefined
                  ).length

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopicId(topic.id)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 dark:bg-amber-500/20 shadow-xs'
                          : 'bg-white dark:bg-[#121217] border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-neutral-400">
                          #{topic.number}
                        </span>
                        {getTopicIcon(topic.id, `w-3.5 h-3.5 ${isSelected ? 'text-amber-500' : 'text-neutral-400'}`)}
                      </div>

                      <div className={`text-xs font-bold mt-1 line-clamp-2 ${isSelected ? 'text-amber-600 dark:text-amber-400' : 'text-neutral-800 dark:text-neutral-200'}`}>
                        {topic.shortTitle}
                      </div>

                      <div className="text-[10px] font-mono text-neutral-400 mt-2 flex items-center justify-between">
                        <span>{topicCount} Qs</span>
                        {topicAnswered > 0 && (
                          <span className="text-emerald-500 font-bold">{topicAnswered}/{topicCount}</span>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 2. Controls & Question Type Filter Bar */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
              {/* Question Type Filter ('what', 'how', 'which', 'when') */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mr-1">
                  Type:
                </span>
                {[
                  { id: 'all', label: 'All' },
                  { id: 'what', label: 'What is...' },
                  { id: 'how', label: 'How does...' },
                  { id: 'which', label: 'Which...' },
                  { id: 'when', label: 'When is...' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedType === type.id
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>

              {/* Status Filter & Search */}
              <div className="flex items-center gap-2 flex-1 sm:flex-initial justify-end">
                {/* Status Dropdown */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as QuestionFilter)}
                  aria-label="Filter questions by status"
                  className="px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#181820] text-xs font-semibold text-neutral-700 dark:text-neutral-300 focus:outline-hidden"
                >
                  <option value="all">All Questions</option>
                  <option value="unanswered">Unanswered Only</option>
                  <option value="bookmarked">Bookmarked Only</option>
                  <option value="incorrect">Review Incorrect</option>
                </select>

                {/* Keyword Search */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search concept, SLA, hazmat..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#181820] text-xs text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 focus:outline-hidden focus:border-amber-500 w-44 sm:w-56"
                  />
                </div>
              </div>
            </div>

            {/* 3. Questions List */}
            {filteredQuestions.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 space-y-3">
                <HelpCircle className="w-8 h-8 mx-auto text-neutral-400" />
                <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
                  No questions match your current filters
                </h3>
                <p className="text-xs text-neutral-400">
                  Try clearing the search query or selecting a different concept topic.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTopicId('all')
                    setSelectedType('all')
                    setStatusFilter('all')
                    setSearchQuery('')
                  }}
                  className="px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold hover:opacity-90"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>Showing {filteredQuestions.length} foundational MCQs</span>
                  <button
                    type="button"
                    onClick={() => handleStartQuiz(10, selectedTopicId)}
                    className="text-xs font-semibold text-amber-500 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Launch 10Q Drill on this selection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {filteredQuestions.map((q, idx) => {
                    const userSelectedOptionId = progress.selectedAnswers[q.id]
                    const isAnswered = userSelectedOptionId !== undefined
                    const isCorrect = userSelectedOptionId === q.correctAnswerId
                    const isBookmarked = progress.bookmarked.includes(q.id)
                    const isHintVisible = showHints[q.id]

                    return (
                      <div
                        key={q.id}
                        className={`p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#121217] border transition-all ${
                          isAnswered
                            ? isCorrect
                              ? 'border-emerald-500/40 dark:border-emerald-500/30'
                              : 'border-red-500/40 dark:border-red-500/30'
                            : 'border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700'
                        } shadow-2xs`}
                      >
                        {/* Question Header */}
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
                              Q{idx + 1}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                              {getTopicIcon(q.topicId, 'w-3 h-3')}
                              {q.topicTitle}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-500 capitalize">
                              {q.questionType} question
                            </span>
                          </div>

                          <div className="flex items-center gap-1">
                            {/* Hint button */}
                            <button
                              type="button"
                              onClick={() => toggleHint(q.id)}
                              className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
                                isHintVisible
                                  ? 'border-amber-500 text-amber-500 bg-amber-500/10'
                                  : 'border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                              }`}
                              title="Show policy hint"
                            >
                              <Lightbulb className="w-3.5 h-3.5" />
                            </button>

                            {/* Bookmark button */}
                            <button
                              type="button"
                              onClick={() => toggleBookmark(q.id)}
                              className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
                                isBookmarked
                                  ? 'border-cyan-500 text-cyan-500 bg-cyan-500/10'
                                  : 'border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                              }`}
                              title={isBookmarked ? 'Remove bookmark' : 'Bookmark for review'}
                            >
                              {isBookmarked ? (
                                <BookmarkCheck className="w-3.5 h-3.5" />
                              ) : (
                                <Bookmark className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Question Text */}
                        <h2 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-relaxed mb-4">
                          {q.question}
                        </h2>

                        {/* Hint container */}
                        {isHintVisible && (
                          <div className="mb-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2 animate-fade-in">
                            <Lightbulb className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
                            <div>
                              <strong className="font-semibold">Helpful Hint: </strong>
                              {q.hint}
                            </div>
                          </div>
                        )}

                        {/* Options Grid */}
                        <div className="space-y-2">
                          {q.options.map((opt, optIndex) => {
                            const optionLetter = String.fromCharCode(65 + optIndex)
                            const isSelected = userSelectedOptionId === opt.id
                            const isOptCorrect = opt.id === q.correctAnswerId

                            let optionClasses =
                              'p-3.5 rounded-2xl border text-xs sm:text-sm font-medium transition-all flex items-start gap-3 cursor-pointer '

                            if (!isAnswered) {
                              optionClasses +=
                                'bg-neutral-50/50 dark:bg-[#181820]/50 border-neutral-200/80 dark:border-neutral-800/80 hover:border-amber-500/50 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200'
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

                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => handleSelectPracticeOption(q.id, opt.id)}
                                className={`w-full text-left ${optionClasses}`}
                              >
                                <span
                                  className={`w-6 h-6 rounded-lg text-xs font-bold font-mono flex items-center justify-center shrink-0 ${
                                    isAnswered
                                      ? isOptCorrect
                                        ? 'bg-emerald-500 text-white'
                                        : isSelected
                                        ? 'bg-red-500 text-white'
                                        : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500'
                                      : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
                                  }`}
                                >
                                  {isAnswered && isOptCorrect ? (
                                    <Check className="w-3.5 h-3.5" />
                                  ) : isAnswered && isSelected ? (
                                    <XCircle className="w-3.5 h-3.5" />
                                  ) : (
                                    optionLetter
                                  )}
                                </span>

                                <div className="flex-1 leading-snug">
                                  <span>{opt.text}</span>
                                  {isAnswered && isSelected && !isOptCorrect && opt.distractorReason && (
                                    <div className="mt-1 text-[11px] text-red-600 dark:text-red-400 font-normal">
                                      Why this is incorrect: {opt.distractorReason}
                                    </div>
                                  )}
                                </div>
                              </button>
                            )
                          })}
                        </div>

                        {/* Explanation Card (shows once answered) */}
                        {isAnswered && (
                          <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-2 animate-fade-in">
                            <div className="flex items-center gap-2">
                              {isCorrect ? (
                                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                  <CheckCircle2 className="w-4 h-4" />
                                  Correct!
                                </span>
                              ) : (
                                <span className="text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1">
                                  <XCircle className="w-4 h-4" />
                                  Review Answer
                                </span>
                              )}
                              <span className="text-[11px] text-neutral-400 font-mono">
                                Official Amazon SOP Rationale
                              </span>
                            </div>

                            <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                              {q.explanation}
                            </p>

                            {/* Key Takeaway Banner */}
                            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-900 dark:text-cyan-200 flex items-center gap-2 font-medium">
                              <Sparkles className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                              <span><strong>Key Takeaway:</strong> {q.keyTakeaway}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= VIEW: QUIZ ACTIVE MODE ================= */}
        {viewMode === 'quiz_active' && quizQuestions.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Quiz Top Navigation Bar */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono">
                  Question {quizCurrentIndex + 1} of {quizQuestions.length}
                </span>
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 line-clamp-1">
                  {quizQuestions[quizCurrentIndex].topicTitle}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Exit quiz and return to practice mode? Current progress will be lost.')) {
                    setViewMode('practice')
                  }
                }}
                className="text-xs font-semibold text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
              >
                Exit Quiz
              </button>
            </div>

            {/* Quiz Progress Bar */}
            <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-amber-500 transition-all duration-300"
                style={{ width: `${((quizCurrentIndex + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>

            {/* Active Quiz Question Card */}
            {(() => {
              const currentQ = quizQuestions[quizCurrentIndex]
              const userSelection = quizUserAnswers[currentQ.id]

              return (
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 space-y-6 shadow-sm">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold font-mono uppercase text-amber-500">
                      {currentQ.questionType} question • {currentQ.topicTitle}
                    </span>
                    <h2 className="text-base sm:text-xl font-bold text-neutral-900 dark:text-white leading-relaxed">
                      {currentQ.question}
                    </h2>
                  </div>

                  {/* Options */}
                  <div className="space-y-2.5">
                    {currentQ.options.map((opt, optIndex) => {
                      const letter = String.fromCharCode(65 + optIndex)
                      const isSelected = userSelection === opt.id

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectQuizOption(opt.id)}
                          className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 cursor-pointer ${
                            isSelected
                              ? 'bg-amber-500/10 border-amber-500 text-neutral-900 dark:text-white shadow-xs font-semibold'
                              : 'bg-neutral-50/50 dark:bg-[#181820]/50 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 text-neutral-800 dark:text-neutral-200'
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-lg text-xs font-bold font-mono flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'bg-amber-500 text-white'
                                : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
                            }`}
                          >
                            {letter}
                          </span>
                          <span className="leading-snug">{opt.text}</span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                    <button
                      type="button"
                      disabled={quizCurrentIndex === 0}
                      onClick={() => setQuizCurrentIndex((i) => i - 1)}
                      className="px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>

                    {quizCurrentIndex < quizQuestions.length - 1 ? (
                      <button
                        type="button"
                        onClick={() => setQuizCurrentIndex((i) => i + 1)}
                        className="px-5 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold hover:opacity-90 flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <span>Next</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleCompleteQuiz}
                        className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <span>Submit Quiz</span>
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              )
            })()}
          </div>
        )}

        {/* ================= VIEW: QUIZ SUMMARY ================= */}
        {viewMode === 'quiz_summary' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-3xl bg-amber-500/10 text-amber-500 mx-auto flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
                  Quiz Completed!
                </h2>
                <p className="text-xs text-neutral-400">
                  Completed in {Math.floor(quizTimeTaken / 60)}m {quizTimeTaken % 60}s
                </p>
              </div>

              {/* Score Display */}
              {(() => {
                const total = quizQuestions.length
                const correct = quizQuestions.filter((q) => quizUserAnswers[q.id] === q.correctAnswerId).length
                const percent = Math.round((correct / total) * 100)

                return (
                  <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200 dark:border-neutral-800 space-y-2">
                    <div className="text-4xl font-extrabold font-mono text-neutral-900 dark:text-white">
                      {correct} / {total}
                    </div>
                    <div className="text-sm font-bold text-amber-500">
                      {percent}% Accuracy
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto">
                      {percent >= 80
                        ? 'Excellent! You have solid foundational knowledge across these Amazon Voice concepts.'
                        : 'Good effort! Review the missed questions below to cement the core SOP definitions.'}
                    </p>
                  </div>
                )
              })()}

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleStartQuiz(quizQuestions.length, selectedTopicId)}
                  className="py-2.5 px-5 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold hover:opacity-90 flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Retake Another Quiz</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('practice')}
                  className="py-2.5 px-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  Back to Practice List
                </button>
              </div>
            </div>

            {/* Question by Question Review */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider font-mono">
                Detailed Review
              </h3>

              <div className="space-y-3">
                {quizQuestions.map((q, idx) => {
                  const userAns = quizUserAnswers[q.id]
                  const isCorrect = userAns === q.correctAnswerId
                  const correctOpt = q.options.find((o) => o.id === q.correctAnswerId)

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-2xl border text-xs space-y-2 ${
                        isCorrect
                          ? 'bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-500/40'
                          : 'bg-red-50/50 dark:bg-red-950/10 border-red-500/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold font-mono text-neutral-500">Q{idx + 1}. {q.topicTitle}</span>
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

                      <p className="font-bold text-neutral-900 dark:text-white">{q.question}</p>

                      <div className="text-[11px] text-neutral-600 dark:text-neutral-300">
                        <strong className="text-emerald-600 dark:text-emerald-400">Correct Answer: </strong>
                        {correctOpt?.text}
                      </div>

                      <div className="text-[11px] text-neutral-500 dark:text-neutral-400 bg-white/50 dark:bg-black/20 p-2 rounded-xl">
                        {q.keyTakeaway}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
