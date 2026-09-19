import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { User, Session } from '@supabase/supabase-js'

export interface UserProfile {
  id: string
  email: string
  username: string
  fullName: string
  avatarUrl?: string
  primaryGoal: string
  isDeveloper: boolean
  dailyTargetMinutes: number
  experienceLevel: string
  englishLevel: string
}

export interface RegisteredAccount {
  id: string
  email: string
  password: string
  profile: UserProfile
  createdAt: string
}

interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  session: Session | null
  isAuthenticated: boolean
  isLoading: boolean
  isLiveSupabase: boolean
  login: (email: string, password?: string) => Promise<void>
  signup: (email: string, password?: string, fullName?: string) => Promise<void>
  logout: () => Promise<void>
  updateProfile: (data: Partial<UserProfile>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const SEED_ACCOUNTS: RegisteredAccount[] = [
  {
    id: 'usr_qayyum',
    email: 'qayyum@practice.dev',
    password: 'password123',
    profile: {
      id: 'usr_qayyum',
      email: 'qayyum@practice.dev',
      username: 'qayyum',
      fullName: 'Qayyum Razac',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      primaryGoal: 'increase_speed',
      isDeveloper: true,
      dailyTargetMinutes: 20,
      experienceLevel: 'advanced',
      englishLevel: 'Level 3'
    },
    createdAt: '2026-09-01T00:00:00.000Z'
  },
  {
    id: 'usr_prodigy',
    email: 'prodigy@practice.app',
    password: 'demo-password-123',
    profile: {
      id: 'usr_prodigy',
      email: 'prodigy@practice.app',
      username: 'alex_pro',
      fullName: 'Alex Vance',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      primaryGoal: 'developer_english',
      isDeveloper: true,
      dailyTargetMinutes: 30,
      experienceLevel: 'advanced',
      englishLevel: 'Level 4'
    },
    createdAt: '2026-09-05T00:00:00.000Z'
  },
  {
    id: 'usr_learner',
    email: 'learner@practice.app',
    password: 'demo-password-123',
    profile: {
      id: 'usr_learner',
      email: 'learner@practice.app',
      username: 'elena_g',
      fullName: 'Elena Growth',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      primaryGoal: 'improve_accuracy',
      isDeveloper: false,
      dailyTargetMinutes: 15,
      experienceLevel: 'intermediate',
      englishLevel: 'Level 2'
    },
    createdAt: '2026-09-10T00:00:00.000Z'
  }
]

function getStoredAccounts(): RegisteredAccount[] {
  try {
    const raw = localStorage.getItem('practice_registered_accounts')
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
      }
    }
  } catch (e) {
    console.error('Error reading accounts from storage', e)
  }
  // Initialize with seed accounts
  localStorage.setItem('practice_registered_accounts', JSON.stringify(SEED_ACCOUNTS))
  return SEED_ACCOUNTS
}

