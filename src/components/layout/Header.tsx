import React, { useState } from 'react'
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
  Swords
} from 'lucide-react'

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()
  const { profile, logout } = useAuth()
  const { userStats, settings, updateSettings } = useTypingSession()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)

  const navLinks = [
    { label: 'Practice', path: '/practice', icon: <Compass className="w-4 h-4" /> },
    { label: 'AI Coach', path: '/coach', icon: <Bot className="w-4 h-4" /> },
    { label: 'Challenges', path: '/challenges', icon: <Swords className="w-4 h-4" /> },
    { label: 'Progress', path: '/progress', icon: <BarChart2 className="w-4 h-4" /> },
    { label: 'Leaderboard', path: '/leaderboard', icon: <Trophy className="w-4 h-4" /> },
  ]

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 glass-nav transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-neutral-900 dark:bg-white flex items-center justify-center text-white dark:text-neutral-900 font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
              P
            </div>
            <span className="font-bold text-lg tracking-tight text-neutral-900 dark:text-white">
              Practice
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-neutral-900 dark:text-white bg-neutral-100 dark:bg-[#1c1c24]'
                    : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Telemetry, Quick Toggles & User Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Streak Badge */}
          <Link
            to="/progress"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 text-amber-700 dark:text-amber-400 text-xs font-semibold hover:opacity-80 transition-opacity"
            title="Daily Practice Streak"
          >
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{userStats.currentStreak}d</span>
          </Link>

          {/* Level Pill */}
          <Link
            to="/achievements"
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 border border-sky-200/60 dark:border-sky-800/40 text-sky-700 dark:text-sky-300 text-xs font-semibold hover:opacity-80 transition-opacity"
            title="Current Mastery Level"
          >
            <Zap className="w-3.5 h-3.5 fill-sky-500 text-sky-500" />
            <span>Lvl {userStats.currentLevel}</span>
          </Link>

          {/* Sound FX Toggle */}
          <button
            onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
            className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title={settings.soundEnabled ? 'Disable Mechanical Sound' : 'Enable Mechanical Sound'}
          >
            {settings.soundEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4 text-neutral-400" />
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* User Profile Avatar / Dropdown or Login / Signup buttons */}
          {profile ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 p-1 rounded-full border border-neutral-200 dark:border-neutral-700 hover:ring-2 hover:ring-sky-500/20 transition-all cursor-pointer"
                title={profile.fullName || profile.username}
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
                      <BarChart2 className="w-4 h-4" />
                      <span>Dashboard</span>
                    </Link>

                    <Link
                      to="/profile"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-[#23232a]"
                    >
                      <UserIcon className="w-4 h-4" />
                      <span>My Profile</span>
                    </Link>

                    <Link
                      to="/achievements"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-[#23232a]"
                    >
                      <Trophy className="w-4 h-4" />
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
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0c] px-4 py-3 space-y-2 animate-slide-up">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium ${
                  isActive(link.path)
                    ? 'text-neutral-900 dark:text-white bg-neutral-100 dark:bg-[#18181f]'
                    : 'text-neutral-500 dark:text-neutral-400'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
            {profile ? (
              <div className="space-y-1">
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-[#18181f]"
                >
                  <UserIcon className="w-4 h-4" />
                  <span>My Profile ({profile.fullName || profile.username})</span>
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    logout()
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-neutral-100 dark:hover:bg-[#18181f]"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-center text-xs font-semibold rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-center text-xs font-semibold rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
