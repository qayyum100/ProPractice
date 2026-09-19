import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { useAuth } from '../context/AuthContext'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Lock, Mail, ArrowRight, Zap, ShieldCheck } from 'lucide-react'

export const LoginPage: React.FC = () => {
  const { login, isLoading } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('Please enter your email address')
      return
    }
    try {
      await login(email, password)
      navigate('/dashboard')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to sign in')
    }
  }

  const handleQuickDemoLogin = async (demoEmail: string) => {
    setEmail(demoEmail)
    setPassword('demo-password-123')
    try {
      await login(demoEmail, 'demo-password-123')
      navigate('/dashboard')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to sign in')
    }
  }

  return (
    <div className="py-12 sm:py-20 animate-fade-in">
      <Container size="sm" className="space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold flex items-center justify-center mx-auto text-lg shadow-md">
            P
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Sign in to Practice
          </h1>
          <p className="text-xs text-neutral-500 max-w-xs mx-auto">
            Resume your personalized typing cadence & English curriculum streak.
          </p>
        </div>

        {/* Demo Fast Logins Banner */}
        <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/20 border border-sky-200/80 dark:border-sky-800/40 space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700 dark:text-sky-300">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>Instant Demo Sign-In</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('prodigy@practice.app')}
              className="px-3 py-2 rounded-xl bg-white dark:bg-[#16161c] border border-sky-200 dark:border-sky-800 text-left hover:border-sky-400 transition-all text-xs"
            >
              <div className="font-semibold text-neutral-900 dark:text-white">Pro Engineer</div>
              <div className="text-[10px] text-neutral-400 font-mono">112 WPM · Level 9</div>
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('learner@practice.app')}
              className="px-3 py-2 rounded-xl bg-white dark:bg-[#16161c] border border-sky-200 dark:border-sky-800 text-left hover:border-sky-400 transition-all text-xs"
            >
              <div className="font-semibold text-neutral-900 dark:text-white">Growth Learner</div>
              <div className="text-[10px] text-neutral-400 font-mono">68 WPM · Level 4</div>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-600 dark:text-red-400 font-medium">
              {error}
            </div>
          )}

          <Input
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            icon={<Mail className="w-4 h-4" />}
            required
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            icon={<Lock className="w-4 h-4" />}
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            className="w-full mt-2"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Sign In
          </Button>

          <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-400 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Encrypted local session storage</span>
          </div>

          <p className="text-xs text-center text-neutral-500 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            Don't have an account yet?{' '}
            <Link to="/signup" className="font-semibold text-sky-600 dark:text-sky-400 hover:underline">
              Create account
            </Link>
          </p>
        </form>
      </Container>
    </div>
  )
}
