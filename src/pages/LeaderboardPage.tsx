import React, { useState } from 'react'
import { Container } from '../components/layout/Container'
import { useAuth } from '../context/AuthContext'
import { Tabs } from '../components/ui/Tabs'
import { Medal, Crown, Flame, Award } from 'lucide-react'

interface LeaderboardUser {
  rank: number
  userId: string
  name: string
  username: string
  wpm: number
  accuracy: number
  level: number
  xp: number
  streak: number
}

const GLOBAL_LEADERBOARD: LeaderboardUser[] = [
  { rank: 1, userId: 'u1', name: 'Marcus Vance', username: 'mvance', wpm: 124, accuracy: 99.4, level: 10, xp: 24500, streak: 42 },
  { rank: 2, userId: 'u2', name: 'Elena Rostova', username: 'elena_r', wpm: 118, accuracy: 98.9, level: 9, xp: 19800, streak: 31 },
  { rank: 3, userId: 'u3', name: 'Devon Thorne', username: 'dthorne', wpm: 112, accuracy: 99.1, level: 9, xp: 18200, streak: 28 },
  { rank: 4, userId: 'u4', name: 'Qayyum Razac', username: 'qayyum', wpm: 84, accuracy: 98.2, level: 6, xp: 4200, streak: 3 },
  { rank: 5, userId: 'u5', name: 'Samantha Wu', username: 'sam_wu', wpm: 79, accuracy: 97.5, level: 5, xp: 3400, streak: 12 },
  { rank: 6, userId: 'u6', name: 'Lucas Meyer', username: 'lmeyer', wpm: 76, accuracy: 96.8, level: 4, xp: 2800, streak: 7 },
  { rank: 7, userId: 'u7', name: 'Aria Patel', username: 'aria_p', wpm: 72, accuracy: 98.0, level: 4, xp: 2200, streak: 15 },
]

export const LeaderboardPage: React.FC = () => {
  const { profile } = useAuth()
  const [filter, setFilter] = useState<string>('speed')

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
                  const isMe = u.username === (profile?.username || 'qayyum')
                  return (
                    <tr
                      key={u.userId}
                      className={`hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40 transition-colors ${
                        isMe ? 'bg-sky-50/50 dark:bg-sky-950/20 font-semibold' : ''
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
