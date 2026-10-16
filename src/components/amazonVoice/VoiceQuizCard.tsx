import React, { useState } from 'react'
import {
  VoiceQuizQuestion,
  UserAnswerState,
  PracticeMode
} from '../../types/amazonVoice'
import {
  Bookmark,
  BookmarkCheck,
  Lightbulb,
  Check,
  X,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ChevronUp,
  AlertCircle
} from 'lucide-react'

interface VoiceQuizCardProps {
  question: VoiceQuizQuestion
  currentIndex: number
  totalQuestions: number
  userAnswer?: UserAnswerState
  onSelectOption: (optionId: string, isMultiSelect?: boolean) => void
  onClearSelection: () => void
  onToggleBookmark: (questionId: string) => void
  isBookmarked: boolean
  mode: PracticeMode
}

export const VoiceQuizCard: React.FC<VoiceQuizCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  userAnswer,
  onSelectOption,
  onClearSelection,
  onToggleBookmark,
  isBookmarked,
  mode
}) => {
  const [showHint, setShowHint] = useState(false)
  const [showDistractors, setShowDistractors] = useState(false)

  const selectedIds = userAnswer?.selectedOptionIds || []
  const hasAnswered = selectedIds.length > 0
  const isMulti = question.type === 'multi_select'

  // Only reveal correctness in 'learn' mode or 'review' mode once answered
  const revealCorrectness = (mode === 'learn' && hasAnswered) || mode === 'review'

  const isOptionCorrect = (optId: string) => question.correctAnswerIds.includes(optId)
  const isOptionSelected = (optId: string) => selectedIds.includes(optId)

  return (
    <div className="bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-5 sm:p-8 shadow-sm transition-all space-y-6">
      {/* Top Header Row: Category, Index, Verified badge, Bookmark, Clear */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-100 dark:border-neutral-800/80">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
            Q{currentIndex + 1} of {totalQuestions}
          </span>

          <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
            {question.topic}
          </span>

          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
            question.difficulty === 'advanced'
              ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
              : question.difficulty === 'intermediate'
              ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
              : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
          }`}>
            {question.difficulty}
          </span>

          {question.isVerified ? (
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-medium">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Verified SOP
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-medium">
              <Sparkles className="w-3 h-3 text-purple-600" />
              Gemini AI
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {hasAnswered && mode !== 'assessment' && (
            <button
              type="button"
              onClick={onClearSelection}
              className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 px-2 py-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Clear
            </button>
          )}

          <button
            type="button"
            onClick={() => onToggleBookmark(question.id)}
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              isBookmarked
                ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-500 border border-amber-300/40'
                : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark question for later'}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Realistic Caller Scenario Box (if scenario present) */}
      {question.scenarioContext && (
        <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200/70 dark:border-neutral-800/80 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-neutral-500">
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
              Caller Context: <strong className="text-neutral-800 dark:text-neutral-200">{question.scenarioContext.customerName || 'Amazon Customer'}</strong>
            </span>
            {question.scenarioContext.callerTone && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-rose-500/10 text-rose-600 dark:text-rose-400">
                Tone: {question.scenarioContext.callerTone}
              </span>
            )}
          </div>
          {question.scenarioContext.carrierStatus && (
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-mono bg-neutral-200/60 dark:bg-neutral-900/60 px-2.5 py-1.5 rounded-lg">
              Status: {question.scenarioContext.carrierStatus}
            </p>
          )}
        </div>
      )}

      {/* Main Question Text */}
      <div className="space-y-2">
        {isMulti && (
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            * Select all correct options that apply
          </p>
        )}
        <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options List */}
      <div className="space-y-3">
        {question.options.map((option, optIdx) => {
          const selected = isOptionSelected(option.id)
          const isCorrect = isOptionCorrect(option.id)

          // State colors based on mode and reveal
          let optionStyles = 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-[#15151c]'
          let indicatorIcon = null

          if (revealCorrectness) {
            if (isCorrect) {
              optionStyles = 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100 ring-1 ring-emerald-500'
              indicatorIcon = <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            } else if (selected && !isCorrect) {
              optionStyles = 'border-rose-500 bg-rose-500/10 text-rose-900 dark:text-rose-100 ring-1 ring-rose-500'
              indicatorIcon = <X className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            } else {
              optionStyles = 'opacity-60 border-neutral-200 dark:border-neutral-800 bg-transparent'
            }
          } else if (selected) {
            // Selected state before reveal (Assessment mode or active selection)
            optionStyles = 'border-amber-500 bg-amber-500/10 text-neutral-900 dark:text-white ring-1 ring-amber-500 font-medium'
          }

          const optionLetter = String.fromCharCode(65 + optIdx)

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelectOption(option.id, isMulti)}
              className={`w-full p-4 rounded-2xl text-left border transition-all flex items-start gap-3.5 cursor-pointer group ${optionStyles}`}
            >
              <div
                className={`w-7 h-7 rounded-xl shrink-0 flex items-center justify-center text-xs font-bold transition-colors ${
                  revealCorrectness && isCorrect
                    ? 'bg-emerald-500 text-white'
                    : revealCorrectness && selected && !isCorrect
                    ? 'bg-rose-500 text-white'
                    : selected
                    ? 'bg-amber-500 text-white'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700'
                }`}
              >
                {indicatorIcon || optionLetter}
              </div>

              <div className="flex-1 text-sm leading-relaxed pt-0.5">
                {option.text}
              </div>
            </button>
          )
        })}
      </div>

      {/* Pedagogical Hint Drawer */}
      {question.hint && (
        <div className="pt-2">
          {!showHint ? (
            <button
              type="button"
              onClick={() => setShowHint(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Need a Hint?</span>
            </button>
          ) : (
            <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="flex-1 space-y-1">
                <span className="font-bold uppercase tracking-wider text-[10px] text-amber-700 dark:text-amber-400 block">
                  Pedagogical Hint
                </span>
                <p>{question.hint}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Learn Mode / Review Mode: Deep Pedagogical Explanation & Distractor Analysis */}
      {revealCorrectness && (
        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-4 animate-fade-in">
          {/* Main Verified Explanation */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>SOP Policy Explanation</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed">
              {question.explanation}
            </p>
            {question.referenceSource && (
              <p className="text-[11px] font-mono text-emerald-700/80 dark:text-emerald-400/80 pt-1">
                Citation: {question.referenceSource}
              </p>
            )}
          </div>

          {/* Expandable Distractor Analysis (Why wrong choices are invalid) */}
          {question.options.some((opt) => opt.distractorReason && !isOptionCorrect(opt.id)) && (
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setShowDistractors(!showDistractors)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
              >
                <AlertCircle className="w-3.5 h-3.5 text-neutral-400" />
                <span>{showDistractors ? 'Hide Distractor Analysis' : 'Why are other options incorrect?'}</span>
                {showDistractors ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showDistractors && (
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#16161e] border border-neutral-200/70 dark:border-neutral-800 space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                  {question.options
                    .filter((opt) => opt.distractorReason && !isOptionCorrect(opt.id))
                    .map((opt) => (
                      <div key={opt.id} className="space-y-0.5">
                        <strong className="text-neutral-900 dark:text-white">Option: &ldquo;{opt.text}&rdquo;</strong>
                        <p className="text-neutral-500 dark:text-neutral-400">{opt.distractorReason}</p>
                      </div>
                    ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
