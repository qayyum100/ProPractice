import React, { useState, useEffect } from 'react'
import {
  EnglishQuizConfig,
  EnglishQuizLevelKey,
  EnglishQuizDifficulty,
  EnglishQuizMode
} from '../../types/englishQuiz'
import {
  ENGLISH_LEVELS_METADATA,
  FOCUS_ENGLISH_TOPICS
} from '../../data/englishLevelsQuestionBank'
import { englishQuizStorage } from '../../lib/englishQuizStorage'
import {
  X,
  Sparkles,
  Sliders,
  FileText,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  Target,
  Compass,
  Zap,
  Crown
} from 'lucide-react'

interface EnglishSetupModalProps {
  isOpen: boolean
  onClose: () => void
  onStartQuiz: (config: EnglishQuizConfig) => void
  initialLevel?: EnglishQuizLevelKey
  initialFocusTopic?: string
}

export const EnglishSetupModal: React.FC<EnglishSetupModalProps> = ({
  isOpen,
  onClose,
  onStartQuiz,
  initialLevel,
  initialFocusTopic
}) => {
  const [selectedLevels, setSelectedLevels] = useState<EnglishQuizLevelKey[]>(
    initialLevel ? [initialLevel] : []
  )
  const [focusTopic, setFocusTopic] = useState<string>(initialFocusTopic || '')
  const [difficulty, setDifficulty] = useState<EnglishQuizDifficulty>('mixed')
  const [questionCount, setQuestionCount] = useState<number>(10)
  const [mode, setMode] = useState<EnglishQuizMode>('learn')
  const [timeMinutes, setTimeMinutes] = useState<number>(10)
  const [activeTab, setActiveTab] = useState<'config' | 'notes'>('config')
  const [customNotes, setCustomNotes] = useState<string>(englishQuizStorage.getNotes())

  useEffect(() => {
    if (isOpen) {
      setSelectedLevels(initialLevel ? [initialLevel] : [])
      setFocusTopic(initialFocusTopic || '')
    }
  }, [isOpen, initialLevel, initialFocusTopic])

  if (!isOpen) return null

  const toggleLevel = (key: EnglishQuizLevelKey) => {
    if (selectedLevels.includes(key)) {
      setSelectedLevels(selectedLevels.filter((k) => k !== key))
    } else {
      setSelectedLevels([...selectedLevels, key])
    }
  }

  const selectAllLevels = () => {
    if (selectedLevels.length === ENGLISH_LEVELS_METADATA.length) {
      setSelectedLevels([])
    } else {
      setSelectedLevels(ENGLISH_LEVELS_METADATA.map((c) => c.key))
    }
  }

  const handleSaveNotes = () => {
    englishQuizStorage.saveNotes(customNotes)
  }

  const handleStart = () => {
    handleSaveNotes()
    const config: EnglishQuizConfig = {
      levels: selectedLevels,
      difficulty,
      questionCount,
      mode,
      timeLimitMinutes: mode === 'assessment' ? timeMinutes : undefined,
      focusTopic: focusTopic.trim().length > 0 ? focusTopic : undefined
    }
    onStartQuiz(config)
  }

  const getLevelIcon = (key: EnglishQuizLevelKey) => {
    switch (key) {
      case 'level_1': return <Compass className="w-4 h-4 text-emerald-500" />
      case 'level_2': return <BookOpen className="w-4 h-4 text-cyan-500" />
      case 'level_3': return <Zap className="w-4 h-4 text-blue-500" />
      case 'level_4': return <Sparkles className="w-4 h-4 text-purple-500" />
      case 'level_5': return <Crown className="w-4 h-4 text-amber-500" />
      default: return <BookOpen className="w-4 h-4 text-neutral-400" />
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-neutral-900 dark:text-white">
                Custom English Quiz Setup
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Configure your CEFR proficiency levels, grammar topics, and test mode
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-3 flex items-center gap-2 border-b border-neutral-100 dark:border-neutral-800 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('config')}
            className={`pb-3 text-xs font-bold transition-colors border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'config'
                ? 'border-amber-500 text-amber-600 dark:text-amber-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Quiz Parameters</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('notes')}
            className={`pb-3 text-xs font-bold transition-colors border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'notes'
                ? 'border-amber-500 text-amber-600 dark:text-amber-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Grammar Study Notes</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'config' ? (
            <>
              {/* 1. Level Selection Grid */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">
                    Select English CEFR Levels ({selectedLevels.length}/{ENGLISH_LEVELS_METADATA.length})
                  </label>
                  <button
                    type="button"
                    onClick={selectAllLevels}
                    className="text-xs font-semibold text-amber-500 hover:underline cursor-pointer"
                  >
                    {selectedLevels.length === ENGLISH_LEVELS_METADATA.length ? 'Clear All' : 'Select All Levels'}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ENGLISH_LEVELS_METADATA.map((lvl) => {
                    const isSelected = selectedLevels.includes(lvl.key)
                    return (
                      <button
                        key={lvl.key}
                        type="button"
                        onClick={() => toggleLevel(lvl.key)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                          isSelected
                            ? 'bg-amber-500/10 border-amber-500 text-neutral-900 dark:text-white shadow-2xs'
                            : 'bg-neutral-50 dark:bg-[#181820] border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700'
                        }`}
                      >
                        <div className="p-2 rounded-xl bg-white dark:bg-neutral-800 shrink-0 shadow-2xs">
                          {getLevelIcon(lvl.key)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold">{lvl.shortTitle}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-700 font-semibold">
                              {lvl.cefr}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                            {lvl.badge} • {lvl.topics.slice(0, 2).join(', ')}
                          </p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 2. Priority Topic Selector */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-amber-500" />
                    <span>Focus Competency Drill (Optional)</span>
                  </label>
                  {focusTopic && (
                    <button
                      type="button"
                      onClick={() => setFocusTopic('')}
                      className="text-xs font-semibold text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 cursor-pointer"
                    >
                      Clear Selection
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {FOCUS_ENGLISH_TOPICS.map((topic) => {
                    const isActive = focusTopic.toLowerCase() === topic.query.toLowerCase()
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => {
                          setFocusTopic(isActive ? '' : topic.query)
                          if (!selectedLevels.includes(topic.levelKey)) {
                            setSelectedLevels([topic.levelKey])
                          }
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-amber-500 text-white shadow-xs'
                            : 'bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                        }`}
                      >
                        <span>{topic.shortTitle}</span>
                        <span className="text-[10px] opacity-75">({topic.badge})</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 3. Quiz Mode: Learn vs Assessment */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">
                  Practice Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMode('learn')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      mode === 'learn'
                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-950 dark:text-emerald-200'
                        : 'bg-neutral-50 dark:bg-[#181820] border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-xs">
                      <BookOpen className="w-4 h-4 text-emerald-500" />
                      <span>Learn &amp; Practice Mode</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Immediate feedback, distractor explanations, grammar hints, and key takeaways.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('assessment')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      mode === 'assessment'
                        ? 'bg-amber-500/10 border-amber-500 text-amber-950 dark:text-amber-200'
                        : 'bg-neutral-50 dark:bg-[#181820] border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-xs">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>Timed Assessment</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Formal exam conditions, countdown timer, question review flag, results revealed upon submission.
                    </p>
                  </button>
                </div>
              </div>

              {/* 4. Question Count & Difficulty Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Question Count */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">
                    Question Count
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[5, 10, 15, 20].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setQuestionCount(count)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          questionCount === count
                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                        }`}
                      >
                        {count} Qs
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty Filter */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">
                    Difficulty Level
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {(['mixed', 'beginner', 'intermediate', 'advanced'] as EnglishQuizDifficulty[]).map((diff) => (
                      <button
                        key={diff}
                        type="button"
                        onClick={() => setDifficulty(diff)}
                        className={`py-2 rounded-xl text-[11px] font-bold capitalize transition-all cursor-pointer ${
                          difficulty === diff
                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                        }`}
                      >
                        {diff}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5. Assessment Timer (if in assessment mode) */}
              {mode === 'assessment' && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-500" />
                      Assessment Timer Limit:
                    </span>
                    <span className="text-xs font-bold font-mono text-amber-600 dark:text-amber-400">
                      {timeMinutes} Minutes ({Math.round((timeMinutes * 60) / questionCount)}s per question)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="45"
                    step="5"
                    value={timeMinutes}
                    onChange={(e) => setTimeMinutes(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>
              )}
            </>
          ) : (
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">
                Personal Grammar Notes &amp; Weak Areas
              </label>
              <textarea
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Jot down grammar rules you frequently forget (e.g., 'Third conditional = had + V3 -> would have + V3', 'Subjunctive after recommend = base verb')..."
                className="w-full h-64 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#181820] text-xs text-neutral-800 dark:text-neutral-200 focus:outline-hidden focus:border-amber-500 leading-relaxed font-mono"
              />
              <p className="text-[11px] text-neutral-400">
                Your notes are automatically saved locally and can be referenced anytime.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between shrink-0 bg-neutral-50/50 dark:bg-[#14141a]">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleStart}
            className="px-6 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer shadow-md"
          >
            <CheckCircle2 className="w-4 h-4 text-amber-500" />
            <span>Start English Quiz ({questionCount} Qs)</span>
          </button>
        </div>
      </div>
    </div>
  )
}
