import React, { useState } from 'react'
import { Container } from '../components/layout/Container'
import { CodeLanguageSelector } from '../components/typing/CodeLanguageSelector'
import { CodeTypingArea } from '../components/typing/CodeTypingArea'
import { CustomCodeInputModal } from '../components/typing/CustomCodeInputModal'
import { SymbolMissAnalytics } from '../components/typing/SymbolMissAnalytics'
import {
  SupportedLanguage,
  CodeSnippet,
  CODE_SNIPPETS,
  LANGUAGE_METADATA,
  IdeThemeId,
  generateCustomSymbolDrill,
} from '../data/codeSnippets'
import { Code2, Award, Upload, Plus } from 'lucide-react'

export const DeveloperCodePracticePage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>('java')
  const [customSnippets, setCustomSnippets] = useState<CodeSnippet[]>([])
  const [selectedSnippet, setSelectedSnippet] = useState<CodeSnippet>(
    CODE_SNIPPETS.find((s) => s.language === 'java') || CODE_SNIPPETS[0]
  )
  const [themeId, setThemeId] = useState<IdeThemeId>('vscode-dark')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [lastStats, setLastStats] = useState<{
    wpm: number
    accuracy: number
    symbolAccuracy: number
    durationSeconds: number
    missedSymbolsMap: Record<string, number>
  } | null>(null)

  const handleAddCustomSnippet = (newSnippet: CodeSnippet) => {
    setCustomSnippets((prev) => [newSnippet, ...prev])
    setSelectedLanguage('custom')
    setSelectedSnippet(newSnippet)
  }

  const handleTriggerTargetedDrill = (weakSymbols: string[]) => {
    const drillSnippet = generateCustomSymbolDrill(weakSymbols)
    setSelectedLanguage('symbols')
    setSelectedSnippet(drillSnippet)
  }

  const langMeta = LANGUAGE_METADATA[selectedLanguage] || LANGUAGE_METADATA['custom']

  return (
    <div className="py-8 sm:py-12 relative overflow-hidden">
      <Container size="lg" className="space-y-10">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-600 dark:text-purple-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer Code Practice & Symbol Drill Suite</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Master Code Typing Speed & Symbol Muscle Memory
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Select your preferred programming language, practice enterprise snippets, or paste/upload your own codebase file to build typing fluency.
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-500/20 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>Import / Upload Custom Code File</span>
            </button>
          </div>
        </div>

        {/* Main Practice Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Language Selector & Snippet List (5 Cols) */}
          <div className="lg:col-span-5 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800 p-6 rounded-3xl shadow-xl space-y-6">
            <CodeLanguageSelector
              selectedLanguage={selectedLanguage}
              onSelectLanguage={setSelectedLanguage}
              selectedSnippet={selectedSnippet}
              onSelectSnippet={setSelectedSnippet}
            />

            {/* Custom Snippets Section */}
            {customSnippets.length > 0 && (
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                  Your Uploaded Snippets ({customSnippets.length})
                </h4>
                <div className="space-y-2">
                  {customSnippets.map((cs) => (
                    <button
                      key={cs.id}
                      onClick={() => {
                        setSelectedLanguage('custom')
                        setSelectedSnippet(cs)
                      }}
                      className={`w-full text-left p-3 rounded-2xl border text-xs font-medium transition-all ${
                        selectedSnippet.id === cs.id
                          ? 'bg-teal-500/10 border-teal-500 text-teal-400 font-bold'
                          : 'bg-white/60 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      <div className="font-bold truncate">{cs.title}</div>
                      <div className="text-[10px] text-neutral-400 truncate">{cs.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Code Typing IDE Viewport & Analytics (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Active Language Meta */}
            <div className="p-5 rounded-3xl bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{langMeta.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {selectedSnippet.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {langMeta.name} • {selectedSnippet.category.replace('_', ' ')}
                  </p>
                </div>
              </div>

              <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${langMeta.badgeColor}`}>
                {selectedSnippet.difficulty}
              </span>
            </div>

            {/* Code Typing Area */}
            <CodeTypingArea
              snippet={selectedSnippet}
              themeId={themeId}
              onThemeChange={setThemeId}
              onFinish={(stats) => setLastStats(stats)}
            />

            {/* Post-Session Summary & Symbol Miss Breakdown */}
            {lastStats && (
              <div className="space-y-4">
                <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-500/10 via-sky-500/10 to-emerald-500/10 border border-purple-500/20 shadow-xl space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
                    <Award className="w-4 h-4" />
                    <span>Coding Session Performance Summary</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 rounded-2xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800">
                      <div className="text-[10px] uppercase font-bold text-neutral-400">Code Speed</div>
                      <div className="text-xl font-mono font-extrabold text-sky-500">{lastStats.wpm} WPM</div>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800">
                      <div className="text-[10px] uppercase font-bold text-neutral-400 font-sans">Accuracy</div>
                      <div className="text-xl font-mono font-extrabold text-emerald-500">{lastStats.accuracy}%</div>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800">
                      <div className="text-[10px] uppercase font-bold text-neutral-400">Symbol Accuracy</div>
                      <div className="text-xl font-mono font-extrabold text-purple-500">{lastStats.symbolAccuracy}%</div>
                    </div>
                  </div>
                </div>

                {/* Symbol Miss Analytics */}
                <SymbolMissAnalytics
                  missedSymbolsMap={lastStats.missedSymbolsMap}
                  onTriggerTargetedDrill={handleTriggerTargetedDrill}
                />
              </div>
            )}
          </div>
        </div>

        {/* Custom Code Upload Modal */}
        <CustomCodeInputModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddCustomSnippet={handleAddCustomSnippet}
        />
      </Container>
    </div>
  )
}

export default DeveloperCodePracticePage
