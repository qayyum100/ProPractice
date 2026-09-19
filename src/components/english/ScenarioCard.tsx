import React from 'react'
import { ScenarioPractice } from '../../types/english'
import { Badge } from '../ui/Badge'
import { Briefcase, Terminal, Mail, AlertTriangle, ArrowRight } from 'lucide-react'

interface ScenarioCardProps {
  scenario: ScenarioPractice
  onSelect: (scenario: ScenarioPractice) => void
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({
  scenario,
  onSelect
}) => {
  const getCategoryIcon = (cat: ScenarioPractice['category']) => {
    switch (cat) {
      case 'email': return <Mail className="w-4 h-4 text-sky-500" />
      case 'incident': return <AlertTriangle className="w-4 h-4 text-amber-500" />
      case 'pr_review': return <Terminal className="w-4 h-4 text-purple-500" />
      default: return <Briefcase className="w-4 h-4 text-emerald-500" />
    }
  }

  return (
    <div
      onClick={() => onSelect(scenario)}
      className="p-6 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] hover:border-neutral-400 dark:hover:border-neutral-600 transition-all cursor-pointer shadow-sm group flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            {getCategoryIcon(scenario.category)}
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {scenario.category.replace('_', ' ')}
            </span>
          </div>
          <Badge variant={scenario.difficulty === 'advanced' ? 'warning' : 'neutral'} size="sm">
            {scenario.difficulty}
          </Badge>
        </div>

        <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
          {scenario.title}
        </h3>

        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 mb-3">
          {scenario.roleContext}
        </p>

        <p className="text-sm font-mono text-neutral-700 dark:text-neutral-300 line-clamp-2 bg-neutral-50 dark:bg-[#181820] p-3 rounded-xl border border-neutral-200/60 dark:border-neutral-800">
          "{scenario.textToType}"
        </p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {scenario.targetVocabulary.map((word) => (
            <span
              key={word}
              className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-[#1c1c24] text-[11px] font-mono text-neutral-600 dark:text-neutral-400"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs font-semibold text-sky-600 dark:text-sky-400">
        <span>Start Practice</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  )
}
