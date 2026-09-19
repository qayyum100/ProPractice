import React from 'react'
import { DailyPracticePlan } from '../../types/ai'
import { CheckCircle, Clock, Zap, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { ProgressBar } from '../ui/ProgressBar'

interface DailyPlanWidgetProps {
  plan: DailyPracticePlan
  onStartTask: (task: DailyPracticePlan['tasks'][0]) => void
}

export const DailyPlanWidget: React.FC<DailyPlanWidgetProps> = ({
  plan,
  onStartTask
}) => {
  const completedCount = plan.tasks.filter(t => t.completed).length
  const progressPercent = Math.round((completedCount / plan.tasks.length) * 100)

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              Today's Curated Practice
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-semibold">
              {completedCount}/{plan.tasks.length} Completed
            </span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Balanced 15-minute daily progression routine targeting multi-skill mastery.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold text-neutral-500">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            <span>~{plan.estimatedTotalMinutes} mins</span>
          </div>
          <div className="flex items-center gap-1 text-sky-600 dark:text-sky-400">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>+{plan.totalXpReward} XP</span>
          </div>
        </div>
      </div>

      <ProgressBar value={progressPercent} color="brand" />

      <div className="space-y-3">
        {plan.tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between gap-4 transition-all hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  task.completed
                    ? 'bg-emerald-500 text-white'
                    : 'border-2 border-neutral-300 dark:border-neutral-700 text-transparent'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                    {task.title}
                  </h4>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 px-1.5 py-0.2 bg-neutral-200/60 dark:bg-neutral-800 rounded">
                    {task.category}
                  </span>
                </div>
                <span className="text-xs text-neutral-400">
                  {task.durationMinutes} min • +{task.xp} XP
                </span>
              </div>
            </div>

            <Button
              size="sm"
              variant={task.completed ? 'ghost' : 'secondary'}
              onClick={() => onStartTask(task)}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              {task.completed ? 'Retry' : 'Start'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
