import React, { useState, useEffect } from 'react'
import {
  QuizConfig,
  VoiceCategoryKey,
  QuestionDifficulty,
  QuestionType,
  PracticeMode
} from '../../types/amazonVoice'
import { VOICE_CATEGORIES, PRIORITY_VOICE_TOPICS } from '../../data/amazonVoiceQuestionBank'
import { amazonVoiceStorage } from '../../lib/amazonVoiceStorage'
import {
  X,
  Sparkles,
  Sliders,
  FileText,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  Target
} from 'lucide-react'

interface VoiceSetupModalProps {
  isOpen: boolean
  onClose: () => void
  onStartQuiz: (config: QuizConfig, forceAiFresh?: boolean) => void
  initialCategory?: VoiceCategoryKey
  initialFocusTopic?: string
}

export const VoiceSetupModal: React.FC<VoiceSetupModalProps> = ({
  isOpen,
  onClose,
  onStartQuiz,
  initialCategory,
  initialFocusTopic
}) => {
  const [selectedCategories, setSelectedCategories] = useState<VoiceCategoryKey[]>(
    initialCategory ? [initialCategory] : []
  )
  const [focusTopic, setFocusTopic] = useState<string>(initialFocusTopic || '')

  useEffect(() => {
    if (isOpen) {
      setSelectedCategories(initialCategory ? [initialCategory] : [])
      setFocusTopic(initialFocusTopic || '')
    }
  }, [isOpen, initialCategory, initialFocusTopic])
  const [difficulty, setDifficulty] = useState<QuestionDifficulty>('intermediate')
  const [questionCount, setQuestionCount] = useState<number>(10)
  const [questionType, setQuestionType] = useState<QuestionType>('single_choice')
  const [mode, setMode] = useState<PracticeMode>('learn')
  const [timeMinutes, setTimeMinutes] = useState<number>(10)
  const [forceAi, setForceAi] = useState(false)
  const [activeTab, setActiveTab] = useState<'config' | 'notes'>('config')
  const [customNotes, setCustomNotes] = useState<string>(amazonVoiceStorage.getCustomNotes())

  if (!isOpen) return null

  const toggleCategory = (key: VoiceCategoryKey) => {
    if (selectedCategories.includes(key)) {
      setSelectedCategories(selectedCategories.filter((k) => k !== key))
    } else {
      setSelectedCategories([...selectedCategories, key])
    }
  }

  const selectAllCategories = () => {
    if (selectedCategories.length === VOICE_CATEGORIES.length) {
      setSelectedCategories([])
    } else {
      setSelectedCategories(VOICE_CATEGORIES.map((c) => c.key))
    }
  }

  const handleSaveNotes = () => {
    amazonVoiceStorage.saveCustomNotes(customNotes)
  }

  const handleStart = () => {
    handleSaveNotes()
    const config: QuizConfig = {
      categories: selectedCategories,
      difficulty,
      questionCount,
      questionType,
      mode,
      timeLimitSeconds: mode === 'timed' ? timeMinutes * 60 : undefined,
      focusTopic: focusTopic || undefined
    }
    onStartQuiz(config, forceAi)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white dark:bg-[#121217] border border-neutral-200 dark:border-neutral-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                Customize Quiz Session
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Tailor Amazon NA Voice Process drill parameters
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs (Config vs Custom SOP Notes) */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('config')}
            className={`flex-1 py-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'config'
                ? 'bg-white dark:bg-[#1c1c24] text-neutral-900 dark:text-white shadow-2xs font-bold'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Quiz Parameters
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('notes')}
            className={`flex-1 py-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'notes'
                ? 'bg-white dark:bg-[#1c1c24] text-neutral-900 dark:text-white shadow-2xs font-bold'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Authorized Training Notes (SOP)</span>
          </button>
        </div>

        {activeTab === 'config' ? (
          <div className="space-y-6">
            {/* 1. Category Selection */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold uppercase tracking-wider text-neutral-500">
                  Target Topics ({selectedCategories.length === 0 ? 'All 9 Categories' : `${selectedCategories.length} Selected`})
                </label>
                <button
                  type="button"
                  onClick={selectAllCategories}
                  className="text-amber-600 dark:text-amber-400 font-semibold hover:underline cursor-pointer"
                >
                  {selectedCategories.length === VOICE_CATEGORIES.length ? 'Clear Selection' : 'Select All'}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-1">
                {VOICE_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategories.includes(cat.key)
                  return (
                    <button
                      key={cat.key}
                      type="button"
                      onClick={() => toggleCategory(cat.key)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 text-neutral-900 dark:text-white font-semibold'
                          : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300'
                      }`}
                    >
                      <span className="truncate pr-2">{cat.shortTitle}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 shrink-0">
                        {cat.badge}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Priority Topic Focus Filter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-amber-500" />
                  <span>Priority Focus Topic (Optional)</span>
                </label>
                {focusTopic && (
                  <button
                    type="button"
                    onClick={() => setFocusTopic('')}
                    className="text-amber-600 dark:text-amber-400 font-semibold hover:underline cursor-pointer text-[11px]"
                  >
                    Clear Focus Filter
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PRIORITY_VOICE_TOPICS.map((pt) => {
                  const isTopicActive = focusTopic === pt.query
                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => {
                        if (isTopicActive) {
                          setFocusTopic('')
                        } else {
                          setFocusTopic(pt.query)
                          if (!selectedCategories.includes(pt.categoryKey)) {
                            setSelectedCategories([...selectedCategories, pt.categoryKey])
                          }
                        }
                      }}
                      className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                        isTopicActive
                          ? 'border-amber-500 bg-amber-500/10 text-neutral-900 dark:text-white font-bold ring-1 ring-amber-500'
                          : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300'
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 block mb-0.5">
                        Topic {pt.number}
                      </span>
                      <p className="text-[11px] font-medium leading-snug line-clamp-1">
                        {pt.shortTitle}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 2. Practice Mode Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                Practice Mode
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'learn', label: 'Learn Mode', icon: <BookOpen className="w-3.5 h-3.5" />, desc: 'Instant explanations after picking' },
                  { key: 'assessment', label: 'Assessment Mode', icon: <Award className="w-3.5 h-3.5" />, desc: 'Exam format, answers revealed at end' },
                  { key: 'timed', label: 'Timed Exam', icon: <Clock className="w-3.5 h-3.5" />, desc: 'Countdown timer with auto-submit' },
                ].map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setMode(m.key as PracticeMode)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      mode === m.key
                        ? 'border-amber-500 bg-amber-500/10 text-neutral-900 dark:text-white font-bold ring-1 ring-amber-500'
                        : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs mb-1">
                      {m.icon}
                      <span>{m.label}</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 font-normal leading-tight">
                      {m.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Question Count & Difficulty & Format Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Question Count */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                  Question Count
                </label>
                <div className="flex items-center gap-1.5">
                  {[5, 10, 15, 20].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setQuestionCount(count)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                        questionCount === count
                          ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
                          : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                  Difficulty
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as QuestionDifficulty)}
                  className="w-full p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a24] text-xs font-semibold text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="mixed">Mixed Difficulty</option>
                </select>
              </div>

              {/* Question Format */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                  Format
                </label>
                <select
                  value={questionType}
                  onChange={(e) => setQuestionType(e.target.value as QuestionType)}
                  className="w-full p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a24] text-xs font-semibold text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                >
                  <option value="single_choice">Single Choice</option>
                  <option value="multi_select">Multi-Select</option>
                  <option value="scenario">Customer Scenario</option>
                  <option value="mixed">Mixed Types</option>
                </select>
              </div>
            </div>

            {/* Optional Timer Setting (if timed mode) */}
            {mode === 'timed' && (
              <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-[#16161f] border border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-500" />
                  Time Limit: {timeMinutes} Minutes ({Math.round((timeMinutes * 60) / questionCount)}s per question)
                </span>
                <input
                  type="range"
                  min="3"
                  max="30"
                  step="1"
                  value={timeMinutes}
                  onChange={(e) => setTimeMinutes(Number(e.target.value))}
                  className="accent-amber-500"
                />
              </div>
            )}

            {/* AI Generation Toggle */}
            <div className="p-3.5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/40 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                  Request Fresh Gemini AI Synthesis
                </span>
                <p className="text-neutral-500 dark:text-neutral-400 text-[11px]">
                  Bypasses static cache to produce dynamically synthesized new scenario dilemmas.
                </p>
              </div>
              <input
                type="checkbox"
                checked={forceAi}
                onChange={(e) => setForceAi(e.target.checked)}
                className="w-4 h-4 accent-purple-600 rounded cursor-pointer"
              />
            </div>
          </div>
        ) : (
          /* Custom Notes Tab */
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                Import Authorized Training Notes
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Paste excerpts from your team’s approved training documentation or SOP updates. Gemini AI will incorporate these policies when generating quiz questions.
              </p>
            </div>

            <textarea
              rows={8}
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="e.g. 'Effective Q3: Holiday return window extended through January 31. Courtesy credits above $15 require Lead approval...'"
              className="w-full p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#16161e] text-xs font-mono text-neutral-900 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
            />

            <button
              type="button"
              onClick={handleSaveNotes}
              className="text-xs px-3 py-1.5 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold hover:opacity-90 cursor-pointer"
            >
              Save Notes to Browser Storage
            </button>
          </div>
        )}

        {/* Modal Footer with Launch Action */}
        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleStart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold text-xs hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-amber-500" />
            <span>Launch Training Session ({questionCount} Qs)</span>
          </button>
        </div>
      </div>
    </div>
  )
}
