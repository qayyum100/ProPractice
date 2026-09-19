import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Command } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#070709] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-neutral-900 dark:bg-white flex items-center justify-center text-white dark:text-neutral-900 font-bold text-xs">
                P
              </div>
              <span className="font-bold text-base tracking-tight text-neutral-900 dark:text-white">
                Practice
              </span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
              Adaptive typing speed, precision training, and professional English mastery powered by intelligent feedback loops.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2">
              <Command className="w-3.5 h-3.5" />
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono text-[10px]">Tab</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono text-[10px]">Enter</kbd> to restart test instantly</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
              Practice Modes
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><Link to="/practice" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Typing Speed</Link></li>
              <li><Link to="/practice?mode=english" className="hover:text-neutral-900 dark:hover:text-white transition-colors">English & Vocabulary</Link></li>
              <li><Link to="/practice?mode=developer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Developer Scenarios</Link></li>
              <li><Link to="/assessment" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Skill Assessment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
              Platform & Social
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><Link to="/coach" className="hover:text-neutral-900 dark:hover:text-white transition-colors">AI Skill Coach</Link></li>
              <li><Link to="/challenges" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Live Challenge Rooms</Link></li>
              <li><Link to="/custom-tests" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Custom Test Builder</Link></li>
              <li><Link to="/leaderboard" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Global Leaderboard</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Practice. Built for precision and focus.</p>
          <div className="flex items-center gap-1 text-neutral-400">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Empowering confident communicators and engineers worldwide.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
