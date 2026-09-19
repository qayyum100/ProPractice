import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { useTypingSession } from '../context/TypingSessionContext'
import { detectTopWeaknesses } from '../core/adaptiveEngine'
import { AICoachService } from '../core/aiCoachService'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Badge } from '../components/ui/Badge'
import { DailyPlanWidget } from '../components/ai/DailyPlanWidget'
import { generateTopicPracticePassage } from '../lib/gemini'
import {
  Sparkles,
  ArrowRight,
  Lightbulb,
  Wand2,
  Cpu
} from 'lucide-react'

export const AICoachPage: React.FC = () => {
  const navigate = useNavigate()
  const { recentSessions } = useTypingSession()
  const [promptTopic, setPromptTopic] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState<boolean>(false)

  const { topWeakKeys, recommendedCategory } = detectTopWeaknesses(recentSessions)
  const weakKeyStrings = topWeakKeys.length > 0 
    ? topWeakKeys.map(k => k.key)
    : ['t', 'p', 's', 'c', 'r', 'e']

  const dailyPlan = AICoachService.generateDailyPlan()

  const handleStartDailyTask = (task: typeof dailyPlan.tasks[0]) => {
    navigate('/practice', {
      state: {
        customText: task.targetText,
        mode: 'daily_plan_task',
        duration: task.durationMinutes * 60
      }
    })
  }

  const handleGenerateCustomPractice = async (e: React.FormEvent) => {
    e.preventDefault()
    const topic = promptTopic.trim()
    if (!topic) return

    setIsGenerating(true)
    try {
      const generatedText = await generateTopicPracticePassage(topic)
      navigate('/practice', {
        state: {
          customText: generatedText,
          mode: 'ai_generated'
        }
      })
    } catch {
      navigate('/practice', {
        state: {
          customText: `Mastering ${topic} requires dedicated repetition, tactical problem solving, and deliberate practice.`,
          mode: 'ai_generated'
        }
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const handleStartWeakKeyDrill = (key: string) => {
    const drill = AICoachService.generateWeakKeyDrill(key)
    navigate('/practice', {
      state: {
        customText: drill,
        mode: 'weak_key_drill'
      }
    })
  }

  return (
    <div className="py-8 sm:py-12 space-y-10 animate-fade-in">
      <Container size="lg" className="space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Intelligent Adaptive Tutoring
              </span>
              <Badge variant="brand">AI Engine v2.4</Badge>
            </div>
            <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-0.5">
              AI Skill Coach & Generator
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Personalized performance diagnostics, weak-key remediation generators, and custom topic synthesis.
            </p>
          </div>
        </div>

        {/* 1. Custom Topic Practice Generator */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white to-sky-50/50 dark:from-[#121216] dark:to-[#161a24] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Wand2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                AI Custom Practice Generator
              </h3>
              <p className="text-xs text-neutral-500">
                Describe any topic or interview theme to instantly generate a tailored practice test.
              </p>
            </div>
          </div>

          <form onSubmit={handleGenerateCustomPractice} className="flex flex-col sm:flex-row gap-3">
            <Input
              value={promptTopic}
              onChange={(e) => setPromptTopic(e.target.value)}
              placeholder="e.g. Distributed Consensus in Raft, GraphQL Schema Design, Senior React Interview..."
              className="flex-1 bg-white dark:bg-[#16161e]"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isGenerating}
              icon={<Sparkles className="w-4 h-4" />}
            >
              Generate & Practice
            </Button>
          </form>

          {/* Preset Prompts */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-neutral-400">Popular presets:</span>
            {[
              'Microservices Architecture',
              'PostgreSQL Index Tuning',
              'Executive Email Etiquette',
              'Git Merge Conflict Resolution'
            ].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setPromptTopic(preset)}
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#1c1c24] border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 hover:border-sky-500 transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Side-by-Side: Daily Practice Plan + AI Diagnostic Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Daily Plan */}
          <DailyPlanWidget plan={dailyPlan} onStartTask={handleStartDailyTask} />

          {/* Real-time Diagnostic Summary Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                      Live Telemetry Insights
                    </h3>
                    <p className="text-[11px] text-neutral-400">
                      Based on {recentSessions.length} recorded typing sessions
                    </p>
                  </div>
                </div>
                <Badge variant={topWeakKeys.length > 0 ? 'warning' : 'success'}>
                  {topWeakKeys.length > 0 ? `${topWeakKeys.length} Weak Keys Detected` : 'Zero High-Error Keys'}
                </Badge>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200/60 dark:border-neutral-800 space-y-2">
                <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>Coach Recommendation</span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Focus on smooth transition speed across key pairs. Recommended category today is{' '}
                  <span className="font-bold text-sky-600 dark:text-sky-400 capitalize">{recommendedCategory}</span>.
                </p>
              </div>

              {topWeakKeys.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    Highest Error Latency Keys:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {topWeakKeys.map((item) => (
                      <span
                        key={item.key}
                        className="px-3 py-1.5 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 font-mono font-bold text-xs border border-red-200 dark:border-red-900/60"
                      >
                        {item.key.toUpperCase()} ({item.errorRate}% err)
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/practice', { state: { category: recommendedCategory } })}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="w-full"
            >
              Launch Recommended Practice
            </Button>
          </div>
        </div>

        {/* 3. Targeted Weak-Key Drills Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Targeted Remedial Drills
              </h3>
              <p className="text-xs text-neutral-500">
                Drills automatically constructed around high error-frequency keys.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {weakKeyStrings.slice(0, 6).map((char) => (
              <div
                key={char}
                className="p-6 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm flex flex-col justify-between space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-8 h-8 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 font-mono font-bold text-sm flex items-center justify-center border border-sky-200 dark:border-sky-800">
                      {char.toUpperCase()}
                    </span>
                    <Badge variant="neutral">Repetition Drill</Badge>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono line-clamp-2 leading-relaxed">
                    "{AICoachService.generateWeakKeyDrill(char)}"
                  </p>
                </div>

                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleStartWeakKeyDrill(char)}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Start Drill
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
