import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'
import { useTypingSession } from '../../context/TypingSessionContext'
import {
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Flame,
  Zap,
  Menu,
  X,
  Compass,
  User as UserIcon,
  LogOut,
  Trophy,
  BarChart2,
  Bot,
  Swords,
  LayoutDashboard,
  Code2,
  ChevronRight,
  Sparkles
} from 'lucide-react'

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()
  const { profile, logout } = useAuth()
  const { userStats, settings, updateSettings } = useTypingSession()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)

  // Auto-close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setUserDropdownOpen(false)
  }, [location.pathname])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
        setUserDropdownOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navLinks = [
    { label: 'Practice', path: '/practice', icon: <Compass className="w-4 h-4" /> },
    { label: 'AI Coach', path: '/coach', icon: <Bot className="w-4 h-4" /> },
    { label: 'Challenges', path: '/challenges', icon: <Swords className="w-4 h-4" /> },
    { label: 'Progress', path: '/progress', icon: <BarChart2 className="w-4 h-4" /> },
    { label: 'Leaderboard', path: '/leaderboard', icon: <Trophy className="w-4 h-4" /> },
  ]

  const extraMobileLinks = [
    { label: 'Custom Tests', path: '/custom-tests', icon: <Code2 className="w-4 h-4" /> },
    { label: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'Achievements', path: '/achievements', icon: <Trophy className="w-4 h-4" /> },
  ]

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 glass-nav transition-colors bg-white/80 dark:bg-[#0a0a0c]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-6 lg:gap-8 min-w-0">
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-8 h-8 rounded-xl bg-neutral-900 dark:bg-white flex items-center justify-center text-white dark:text-neutral-900 font-bold text-sm tracking-tight transition-transform group-hover:scale-105 shadow-sm">
                P
              </div>
              <span className="font-bold text-base sm:text-lg tracking-tight text-neutral-900 dark:text-white flex items-center gap-1.5">
                Practice
                <span className="hidden xs:inline-block px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 rounded-md">
                  Pro
                </span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    isActive(link.path)
                      ? 'text-neutral-900 dark:text-white bg-neutral-100 dark:bg-[#1c1c24] shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-[#141418]'
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Quick Controls, Telemetry & Mobile Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Streak Badge */}
            <Link
              to="/progress"
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 text-amber-700 dark:text-amber-400 text-xs font-semibold hover:opacity-80 transition-opacity"
              title="Daily Practice Streak"
            >
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 shrink-0" />
              <span className="tabular-nums">{userStats.currentStreak}d</span>
            </Link>

            {/* Level Pill (hidden on very small screens, visible on md+) */}
            <Link
              to="/achievements"
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 border border-sky-200/60 dark:border-sky-800/40 text-sky-700 dark:text-sky-300 text-xs font-semibold hover:opacity-80 transition-opacity"
              title="Current Mastery Level"
            >
              <Zap className="w-3.5 h-3.5 fill-sky-500 text-sky-500 shrink-0" />
              <span>Lvl {userStats.currentLevel}</span>
            </Link>

            {/* Sound FX Toggle (hidden on mobile, inside mobile drawer) */}
            <button
              onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
              className="hidden sm:flex p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title={settings.soundEnabled ? 'Disable Mechanical Sound' : 'Enable Mechanical Sound'}
              aria-label="Toggle Sound"
            >
              {settings.soundEnabled ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4 text-neutral-400" />
              )}
            </button>

            {/* Theme Toggle (Always visible) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
            </button>

            {/* Desktop Auth Buttons / User Profile */}
            {profile ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1 rounded-full border border-neutral-200 dark:border-neutral-700 hover:ring-2 hover:ring-sky-500/30 transition-all cursor-pointer"
                  title={profile.fullName || profile.username}
                  aria-expanded={userDropdownOpen}
                >
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.username}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-sky-100 dark:bg-sky-950/60 border border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-300 flex items-center justify-center text-xs font-bold">
                      {(profile.fullName || profile.username || 'P').charAt(0).toUpperCase()}
                    </div>
                  )}
                </button>

                {userDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setUserDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#18181f] border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl py-2 z-50 animate-slide-up">
                      <div className="px-4 py-2 border-b border-neutral-100 dark:border-neutral-800">
                        <p className="text-sm font-semibold text-neutral-900 dark:text-white truncate">
                          {profile.fullName || 'Practitioner'}
                        </p>
                        <p className="text-xs text-neutral-500 truncate">
                          @{profile.username || 'user'} • Level {userStats.currentLevel}
                        </p>
                      </div>

                      <Link
                        to="/dashboard"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-[#23232a]"
                      >
                        <LayoutDashboard className="w-4 h-4 text-neutral-400" />
                        <span>Dashboard</span>
                      </Link>

                      <Link
                        to="/profile"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-[#23232a]"
                      >
                        <UserIcon className="w-4 h-4 text-neutral-400" />
                        <span>My Profile</span>
                      </Link>

                      <Link
                        to="/achievements"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-[#23232a]"
                      >
                        <Trophy className="w-4 h-4 text-neutral-400" />
                        <span>Achievements</span>
                      </Link>

                      <div className="border-t border-neutral-100 dark:border-neutral-800 my-1" />

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false)
                          logout()
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-neutral-100 dark:hover:bg-[#23232a] cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold hover:opacity-90 transition-opacity shadow-xs"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 transition-transform duration-200 rotate-90 scale-110" />
              ) : (
                <Menu className="w-5 h-5 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Slide-Down Full Overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 lg:hidden flex flex-col bg-white/95 dark:bg-[#0a0a0c]/95 backdrop-blur-2xl animate-fade-in overflow-y-auto">
          <div className="flex-1 px-4 py-5 space-y-5 max-w-lg mx-auto w-full">
            {/* User Info / Profile Card in Mobile Menu */}
            {profile ? (
              <div className="p-3.5 rounded-2xl bg-neutral-100/80 dark:bg-[#141418] border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.username}
                      className="w-10 h-10 rounded-xl object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center font-bold text-sm shrink-0">
                      {(profile.fullName || profile.username || 'P').charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-neutral-900 dark:text-white truncate">
                      {profile.fullName || profile.username}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                      Level {userStats.currentLevel} • {userStats.currentStreak} Day Streak
                    </p>
                  </div>
                </div>
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium hover:opacity-80"
                >
                  Edit
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2.5 p-1">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-center text-sm font-semibold rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-center text-sm font-semibold rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm transition-opacity hover:opacity-90"
                >
                  Get Started Free
                </Link>
              </div>
            )}

            {/* Navigation Section */}
            <div className="space-y-1">
              <div className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Main Navigation
              </div>
              {navLinks.map((link) => {
                const active = isActive(link.path)
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? 'text-neutral-900 dark:text-white bg-neutral-100 dark:bg-[#18181f] font-semibold'
                        : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-[#141418]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg ${active ? 'bg-sky-500 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400'}`}>
                        {link.icon}
                      </div>
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${active ? 'text-sky-500' : 'text-neutral-400'}`} />
                  </Link>
                )
              })}
            </div>

            {/* Extra Features Section */}
            <div className="space-y-1 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
              <div className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Tools & Stats
              </div>
              {extraMobileLinks.map((link) => {
                const active = isActive(link.path)
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? 'text-neutral-900 dark:text-white bg-neutral-100 dark:bg-[#18181f] font-semibold'
                        : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-[#141418]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                        {link.icon}
                      </div>
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </Link>
                )
              })}
            </div>

            {/* Quick Settings & Controls */}
            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 space-y-2">
              <div className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Quick Preferences
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {/* Sound FX Button */}
                <button
                  onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                    settings.soundEnabled
                      ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300'
                      : 'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-500'
                  }`}
                >
                  {settings.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  <span>Sound {settings.soundEnabled ? 'ON' : 'OFF'}</span>
                </button>

                {/* Theme Switcher Button */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-xs font-semibold"
                >
                  {isDark ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-neutral-600" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>

              {/* Sign Out Button (if logged in) */}
              {profile && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    logout()
                  }}
                  className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 border border-red-200/60 dark:border-red-900/40 hover:bg-red-100 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out of Account</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
