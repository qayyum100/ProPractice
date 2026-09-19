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

interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  session: Session | null
  isLoading: boolean
  isLiveSupabase: boolean
  login: (email: string, password?: string) => Promise<void>
  signup: (email: string, password?: string, fullName?: string) => Promise<void>
  logout: () => Promise<void>
  updateProfile: (data: Partial<UserProfile>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const DEFAULT_MOCK_PROFILE: UserProfile = {
  id: 'usr_local_qayyum',
  email: 'qayyum@practice.dev',
  username: 'qayyum',
  fullName: 'Qayyum Razac',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  primaryGoal: 'increase_speed',
  isDeveloper: true,
  dailyTargetMinutes: 20,
  experienceLevel: 'intermediate',
  englishLevel: 'Level 3'
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('practice_mock_profile')
      return saved ? JSON.parse(saved) : DEFAULT_MOCK_PROFILE
    } catch {
      return DEFAULT_MOCK_PROFILE
    }
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchSupabaseProfile = useCallback(async (userId: string) => {
    if (!supabase) return
    try {
      const { data, error } = await (supabase as any)
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (!error && data) {
        setProfile({
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
        })
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
        }
      })

      return () => subscription.unsubscribe()
    }
  }, [fetchSupabaseProfile])

  const login = async (email: string, password?: string) => {
    setIsLoading(true)
    try {
      if (isSupabaseConfigured && supabase && password) {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
      } else {
        // Local mode login simulation
        const mock: UserProfile = {
          ...DEFAULT_MOCK_PROFILE,
          email,
          username: email.split('@')[0],
          fullName: email.split('@')[0]
        }
        setProfile(mock)
        localStorage.setItem('practice_mock_profile', JSON.stringify(mock))
      }
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (email: string, password?: string, fullName?: string) => {
    setIsLoading(true)
    try {
      if (isSupabaseConfigured && supabase && password) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: fullName } }
        })
        if (error) throw error
      } else {
        const mock: UserProfile = {
          ...DEFAULT_MOCK_PROFILE,
          email,
          username: email.split('@')[0],
          fullName: fullName || email.split('@')[0]
        }
        setProfile(mock)
        localStorage.setItem('practice_mock_profile', JSON.stringify(mock))
      }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut()
    }
    setUser(null)
    setSession(null)
  }

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (profile) {
      const updated = { ...profile, ...data }
      setProfile(updated)
      localStorage.setItem('practice_mock_profile', JSON.stringify(updated))

      if (isSupabaseConfigured && supabase && user) {
        await (supabase as any)
          .from('profiles')
          .update({
            full_name: updated.fullName,
            primary_goal: updated.primaryGoal,
            is_developer: updated.isDeveloper,
            daily_target_minutes: updated.dailyTargetMinutes,
            experience_level: updated.experienceLevel,
            english_level: updated.englishLevel
          })
          .eq('id', user.id)
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        session,
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
