import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { useAuth, UserProfile } from '../context/AuthContext'
import { useTypingSession } from '../context/TypingSessionContext'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Check, Save, User as UserIcon, ArrowRight, ShieldCheck } from 'lucide-react'

const ProfileForm: React.FC<{
  profile: UserProfile
  userLevel: number
  onSave: (data: Partial<UserProfile>) => Promise<void>
}> = ({ profile, userLevel, onSave }) => {
  const [fullName, setFullName] = useState<string>(profile.fullName || '')
  const [username, setUsername] = useState<string>(profile.username || '')
  const [primaryGoal, setPrimaryGoal] = useState<string>(profile.primaryGoal || 'increase_speed')
  const [isDeveloper, setIsDeveloper] = useState<boolean>(profile.isDeveloper ?? true)
  const [dailyTarget, setDailyTarget] = useState<number>(profile.dailyTargetMinutes || 15)
  const [saved, setSaved] = useState<boolean>(false)
  const [isSaving, setIsSaving] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    try {
      await onSave({
        fullName: fullName.trim(),
        username: username.trim(),
        primaryGoal,
        isDeveloper,
        dailyTargetMinutes: dailyTarget
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    } finally {
      setIsSaving(false)
    }
  }

  const avatarInitial = (fullName || username || 'P').charAt(0).toUpperCase()

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
      <div className="flex items-center gap-4 pb-4 border-b border-neutral-100 dark:border-neutral-800">
        <div className="w-16 h-16 rounded-2xl bg-sky-100 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center font-bold text-2xl text-sky-700 dark:text-sky-300">
          {profile.avatarUrl ? (
            <img src={profile.avatarUrl} alt={username} className="w-full h-full rounded-2xl object-cover" />
          ) : (
            avatarInitial
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
            {fullName || 'Practitioner'}
          </h3>
          <p className="text-xs text-neutral-400 font-mono">
            @{username || 'user'} • {profile.email} • Level {userLevel}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <Input
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
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
        {saved ? (
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <Check className="w-4 h-4" />
            <span>Profile updated successfully</span>
          </span>
        ) : (
          <span className="text-xs text-neutral-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Settings saved securely</span>
          </span>
        )}
        <div className="ml-auto">
          <Button type="submit" variant="primary" isLoading={isSaving} icon={<Save className="w-4 h-4" />}>
            Save Changes
          </Button>
        </div>
      </div>
    </form>
  )
}

export const ProfilePage: React.FC = () => {
  const { profile, updateProfile, isAuthenticated } = useAuth()
  const { userStats } = useTypingSession()

  if (!isAuthenticated || !profile) {
    return (
      <div className="py-16 sm:py-24 animate-fade-in">
        <Container size="sm" className="space-y-6 text-center">
          <div className="w-16 h-16 rounded-3xl bg-neutral-100 dark:bg-[#181820] flex items-center justify-center mx-auto text-neutral-500">
            <UserIcon className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Sign In to View Profile
            </h2>
            <p className="text-sm text-neutral-500 max-w-sm mx-auto">
              Access your personalized learning settings, goals, and telemetry statistics across devices.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Link to="/login">
              <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="secondary">
                Create Free Account
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="py-8 sm:py-12 space-y-8 animate-fade-in">
      <Container size="md" className="space-y-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Practitioner Profile & Settings
          </h1>
          <p className="text-sm text-neutral-500">
            Manage your personal learning goals, daily target minutes, and profile display.
          </p>
        </div>

        <ProfileForm
          key={profile.id}
          profile={profile}
          userLevel={userStats.currentLevel}
          onSave={updateProfile}
        />
      </Container>
    </div>
  )
}
