import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { TypingSessionProvider, useTypingSession } from './context/TypingSessionContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { LandingPage } from './pages/LandingPage'
import { AssessmentPage } from './pages/AssessmentPage'
import { DashboardPage } from './pages/DashboardPage'
import { PracticeHubPage } from './pages/PracticeHubPage'
import { SessionResultPage } from './pages/SessionResultPage'
import { ProgressAnalyticsPage } from './pages/ProgressAnalyticsPage'
import { AICoachPage } from './pages/AICoachPage'
import { ChallengesPage } from './pages/ChallengesPage'
import { LiveRoomPage } from './pages/LiveRoomPage'
import { CustomTestsPage } from './pages/CustomTestsPage'
import { CustomTestBuilderPage } from './pages/CustomTestBuilderPage'
import { LeaderboardPage } from './pages/LeaderboardPage'
import { AchievementsPage } from './pages/AchievementsPage'
import { ProfilePage } from './pages/ProfilePage'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { ColorBends } from './components/ColorBends'
import { X, Sparkles } from 'lucide-react'

const NotificationToast: React.FC = () => {
  const { activeNotification, dismissNotification } = useTypingSession()
  if (!activeNotification) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-4 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-2xl border border-neutral-700 animate-slide-up">
      <div className="w-8 h-8 rounded-xl bg-amber-400 text-neutral-900 flex items-center justify-center font-bold">
        <Sparkles className="w-4 h-4" />
      </div>
      <div>
        <h4 className="text-xs font-bold tracking-tight">{activeNotification.title}</h4>
        <p className="text-[11px] opacity-80">{activeNotification.message}</p>
      </div>
      <button
        onClick={dismissNotification}
        className="p-1 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 ml-2"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TypingSessionProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col justify-between bg-transparent text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors relative">
              <ColorBends
                color="#A855F7"
                speed={0.2}
                frequency={1.0}
                noise={0.15}
                bandWidth={0.13}
                rotation={90}
                fadeTop={0.75}
                iterations={1}
                intensity={1.3}
              />
              <Header />
              <main className="flex-1 relative z-10">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/practice" element={<PracticeHubPage />} />
                  <Route path="/result" element={<SessionResultPage />} />
                  <Route path="/assessment" element={<AssessmentPage />} />
                  <Route path="/progress" element={<ProgressAnalyticsPage />} />
                  <Route path="/coach" element={<AICoachPage />} />
                  <Route path="/challenges" element={<ChallengesPage />} />
                  <Route path="/rooms/:code" element={<LiveRoomPage />} />
                  <Route path="/custom-tests" element={<CustomTestsPage />} />
                  <Route path="/custom-tests/create" element={<CustomTestBuilderPage />} />
                  <Route path="/leaderboard" element={<LeaderboardPage />} />
                  <Route path="/achievements" element={<AchievementsPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                </Routes>
              </main>
              <Footer />
              <NotificationToast />
            </div>
          </BrowserRouter>
        </TypingSessionProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
