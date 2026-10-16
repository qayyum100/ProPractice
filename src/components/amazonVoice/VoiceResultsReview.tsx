import React, { useState } from 'react'
import { QuizAttemptRecord } from '../../types/amazonVoice'
import { VOICE_CATEGORIES } from '../../data/amazonVoiceQuestionBank'
import {
  CheckCircle2,
  XCircle,
  Timer,
  RotateCcw,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Target
} from 'lucide-react'

interface VoiceResultsReviewProps {
  attempt: QuizAttemptRecord
  onRetakeQuiz: () => void
  onGenerateNewQuiz: () => void
  onPracticeCategory: (categoryKey: string) => void
}

export const VoiceResultsReview: React.FC<VoiceResultsReviewProps> = ({
  attempt,
  onRetakeQuiz,
  onGenerateNewQuiz,
  onPracticeCategory
}) => {
  const [filter, setFilter] = useState<'all' | 'mistakes' | 'correct'>('all')
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null)

  const minutes = Math.floor(attempt.totalDurationSeconds / 60)
  const seconds = attempt.totalDurationSeconds % 60
  const formattedDuration = `${minutes}m ${seconds}s`

  // Identify weak areas (accuracy < 70%)
  const weakCategories = Object.entries(attempt.categoryBreakdown)
    .filter(([, data]) => data.total > 0 && data.accuracy < 70)
    .map(([key, data]) => {
      const meta = VOICE_CATEGORIES.find((c) => c.key === key)
      return {
        key,
        name: meta?.shortTitle || key,
        accuracy: data.accuracy,
        total: data.total
      }
    })

  const filteredQuestions = attempt.questions.filter((q) => {
    const userAns = attempt.answers[q.id]
    const isCorrect = userAns?.isCorrect ?? false
    if (filter === 'mistakes') return !isCorrect
    if (filter === 'correct') return isCorrect
    return true
  })

  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. Score Summary Banner Card */}
      <div className="bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-100 dark:border-neutral-800/80">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Assessment Summary
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
              Quiz Completed!
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              Mode: <span className="font-semibold capitalize text-neutral-800 dark:text-neutral-200">{attempt.config.mode}</span> • Difficulty: <span className="font-semibold capitalize text-neutral-800 dark:text-neutral-200">{attempt.config.difficulty}</span>
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onRetakeQuiz}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Same Quiz</span>
            </button>

            <button
              type="button"
              onClick={onGenerateNewQuiz}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Generate New Quiz</span>
            </button>
          </div>
        </div>

        {/* 4 Score Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#171720] border border-neutral-200/70 dark:border-neutral-800">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
              Final Score
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-mono font-bold text-neutral-900 dark:text-white">
                {attempt.score}
              </span>
              <span className="text-xs text-neutral-400">/ {attempt.totalQuestions}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#171720] border border-neutral-200/70 dark:border-neutral-800">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
              Accuracy
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className={`text-3xl font-mono font-bold ${attempt.accuracyPercentage >= 80 ? 'text-emerald-500' : attempt.accuracyPercentage >= 60 ? 'text-amber-500' : 'text-rose-500'}`}>
                {attempt.accuracyPercentage}%
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#171720] border border-neutral-200/70 dark:border-neutral-800">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
              Total Duration
            </span>
            <div className="flex items-center gap-1.5 text-neutral-900 dark:text-white text-2xl font-mono font-bold">
              <Timer className="w-5 h-5 text-neutral-400" />
              <span>{formattedDuration}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#171720] border border-neutral-200/70 dark:border-neutral-800">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
              Breakdown
            </span>
            <div className="flex items-center gap-3 text-xs pt-1 font-semibold">
              <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> {attempt.score}
              </span>
              <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5" /> {attempt.totalQuestions - attempt.score}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Category Performance & Recommended Practice Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Category Breakdown (2 columns) */}
        <div className="md:col-span-2 bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-800">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
              Category Accuracy Breakdown
            </h3>
            <span className="text-xs text-neutral-400">Amazon NA Voice Topics</span>
          </div>

          <div className="space-y-3">
            {Object.entries(attempt.categoryBreakdown).map(([catKey, data]) => {
              if (data.total === 0) return null
              const meta = VOICE_CATEGORIES.find((c) => c.key === catKey)
              return (
                <div key={catKey} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                      {meta?.title || catKey}
                    </span>
                    <span className="font-mono text-neutral-500">
                      {data.correct}/{data.total} ({data.accuracy}%)
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        data.accuracy >= 80 ? 'bg-emerald-500' : data.accuracy >= 60 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${data.accuracy}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recommended Weak Areas Focus (1 column) */}
        <div className="bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
              <Target className="w-4 h-4" />
              <span>Recommended Practice Areas</span>
            </div>

            {weakCategories.length > 0 ? (
              <div className="space-y-2.5">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Target these topics to raise your First Contact Resolution and SOP compliance score:
                </p>
                {weakCategories.map((weak) => (
                  <div
                    key={weak.key}
                    className="p-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-semibold text-xs text-neutral-900 dark:text-white block">
                        {weak.name}
                      </span>
                      <span className="text-[11px] text-amber-600 dark:text-amber-400 font-mono">
                        {weak.accuracy}% accuracy
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onPracticeCategory(weak.key)}
                      className="text-xs px-2.5 py-1 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold hover:opacity-90 cursor-pointer"
                    >
                      Drill
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-center space-y-1">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto" />
                <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-200">
                  Exceptional Proficiency!
                </h4>
                <p className="text-[11px] text-emerald-700/80 dark:text-emerald-300/80">
                  All categories met or exceeded the 70% benchmark.
                </p>
              </div>
            )}
          </div>

          {/* Legal Compliance Disclaimer */}
          <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[10px] text-neutral-400 leading-tight">
            * Disclaimer: ProPractice is an educational preparation simulator and is not officially affiliated with or endorsed by Amazon.com, Inc. Assessment scores do not predict official company hiring or auditing evaluations.
          </div>
        </div>
      </div>

      {/* 3. Question-by-Question Deep Review Section */}
      <div className="bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100 dark:border-neutral-800">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
              Question-by-Question Review
            </h3>
            <p className="text-xs text-neutral-400">
              Review correct answers, explanations, and distractor analyses
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-[#1c1c24] text-neutral-900 dark:text-white shadow-2xs'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              All ({attempt.questions.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('mistakes')}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                filter === 'mistakes'
                  ? 'bg-white dark:bg-[#1c1c24] text-rose-600 dark:text-rose-400 shadow-2xs'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Mistakes ({attempt.totalQuestions - attempt.score})
            </button>
            <button
              type="button"
              onClick={() => setFilter('correct')}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                filter === 'correct'
                  ? 'bg-white dark:bg-[#1c1c24] text-emerald-600 dark:text-emerald-400 shadow-2xs'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Correct ({attempt.score})
            </button>
          </div>
        </div>

        {/* Question Cards List */}
        <div className="space-y-4">
          {filteredQuestions.map((question, qIdx) => {
            const userAns = attempt.answers[question.id]
            const isCorrect = userAns?.isCorrect ?? false
            const isExpanded = expandedQuestionId === question.id

            return (
              <div
                key={question.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isCorrect
                    ? 'border-emerald-500/30 bg-emerald-500/5'
                    : 'border-rose-500/30 bg-rose-500/5'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="pt-0.5">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-bold text-neutral-400">
                          Q{qIdx + 1}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                          {question.topic}
                        </span>
                        {question.isVerified && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                            Verified SOP
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                        {question.question}
                      </h4>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandedQuestionId(isExpanded ? null : question.id)}
                    className="p-1.5 rounded-lg hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors text-neutral-400 cursor-pointer"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-neutral-200/60 dark:border-neutral-800 space-y-3 text-xs animate-fade-in">
                    {/* Options list showing what user picked vs what is correct */}
                    <div className="space-y-1.5">
                      {question.options.map((opt) => {
                        const wasChosen = userAns?.selectedOptionIds.includes(opt.id)
                        const isRight = question.correctAnswerIds.includes(opt.id)

                        return (
                          <div
                            key={opt.id}
                            className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${
                              isRight
                                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-950 dark:text-emerald-100 font-semibold'
                                : wasChosen
                                ? 'bg-rose-500/15 border-rose-500/40 text-rose-950 dark:text-rose-100'
                                : 'bg-neutral-100/50 dark:bg-neutral-800/40 border-transparent text-neutral-500'
                            }`}
                          >
                            <span>{opt.text}</span>
                            <span className="text-[10px] font-bold uppercase ml-2 shrink-0">
                              {isRight ? 'Correct Answer' : wasChosen ? 'Your Choice' : ''}
                            </span>
                          </div>
                        )
                      })}
                    </div>

                    {/* Pedagogical Explanation */}
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1a1a24] border border-neutral-200 dark:border-neutral-700/60 space-y-1 text-neutral-700 dark:text-neutral-300">
                      <strong className="text-neutral-900 dark:text-white block font-bold">
                        SOP Explanation:
                      </strong>
                      <p>{question.explanation}</p>
                      {question.referenceSource && (
                        <p className="text-[10px] font-mono text-neutral-400 pt-1">
                          Source: {question.referenceSource}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
