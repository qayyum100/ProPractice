import React, { useState } from 'react'
import { Container } from '../components/layout/Container'
import { useAuth } from '../context/AuthContext'
import { Tabs } from '../components/ui/Tabs'
import { Medal, Crown, Flame, Award } from 'lucide-react'

import { useTypingSession } from '../context/TypingSessionContext'
import { storage, LeaderboardUser } from '../lib/storage'

export const LeaderboardPage: React.FC = () => {
  const { profile } = useAuth()
  const { userStats } = useTypingSession()
  const [filter, setFilter] = useState<string>('speed')

  const GLOBAL_LEADERBOARD = React.useMemo(() => {
    const seedUsers = storage.getLeaderboard()
    
    // Create the current user's leaderboard profile based on actual stats
    const me: LeaderboardUser = {
      rank: 0,
      userId: profile?.id || 'me',
      name: profile?.fullName || 'Anonymous',
      username: profile?.username || 'anonymous',
      wpm: userStats.topWpm || 0,
      accuracy: userStats.avgAccuracy || 0,
      level: userStats.currentLevel || 1,
      xp: userStats.totalXp || 0,
      streak: userStats.currentStreak || 0
    }
    
    // Only add if not already in the list (e.g. mock Qayyum might be replaced)
    let combined = seedUsers.filter(u => u.username !== me.username)
    combined.push(me)
    
    // Sort based on filter
    combined.sort((a, b) => {
      switch (filter) {
        case 'speed': return b.wpm - a.wpm
        case 'accuracy': return b.accuracy - a.accuracy
        case 'xp': return b.xp - a.xp
        case 'streak': return b.streak - a.streak
        default: return b.wpm - a.wpm
      }
    })
    
    // Reassign ranks
    return combined.map((u, i) => ({ ...u, rank: i + 1 }))
  }, [profile, userStats, filter])

  return (
    <div className="py-8 sm:py-12 space-y-10">
      <Container size="lg" className="space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Global Rankings & Hall of Fame
            </span>
            <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-0.5">
              Leaderboard
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Top typing velocity, precision consistency, and endurance masters across the global community.
            </p>
          </div>

          <Tabs
            tabs={[
              { id: 'speed', label: 'Top Speed' },
              { id: 'accuracy', label: 'Accuracy' },
              { id: 'xp', label: 'Total XP' },
              { id: 'streak', label: 'Streak' },
            ]}
            activeTab={filter}
            onChange={setFilter}
            size="sm"
          />
        </div>

        {/* Podium Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* Rank 2 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm flex flex-col items-center text-center space-y-3 order-2 md:order-1 mt-4">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center font-bold text-neutral-600 dark:text-neutral-300">
              <Medal className="w-6 h-6 text-neutral-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-400 uppercase">#2 Silver</span>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mt-0.5">
                {GLOBAL_LEADERBOARD[1].name}
              </h3>
              <p className="text-xs text-neutral-400 font-mono">@{GLOBAL_LEADERBOARD[1].username}</p>
            </div>
            <div className="text-2xl font-mono font-bold text-sky-600 dark:text-sky-400">
              {GLOBAL_LEADERBOARD[1].wpm} <span className="text-xs font-normal">WPM</span>
            </div>
          </div>

          {/* Rank 1 Crown */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-amber-500/10 to-transparent dark:from-amber-500/15 bg-white dark:bg-[#121216] border-2 border-amber-400 dark:border-amber-500/60 shadow-xl flex flex-col items-center text-center space-y-3 order-1 md:order-2">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/30">
              <Crown className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">
                #1 Global Champion
              </span>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mt-0.5">
                {GLOBAL_LEADERBOARD[0].name}
              </h3>
              <p className="text-xs text-neutral-400 font-mono">@{GLOBAL_LEADERBOARD[0].username}</p>
            </div>
            <div className="text-4xl font-mono font-extrabold text-amber-500 tracking-tight">
              {GLOBAL_LEADERBOARD[0].wpm} <span className="text-sm font-normal">WPM</span>
            </div>
            <span className="text-xs text-neutral-500 font-mono">
              {GLOBAL_LEADERBOARD[0].accuracy}% Acc • Lvl {GLOBAL_LEADERBOARD[0].level}
            </span>
          </div>

          {/* Rank 3 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm flex flex-col items-center text-center space-y-3 order-3 mt-8">
            <div className="w-12 h-12 rounded-2xl bg-amber-900/20 text-amber-700 flex items-center justify-center font-bold">
              <Award className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase">#3 Bronze</span>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mt-0.5">
                {GLOBAL_LEADERBOARD[2].name}
              </h3>
              <p className="text-xs text-neutral-400 font-mono">@{GLOBAL_LEADERBOARD[2].username}</p>
            </div>
            <div className="text-2xl font-mono font-bold text-sky-600 dark:text-sky-400">
              {GLOBAL_LEADERBOARD[2].wpm} <span className="text-xs font-normal">WPM</span>
            </div>
          </div>
        </div>

        {/* Complete Standings Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-400 uppercase font-semibold text-xs">
                  <th className="py-3 px-3">Rank</th>
                  <th className="py-3 px-3">Practitioner</th>
                  <th className="py-3 px-3">Top Speed</th>
                  <th className="py-3 px-3">Accuracy</th>
                  <th className="py-3 px-3">Level</th>
                  <th className="py-3 px-3">Streak</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-xs sm:text-sm">
                {GLOBAL_LEADERBOARD.map((u) => {
                  const isMe = u.userId === (profile?.id || 'me')
                  return (
                    <tr
                      key={u.userId}
                      className={`hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40 transition-colors ${
                        isMe ? 'bg-sky-50/50 dark:bg-sky-950/20 font-semibold border-l-2 border-sky-500' : ''
                      }`}
                    >
                      <td className="py-3.5 px-3 font-mono font-bold text-neutral-500">
                        #{u.rank}
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-2">
                          <span className="text-neutral-900 dark:text-white">
                            {u.name} {isMe && '(You)'}
                          </span>
                          <span className="text-xs text-neutral-400 font-mono">@{u.username}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 font-mono font-bold text-sky-600 dark:text-sky-400">
                        {u.wpm} WPM
                      </td>
                      <td className="py-3.5 px-3 font-mono text-neutral-600 dark:text-neutral-300">
                        {u.accuracy}%
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold">
                          Lvl {u.level}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 font-mono text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 fill-current" />
                        <span>{u.streak}d</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  )
}
