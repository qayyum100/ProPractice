import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { useAuth } from '../context/AuthContext'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Lock, Mail, User, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

export const SignupPage: React.FC = () => {
  const { signup, isLoading } = useAuth()
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !fullName) {
      setError('Please fill in all required fields')
      return
    }
    try {
      await signup(email, password, fullName)
      navigate('/assessment')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to create account')
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
            Create Your Account
          </h1>
          <p className="text-xs text-neutral-500 max-w-xs mx-auto">
            Get calibrated with our initial assessment and unlock tailored AI coaching.
          </p>
        </div>

        {/* Value Prop Micro Strip */}
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-neutral-500 font-medium">
          <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-neutral-100 dark:bg-[#14141a]">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>AI Coach</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-neutral-100 dark:bg-[#14141a]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Real Analytics</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-neutral-100 dark:bg-[#14141a]">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
            <span>100% Free</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-600 dark:text-red-400 font-medium">
              {error}
            </div>
          )}

          <Input
            label="Full Name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Alex Morgan"
            icon={<User className="w-4 h-4" />}
            required
          />

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
            Create Account & Start Assessment
          </Button>

          <p className="text-xs text-center text-neutral-500 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-sky-600 dark:text-sky-400 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </Container>
    </div>
  )
}