function saveStoredAccounts(accounts: RegisteredAccount[]) {
  try {
    localStorage.setItem('practice_registered_accounts', JSON.stringify(accounts))
  } catch (e) {
    console.error('Error saving accounts to storage', e)
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Initialize profile from active user session or null
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    try {
      const activeUser = localStorage.getItem('practice_active_user')
      if (activeUser) {
        return JSON.parse(activeUser)
      }
      // Check legacy key
      const legacy = localStorage.getItem('practice_mock_profile')
      if (legacy) {
        return JSON.parse(legacy)
      }
      // Default to Qayyum Razac if no active user session yet
      return SEED_ACCOUNTS[0].profile
    } catch {
      return SEED_ACCOUNTS[0].profile
    }
  })

  const fetchSupabaseProfile = useCallback(async (userId: string) => {
    if (!supabase) return
    try {
      const { data, error } = await (supabase as any)
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (!error && data) {
        const supProfile: UserProfile = {
          id: data.id,
          email: user?.email || '',
          username: data.username || 'Practitioner',
          fullName: data.full_name || 'Practitioner',
          avatarUrl: data.avatar_url || '',
          primaryGoal: data.primary_goal || 'increase_speed',
          isDeveloper: data.is_developer ?? true,
          dailyTargetMinutes: data.daily_target_minutes || 15,
          experienceLevel: data.experience_level || 'intermediate',
          englishLevel: data.english_level || 'Level 2'
        }
        setProfile(supProfile)
        localStorage.setItem('practice_active_user', JSON.stringify(supProfile))
      }
    } catch (e) {
      console.error('Error fetching Supabase profile', e)
    }
  }, [user])

  useEffect(() => {
    if (isSupabaseConfigured && supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
        setUser(session?.user ?? null)
        if (session?.user) {
          fetchSupabaseProfile(session.user.id)
        }
      })

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        if (session?.user) {
          fetchSupabaseProfile(session.user.id)
        } else {
          setProfile(null)
          localStorage.removeItem('practice_active_user')
        }
      })

      return () => subscription.unsubscribe()
    }
  }, [fetchSupabaseProfile])

  const login = async (email: string, password?: string) => {
    setIsLoading(true)
    const normalizedEmail = email.trim().toLowerCase()

    try {
      if (isSupabaseConfigured && supabase && password) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password
        })
        if (error) throw error
        if (data.user) {
          setUser(data.user)
          setSession(data.session)
        }
      } else {
        // Local Account Authentication
        const accounts = getStoredAccounts()
        const found = accounts.find(
          (a) => a.email.toLowerCase() === normalizedEmail
        )

        if (!found) {
          throw new Error('No account found with this email. Please check your spelling or sign up.')
        }

        if (password && found.password && found.password !== password) {
          throw new Error('Incorrect password. Please try again.')
        }

        setProfile(found.profile)
        localStorage.setItem('practice_active_user', JSON.stringify(found.profile))
      }
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (email: string, password?: string, fullName?: string) => {
    setIsLoading(true)
    const normalizedEmail = email.trim().toLowerCase()
    const cleanName = fullName?.trim() || normalizedEmail.split('@')[0]
    const cleanUsername = cleanName.toLowerCase().replace(/[^a-z0-9]/g, '_').slice(0, 15) || 'user'

    try {
      if (password && password.length < 6) {
        throw new Error('Password must be at least 6 characters long.')
      }

      if (isSupabaseConfigured && supabase && password) {
        const { data, error } = await supabase.auth.signUp({
          email: normalizedEmail,
          password,
          options: { data: { full_name: cleanName } }
        })
        if (error) throw error
        if (data.user) {
          setUser(data.user)
          setSession(data.session)
        }
      } else {
        // Local Account Registration
        const accounts = getStoredAccounts()
        const existing = accounts.find(
          (a) => a.email.toLowerCase() === normalizedEmail
        )

        if (existing) {
          throw new Error('An account with this email already exists. Please sign in instead.')
        }

        const newProfile: UserProfile = {
          id: `usr_local_${Date.now()}`,
          email: normalizedEmail,
          username: cleanUsername,
          fullName: cleanName,
          avatarUrl: '',
          primaryGoal: 'increase_speed',
          isDeveloper: true,
          dailyTargetMinutes: 20,
          experienceLevel: 'intermediate',
          englishLevel: 'Level 2'
        }

        const newAccount: RegisteredAccount = {
          id: newProfile.id,
          email: normalizedEmail,
          password: password || 'password123',
          profile: newProfile,
          createdAt: new Date().toISOString()
        }

        const updatedAccounts = [newAccount, ...accounts]
        saveStoredAccounts(updatedAccounts)

        setProfile(newProfile)
        localStorage.setItem('practice_active_user', JSON.stringify(newProfile))
      }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      if (isSupabaseConfigured && supabase) {
        await supabase.auth.signOut()
      }
      setUser(null)
      setSession(null)
      setProfile(null)
      localStorage.removeItem('practice_active_user')
      localStorage.removeItem('practice_mock_profile')
    } finally {
      setIsLoading(false)
    }
  }

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!profile) return

    const updated: UserProfile = { ...profile, ...data }
    setProfile(updated)
    localStorage.setItem('practice_active_user', JSON.stringify(updated))

    // Update in local accounts database
    const accounts = getStoredAccounts()
    const index = accounts.findIndex(
      (a) => a.id === updated.id || a.email.toLowerCase() === updated.email.toLowerCase()
    )
    if (index !== -1) {
      accounts[index].profile = updated
      saveStoredAccounts(accounts)
    }

    // Update Supabase if active
    if (isSupabaseConfigured && supabase && user) {
      try {
        await (supabase as any)
          .from('profiles')
          .update({
            full_name: updated.fullName,
            username: updated.username,
            primary_goal: updated.primaryGoal,
            is_developer: updated.isDeveloper,
            daily_target_minutes: updated.dailyTargetMinutes,
            experience_level: updated.experienceLevel,
            english_level: updated.englishLevel
          })
          .eq('id', user.id)
      } catch (e) {
        console.error('Error updating Supabase profile', e)
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        session,
        isAuthenticated: Boolean(profile),
        isLoading,
        isLiveSupabase: isSupabaseConfigured,
        login,
        signup,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
