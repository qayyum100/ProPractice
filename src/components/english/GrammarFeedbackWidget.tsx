import React from 'react'
import { GrammarPattern } from '../../types/english'
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react'
import { Badge } from '../ui/Badge'

interface GrammarFeedbackWidgetProps {
  pattern: GrammarPattern
}

export const GrammarFeedbackWidget: React.FC<GrammarFeedbackWidgetProps> = ({ pattern }) => {
  return (
    <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-[#121216] border border-neutral-200 dark:border-neutral-800 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-sky-500" />
          <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
            {pattern.title}
          </h4>
        </div>
        <Badge variant="purple">{pattern.level}</Badge>
      </div>

      <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
        {pattern.ruleExplanation}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200/60 dark:border-red-900/40 text-xs">
          <div className="flex items-center gap-1.5 font-semibold text-red-600 dark:text-red-400 mb-1">
            <XCircle className="w-3.5 h-3.5" />
            <span>Common Mistake</span>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 font-mono">
            "{pattern.commonMistake}"
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-xs">
          <div className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Correct Usage</span>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 font-mono">
            "{pattern.correctUsage}"
          </p>
        </div>
      </div>
    </div>
  )
}
