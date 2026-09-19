import React, { useState } from 'react'
import { Container } from '../components/layout/Container'
import { useAuth } from '../context/AuthContext'
import { useTypingSession } from '../context/TypingSessionContext'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Check, Save } from 'lucide-react'

export const ProfilePage: React.FC = () => {
  const { profile, updateProfile } = useAuth()
  const { userStats } = useTypingSession()

  const [fullName, setFullName] = useState<string>(profile?.fullName || '')
  const [username, setUsername] = useState<string>(profile?.username || '')
  const [primaryGoal, setPrimaryGoal] = useState<string>(profile?.primaryGoal || 'increase_speed')
  const [isDeveloper, setIsDeveloper] = useState<boolean>(profile?.isDeveloper ?? true)
  const [dailyTarget, setDailyTarget] = useState<number>(profile?.dailyTargetMinutes || 15)
  const [saved, setSaved] = useState<boolean>(false)

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    await updateProfile({
      fullName,
      username,
      primaryGoal,
      isDeveloper,
      dailyTargetMinutes: dailyTarget
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="py-8 sm:py-12 space-y-8">
      <Container size="md" className="space-y-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Practitioner Profile & Settings
          </h1>
          <p className="text-sm text-neutral-500">
            Manage your personal learning goals, daily target minutes, and profile display.
          </p>
        </div>

        <form onSubmit={handleSave} className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
          <div className="flex items-center gap-4 pb-4 border-b border-neutral-100 dark:border-neutral-800">
            <div className="w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center font-bold text-xl text-neutral-600 dark:text-neutral-300">
              {profile?.avatarUrl ? (
                <img src={profile.avatarUrl} alt={username} className="w-full h-full rounded-full object-cover" />
              ) : (
                fullName.charAt(0).toUpperCase() || 'P'
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                {fullName || 'Practitioner'}
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                @{username} • Level {userStats.currentLevel}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
              Primary Learning Goal
            </label>
            <select
              value={primaryGoal}
              onChange={(e) => setPrimaryGoal(e.target.value)}
              className="w-full bg-neutral-50 dark:bg-[#18181f] border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500/30 transition-all"
            >
              <option value="increase_speed">Increase Typing Speed & Velocity</option>
              <option value="improve_accuracy">Flawless Neuromuscular Accuracy</option>
              <option value="developer_english">Developer English & Engineering Lexicon</option>
              <option value="business_english">Professional & Executive English</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
              Daily Target Practice (Minutes)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[10, 15, 20, 30].map((mins) => (
                <button
                  key={mins}
                  type="button"
                  onClick={() => setDailyTarget(mins)}
                  className={`py-2 text-xs font-mono font-semibold rounded-xl border transition-all ${
                    dailyTarget === mins
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-neutral-900 dark:border-white'
                      : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {mins} min
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="isDev"
              checked={isDeveloper}
              onChange={(e) => setIsDeveloper(e.target.checked)}
              className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500"
            />
            <label htmlFor="isDev" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
              Enable Developer English & Software Engineering Scenario Modes
            </label>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
            {saved && (
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>Profile updated successfully</span>
              </span>
            )}
            <div className="ml-auto">
              <Button type="submit" variant="primary" icon={<Save className="w-4 h-4" />}>
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  )
}
