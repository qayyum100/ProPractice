import React, { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { useAuth } from '../context/AuthContext'
import { useTypingSession } from '../context/TypingSessionContext'
import { DailyPlanWidget } from '../components/ai/DailyPlanWidget'
import { WeaknessRadar } from '../components/analytics/WeaknessRadar'
import { WpmAccuracyChart } from '../components/analytics/WpmAccuracyChart'
import { LevelCard } from '../components/gamification/LevelCard'
import { detectTopWeaknesses } from '../core/adaptiveEngine'
import { AICoachService } from '../core/aiCoachService'
import { Button } from '../components/ui/Button'
import {
  Zap,
  Flame,
  TrendingUp,
  Target,
  Compass,
  BookOpen,
  Terminal,
  Swords,
  ArrowRight
} from 'lucide-react'

export const DashboardPage: React.FC = () => {
  const { profile } = useAuth()
  const { userStats, recentSessions } = useTypingSession()
  const navigate = useNavigate()

  const dailyPlan = useMemo(() => {
    return AICoachService.generateDailyPlan()
  }, [])

  const { topWeakKeys, recommendedCategory } = useMemo(() => {
    return detectTopWeaknesses(recentSessions)
  }, [recentSessions])

  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }, [])

  const handleStartDailyTask = (task: typeof dailyPlan.tasks[0]) => {
    navigate('/practice', {
      state: {
        customText: task.targetText,
        mode: task.category.toLowerCase()
      }
    })
  }

  return (
    <div className="py-8 sm:py-12 space-y-10">
      <Container size="lg" className="space-y-10">
        {/* 1. Calm, Focused Greeting & High-level Metric Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Personal Overview
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              {greeting}, {profile?.fullName?.split(' ')[0] || 'Practitioner'}.
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              You’re maintaining an active {userStats.currentStreak}-day streak. Top speed: {userStats.topWpm} WPM.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link to="/practice">
              <Button size="md" variant="primary" icon={<Zap className="w-4 h-4" />}>
                Quick Practice
              </Button>
            </Link>
            <Link to="/challenges">
              <Button size="md" variant="secondary" icon={<Swords className="w-4 h-4" />}>
                Join Challenge
              </Button>
            </Link>
          </div>
        </div>

        {/* 2. Key Metrics Showcase Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-1">
            <div className="flex items-center justify-between text-neutral-400 text-xs font-semibold uppercase">
              <span>Top Speed</span>
              <Zap className="w-4 h-4 text-sky-500" />
            </div>
            <p className="text-3xl font-mono font-bold text-neutral-900 dark:text-white">
              {userStats.topWpm} <span className="text-xs font-normal text-neutral-400">WPM</span>
            </p>
            <span className="text-[11px] text-neutral-400 block">
              Avg: {userStats.avgWpm} WPM
            </span>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-1">
            <div className="flex items-center justify-between text-neutral-400 text-xs font-semibold uppercase">
              <span>Accuracy</span>
              <Target className="w-4 h-4 text-emerald-500" />
            </div>
            <p className="text-3xl font-mono font-bold text-neutral-900 dark:text-white">
              {userStats.avgAccuracy}%
            </p>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block">
              High Neuromuscular Precision
            </span>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-1">
            <div className="flex items-center justify-between text-neutral-400 text-xs font-semibold uppercase">
              <span>Practice Streak</span>
              <Flame className="w-4 h-4 text-amber-500" />
            </div>
            <p className="text-3xl font-mono font-bold text-neutral-900 dark:text-white">
              {userStats.currentStreak} <span className="text-xs font-normal text-neutral-400">Days</span>
            </p>
            <span className="text-[11px] text-neutral-400 block">
              Longest: {userStats.longestStreak} days
            </span>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-1">
            <div className="flex items-center justify-between text-neutral-400 text-xs font-semibold uppercase">
              <span>Total Sessions</span>
              <TrendingUp className="w-4 h-4 text-indigo-500" />
            </div>
            <p className="text-3xl font-mono font-bold text-neutral-900 dark:text-white">
              {userStats.totalSessions}
            </p>
            <span className="text-[11px] text-neutral-400 block">
              {Math.round(userStats.totalPracticeSeconds / 60)} mins practiced
            </span>
          </div>
        </div>

        {/* 3. Main Grid: Daily Plan & Level Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Practice Plan */}
            <DailyPlanWidget plan={dailyPlan} onStartTask={handleStartDailyTask} />

            {/* Velocity History Chart */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    Net WPM Progression
                  </h3>
                  <p className="text-xs text-neutral-500">Historical velocity trend across recent attempts</p>
                </div>
                <Link to="/progress" className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
                  <span>Full Analytics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <WpmAccuracyChart sessions={recentSessions} />
            </div>
          </div>

          {/* Sidebar: Level Tier & Weakness Radar */}
          <div className="space-y-8">
            <LevelCard totalXp={userStats.totalXp} />

            <WeaknessRadar
              weakKeys={topWeakKeys}
              recommendedCategory={recommendedCategory}
            />
          </div>
        </div>

        {/* 4. Quick Mode Launcher Cards */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Dedicated Practice Hubs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/practice?mode=speed"
              className="p-5 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] hover:border-neutral-400 dark:hover:border-neutral-600 shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                Typing Speed & Flow
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                15s, 30s, 60s & endurance runs
              </p>
            </Link>

            <Link
              to="/practice?mode=english"
              className="p-5 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] hover:border-neutral-400 dark:hover:border-neutral-600 shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                English Vocabulary
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Expand practical lexicon & syntax
              </p>
            </Link>

            <Link
              to="/practice?mode=developer"
              className="p-5 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] hover:border-neutral-400 dark:hover:border-neutral-600 shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Terminal className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                Developer Scenarios
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                PR reviews, architecture, commits
              </p>
            </Link>

            <Link
              to="/coach"
              className="p-5 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] hover:border-neutral-400 dark:hover:border-neutral-600 shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                AI Coach Hub
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Custom prompt & drill generator
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
