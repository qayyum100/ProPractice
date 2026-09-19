import React from 'react'
import { AICoachFeedback } from '../../types/ai'
import { Bot, Sparkles, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

interface AICoachCardProps {
  feedback: AICoachFeedback
  onStartRecommended?: (text: string) => void
}

export const AICoachCard: React.FC<AICoachCardProps> = ({
  feedback,
  onStartRecommended
}) => {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <span>AI Skill Coach</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Personalized performance diagnostics & adaptive recommendation
            </p>
          </div>
        </div>
        <Badge variant="brand">Adaptive Analysis</Badge>
      </div>

      {/* Diagnostics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Speed Diagnosis */}
        <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200/60 dark:border-neutral-800 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-white">
            <TrendingUp className="w-4 h-4 text-sky-500" />
            <span>Velocity Dynamics</span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {feedback.speedEvaluation.comment}
          </p>
        </div>

        {/* Accuracy Diagnosis */}
        <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200/60 dark:border-neutral-800 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-white">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Neuromuscular Precision</span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {feedback.accuracyEvaluation.comment}
          </p>
        </div>
      </div>

      {/* Recommended Next Practice Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-50/80 to-indigo-50/40 dark:from-sky-950/20 dark:to-indigo-950/20 border border-sky-200/60 dark:border-sky-800/40 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
              Recommended Next Practice ({feedback.recommendedPractice.durationMinutes} min)
            </span>
            <h4 className="text-base font-bold text-neutral-900 dark:text-white mt-0.5">
              {feedback.recommendedPractice.title}
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              {feedback.recommendedPractice.reason}
            </p>
          </div>
          {onStartRecommended && (
            <Button
              size="sm"
              variant="primary"
              onClick={() => onStartRecommended(feedback.recommendedPractice.generatedContent)}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start Practice
            </Button>
          )}
        </div>

        <div className="p-3 rounded-xl bg-white/80 dark:bg-[#121216]/80 border border-neutral-200/60 dark:border-neutral-800 font-mono text-xs text-neutral-800 dark:text-neutral-200">
          "{feedback.recommendedPractice.generatedContent}"
        </div>
      </div>

      <div className="text-xs text-neutral-400 italic text-center">
        💡 {feedback.motivationalNote}
      </div>
    </div>
  )
}
