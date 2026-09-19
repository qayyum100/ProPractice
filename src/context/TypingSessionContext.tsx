import React, { createContext, useContext, useState, useEffect } from 'react'
import { CompletedSessionResult, PracticeSettings } from '../types/typing'
import { UserStatsState } from '../types/gamification'
import { storage } from '../lib/storage'
import { soundFx } from '../lib/sound'
import { calculateSessionXp, evaluateLevel, checkNewAchievements, updateStreak } from '../core/xpCalculator'
import confetti from 'canvas-confetti'

interface TypingSessionContextType {
  settings: PracticeSettings
  userStats: UserStatsState
  recentSessions: CompletedSessionResult[]
  latestResult: CompletedSessionResult | null
  activeNotification: { title: string; message: string; icon?: string } | null
  updateSettings: (newSettings: Partial<PracticeSettings>) => void
  recordCompletedSession: (session: CompletedSessionResult) => CompletedSessionResult
  clearLatestResult: () => void
  dismissNotification: () => void
}

const TypingSessionContext = createContext<TypingSessionContextType | undefined>(undefined)

export const TypingSessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<PracticeSettings>(() => storage.getSettings())
  const [userStats, setUserStats] = useState<UserStatsState>(() => storage.getStats())
  const [recentSessions, setRecentSessions] = useState<CompletedSessionResult[]>(() => storage.getRecentSessions())
  const [latestResult, setLatestResult] = useState<CompletedSessionResult | null>(() => {
    const list = storage.getRecentSessions()
    return list.length > 0 ? list[0] : null
  })
  const [activeNotification, setActiveNotification] = useState<{ title: string; message: string; icon?: string } | null>(null)

  useEffect(() => {
    soundFx.setEnabled(settings.soundEnabled)
  }, [settings.soundEnabled])

  const updateSettings = (newSettings: Partial<PracticeSettings>) => {
    const updated = storage.saveSettings(newSettings)
    setSettings(updated)
  }

  const dismissNotification = () => {
    setActiveNotification(null)
  }

  const recordCompletedSession = (sessionData: CompletedSessionResult): CompletedSessionResult => {
    // 1. Calculate earned XP
    const xpEarned = calculateSessionXp({
      netWpm: sessionData.netWpm,
      accuracy: sessionData.accuracy,
      durationSeconds: sessionData.durationSeconds,
      category: sessionData.category
    })

    // 2. Check for achievements
    const newlyUnlocked = checkNewAchievements(userStats, sessionData)

    const finalSession: CompletedSessionResult = {
      ...sessionData,
      xpEarned,
      unlockedAchievements: newlyUnlocked
    }

    // 3. Update Streak & Stats
    const { newStreak } = updateStreak(userStats.lastPracticeDate, userStats.currentStreak)
    const newTotalXp = userStats.totalXp + xpEarned
    const { currentLevel, tier } = evaluateLevel(newTotalXp)
    const newTotalSessions = userStats.totalSessions + 1
    const newTotalSeconds = userStats.totalPracticeSeconds + Math.round(sessionData.durationSeconds)
    const newTopWpm = Math.max(userStats.topWpm, sessionData.netWpm)
    const newAvgWpm = Math.round(((userStats.avgWpm * userStats.totalSessions) + sessionData.netWpm) / newTotalSessions)
    const newAvgAcc = Math.round((((userStats.avgAccuracy * userStats.totalSessions) + sessionData.accuracy) / newTotalSessions) * 10) / 10

    // Check level up
    if (currentLevel > userStats.currentLevel) {
      soundFx.playSuccessFanfare()
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      })
      setActiveNotification({
        title: `Level Up! Level ${currentLevel}`,
        message: `You unlocked the "${tier.title}" tier!`
      })
    } else if (newlyUnlocked.length > 0) {
      soundFx.playSuccessFanfare()
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      })
      setActiveNotification({
        title: 'Achievement Unlocked!',
        message: `Unlocked: ${newlyUnlocked.join(', ')}`
      })
    }

    const updatedPersonalBests = { ...userStats.personalBests }
    const testTypeKey = `${sessionData.durationSeconds}s`
    if (!updatedPersonalBests[testTypeKey] || sessionData.netWpm > updatedPersonalBests[testTypeKey].wpm) {
      updatedPersonalBests[testTypeKey] = {
        wpm: sessionData.netWpm,
        accuracy: sessionData.accuracy,
        date: new Date().toISOString().split('T')[0]
      }
    }

    const updatedStats: UserStatsState = {
      totalXp: newTotalXp,
      currentLevel,
      currentStreak: newStreak,
      longestStreak: Math.max(userStats.longestStreak, newStreak),
      lastPracticeDate: new Date().toISOString().split('T')[0],
      totalSessions: newTotalSessions,
      totalPracticeSeconds: newTotalSeconds,
      avgWpm: newAvgWpm,
      topWpm: newTopWpm,
      avgAccuracy: newAvgAcc,
      unlockedAchievementIds: [...userStats.unlockedAchievementIds, ...newlyUnlocked],
      personalBests: updatedPersonalBests
    }

    setUserStats(updatedStats)
    storage.saveStats(updatedStats)
    storage.saveSession(finalSession)
    setRecentSessions([finalSession, ...recentSessions].slice(0, 50))
    setLatestResult(finalSession)

    return finalSession
  }

  const clearLatestResult = () => {
    setLatestResult(null)
  }

  return (
    <TypingSessionContext.Provider
      value={{
        settings,
        userStats,
        recentSessions,
        latestResult,
        activeNotification,
        updateSettings,
        recordCompletedSession,
        clearLatestResult,
        dismissNotification
      }}
    >
      {children}
    </TypingSessionContext.Provider>
  )
}

export const useTypingSession = () => {
  const context = useContext(TypingSessionContext)
  if (!context) throw new Error('useTypingSession must be used within TypingSessionProvider')
  return context
}
