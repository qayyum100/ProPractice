import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { TypingSessionProvider, useTypingSession } from './context/TypingSessionContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ErrorBoundary } from './components/layout/ErrorBoundary'
import { ColorBends } from './components/ColorBends'
import { GlowCursor } from './components/GlowCursor'
import { X, Sparkles, Loader2 } from 'lucide-react'

// Lazy loaded page components
const LandingPage = React.lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })))
const DashboardPage = React.lazy(() => import('./pages/DashboardPage').then(module => ({ default: module.DashboardPage })))
const PracticeHubPage = React.lazy(() => import('./pages/PracticeHubPage').then(module => ({ default: module.PracticeHubPage })))
const SessionResultPage = React.lazy(() => import('./pages/SessionResultPage').then(module => ({ default: module.SessionResultPage })))
const AssessmentPage = React.lazy(() => import('./pages/AssessmentPage').then(module => ({ default: module.AssessmentPage })))
const ProgressAnalyticsPage = React.lazy(() => import('./pages/ProgressAnalyticsPage').then(module => ({ default: module.ProgressAnalyticsPage })))
const AICoachPage = React.lazy(() => import('./pages/AICoachPage').then(module => ({ default: module.AICoachPage })))
const ChallengesPage = React.lazy(() => import('./pages/ChallengesPage').then(module => ({ default: module.ChallengesPage })))
const LiveRoomPage = React.lazy(() => import('./pages/LiveRoomPage').then(module => ({ default: module.LiveRoomPage })))
const CustomTestsPage = React.lazy(() => import('./pages/CustomTestsPage').then(module => ({ default: module.CustomTestsPage })))
const CustomTestBuilderPage = React.lazy(() => import('./pages/CustomTestBuilderPage').then(module => ({ default: module.CustomTestBuilderPage })))
const LeaderboardPage = React.lazy(() => import('./pages/LeaderboardPage').then(module => ({ default: module.LeaderboardPage })))
const AchievementsPage = React.lazy(() => import('./pages/AchievementsPage').then(module => ({ default: module.AchievementsPage })))
const ProfilePage = React.lazy(() => import('./pages/ProfilePage').then(module => ({ default: module.ProfilePage })))
const LoginPage = React.lazy(() => import('./pages/LoginPage').then(module => ({ default: module.LoginPage })))
const SignupPage = React.lazy(() => import('./pages/SignupPage').then(module => ({ default: module.SignupPage })))

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
    <ErrorBoundary>
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
              <main className="flex-1 relative z-10 flex flex-col">
                <Suspense fallback={
                  <div className="flex-1 flex items-center justify-center min-h-[50vh]">
                    <div className="flex items-center gap-2 text-neutral-400 font-mono text-sm animate-pulse">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Loading Module...</span>
                    </div>
                  </div>
                }>
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
                </Suspense>
              </main>
              <Footer />
              <NotificationToast />
              
              <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
                <GlowCursor
                  color="#67E8F9"
                  secondaryColor="#A78BFA"
                  trailLength={40}
                  trailWidth={8}
                  trailTaper={0.8}
                  followSpeed={0.16}
                  glowIntensity={1.9}
                  glowSpread={1.2}
                  hotspot={0.65}
                  brightness={1.25}
                  opacity={1}
                  pulseSpeed={1.1}
                  noiseStrength={0.035}
                  idleFade
                  idleTimeout={700}
                  fadeDuration={900}
                  blendMode="screen"
                />
              </div>
            </div>
          </BrowserRouter>
        </TypingSessionProvider>
      </AuthProvider>
    </ThemeProvider>
  </ErrorBoundary>
  )
}

export default App
