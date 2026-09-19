import React, { useMemo, useState } from 'react'
import { Container } from '../components/layout/Container'
import { useTypingSession } from '../context/TypingSessionContext'
import { SkillDNAChart } from '../components/analytics/SkillDNAChart'
import { WeaknessRadar } from '../components/analytics/WeaknessRadar'
import { WpmAccuracyChart } from '../components/analytics/WpmAccuracyChart'
import { computeSkillDna, detectTopWeaknesses } from '../core/adaptiveEngine'
import { Tabs } from '../components/ui/Tabs'
import { Trophy, BarChart2 } from 'lucide-react'

export const ProgressAnalyticsPage: React.FC = () => {
  const { userStats, recentSessions } = useTypingSession()
  const [timeframe, setTimeframe] = useState<string>('all')

  const skillDna = useMemo(() => {
    return computeSkillDna(recentSessions)
  }, [recentSessions])

  const { topWeakKeys, recommendedCategory } = useMemo(() => {
    return detectTopWeaknesses(recentSessions)
  }, [recentSessions])

  return (
    <div className="py-8 sm:py-12 space-y-10">
      <Container size="lg" className="space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Analytics & Long-Term Trajectory
            </span>
            <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-0.5">
              Progress & Skill DNA
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Comprehensive telemetry across typing speed, consistency, vocabulary mastery, and key error profiles.
            </p>
          </div>

          <Tabs
            tabs={[
              { id: '7d', label: '7 Days' },
              { id: '30d', label: '30 Days' },
              { id: 'all', label: 'All Time' }
            ]}
            activeTab={timeframe}
            onChange={setTimeframe}
            size="sm"
          />
        </div>

        {/* 1. Skill DNA & Personal Bests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skill DNA 8-Axis Polygon */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <BarChart2 className="w-5 h-5 text-sky-500" />
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                  Skill DNA Profile
                </h3>
              </div>
              <p className="text-xs text-neutral-500">
                Multi-dimensional fingerprint analyzing speed, accuracy, consistency, vocabulary, developer syntax, and rhythm.
              </p>
            </div>

            <SkillDNAChart metrics={skillDna} />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-center text-xs">
              <div>
                <span className="text-neutral-400 block text-[10px] uppercase font-bold">Speed</span>
                <strong className="text-neutral-900 dark:text-white">{skillDna.speedScore}%</strong>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px] uppercase font-bold">Accuracy</span>
                <strong className="text-neutral-900 dark:text-white">{skillDna.accuracyScore}%</strong>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px] uppercase font-bold">Punctuation</span>
                <strong className="text-neutral-900 dark:text-white">{skillDna.punctuationMastery}%</strong>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px] uppercase font-bold">Dev Lexicon</span>
                <strong className="text-neutral-900 dark:text-white">{skillDna.developerLexicon}%</strong>
              </div>
            </div>
          </div>

          {/* Personal Bests Table */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Personal Records (PRs)
              </h3>
            </div>

            <div className="space-y-3">
              {Object.entries(userStats.personalBests).map(([testType, record]) => (
                <div
                  key={testType}
                  className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                      {testType} Sprint
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      Achieved on {record.date}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl font-mono font-bold text-sky-600 dark:text-sky-400">
                      {record.wpm} <span className="text-xs text-neutral-400 font-normal">WPM</span>
                    </span>
                    <span className="text-xs font-semibold text-neutral-500 block">
                      {record.accuracy}% accuracy
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Lifetime Summary */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs">
              <div className="p-3 rounded-xl bg-neutral-100/60 dark:bg-neutral-800/40">
                <span className="text-neutral-400 block">Total Active Time</span>
                <span className="font-bold text-neutral-900 dark:text-white text-sm">
                  {Math.round(userStats.totalPracticeSeconds / 60)} minutes
                </span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-100/60 dark:bg-neutral-800/40">
                <span className="text-neutral-400 block">Total Tests Run</span>
                <span className="font-bold text-neutral-900 dark:text-white text-sm">
                  {userStats.totalSessions} sessions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Speed Chart & Weakness Radar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-4">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Velocity Trajectory Curve
            </h3>
            <WpmAccuracyChart sessions={recentSessions} />
          </div>

          <WeaknessRadar
            weakKeys={topWeakKeys}
            recommendedCategory={recommendedCategory}
          />
        </div>

        {/* 3. Recent Sessions History Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-4">
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Recent Practice History
          </h3>

          {recentSessions.length === 0 ? (
            <p className="text-xs text-neutral-400">No recent sessions recorded yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-400 uppercase font-semibold">
                    <th className="py-3 px-2">Category</th>
                    <th className="py-3 px-2">Net WPM</th>
                    <th className="py-3 px-2">Accuracy</th>
                    <th className="py-3 px-2">Consistency</th>
                    <th className="py-3 px-2">XP</th>
                    <th className="py-3 px-2">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                  {recentSessions.slice(0, 10).map((s) => (
                    <tr key={s.sessionId} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                      <td className="py-3 px-2 font-medium capitalize text-neutral-900 dark:text-white">
                        {s.category}
                      </td>
                      <td className="py-3 px-2 font-mono font-bold text-sky-600 dark:text-sky-400">
                        {s.netWpm} WPM
                      </td>
                      <td className="py-3 px-2 font-mono text-neutral-700 dark:text-neutral-300">
                        {s.accuracy}%
                      </td>
                      <td className="py-3 px-2 font-mono text-neutral-700 dark:text-neutral-300">
                        {s.consistencyScore}%
                      </td>
                      <td className="py-3 px-2 font-semibold text-amber-600 dark:text-amber-400">
                        +{s.xpEarned} XP
                      </td>
                      <td className="py-3 px-2 text-neutral-400">
                        {Math.round(s.durationSeconds)}s
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
