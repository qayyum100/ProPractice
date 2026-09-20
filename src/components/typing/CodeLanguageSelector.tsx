import React from 'react'
import { SupportedLanguage, CodeSnippet, LANGUAGE_METADATA, CODE_SNIPPETS } from '../../data/codeSnippets'
import { Terminal, Code, Sparkles, Filter, CheckCircle2 } from 'lucide-react'

interface CodeLanguageSelectorProps {
  selectedLanguage: SupportedLanguage
  onSelectLanguage: (lang: SupportedLanguage) => void
  selectedSnippet: CodeSnippet
  onSelectSnippet: (snippet: CodeSnippet) => void
}

export const CodeLanguageSelector: React.FC<CodeLanguageSelectorProps> = ({
  selectedLanguage,
  onSelectLanguage,
  selectedSnippet,
  onSelectSnippet,
}) => {
  const languages = Object.keys(LANGUAGE_METADATA) as SupportedLanguage[]
  const filteredSnippets = CODE_SNIPPETS.filter((s) => s.language === selectedLanguage)

  return (
    <div className="space-y-6">
      {/* Header & Language Tabs */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-sky-500" />
            <span>Select Programming Language</span>
          </label>
          <span className="text-xs font-mono text-neutral-400">
            {languages.length} Languages Supported
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {languages.map((langKey) => {
            const meta = LANGUAGE_METADATA[langKey]
            const isSelected = selectedLanguage === langKey

            return (
              <button
                key={langKey}
                onClick={() => {
                  onSelectLanguage(langKey)
                  const firstSnippet = CODE_SNIPPETS.find((s) => s.language === langKey)
                  if (firstSnippet) onSelectSnippet(firstSnippet)
                }}
                className={`flex items-center gap-2.5 p-3 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-sky-500/10 border-sky-500 text-sky-600 dark:text-sky-300 shadow-md shadow-sky-500/5 ring-1 ring-sky-500/50'
                    : 'bg-white/60 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                <span className="text-lg leading-none">{meta.icon}</span>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold truncate">{meta.name.split('/')[0].trim()}</div>
                  <div className="text-[10px] text-neutral-400 dark:text-neutral-500 truncate">
                    {langKey === 'symbols' ? 'Special Keys' : meta.name.split('/')[1]?.trim() || 'Syntax'}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Snippet Picker Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-purple-500" />
            <span>Practice Snippet</span>
          </label>
          <span className="text-xs text-neutral-400">
            {filteredSnippets.length} snippets available for {LANGUAGE_METADATA[selectedLanguage].name}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredSnippets.map((snippet) => {
            const isSelected = selectedSnippet.id === snippet.id

            return (
              <div
                key={snippet.id}
                onClick={() => onSelectSnippet(snippet)}
                className={`group relative cursor-pointer p-4 rounded-2xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-purple-500/10 border-purple-500/80 ring-1 ring-purple-500/40 shadow-lg shadow-purple-500/5'
                    : 'bg-white/70 dark:bg-neutral-900/70 border-neutral-200/80 dark:border-neutral-800 hover:border-purple-300 dark:hover:border-purple-800'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {snippet.title}
                    </h4>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                    )}
                  </div>

                  <span
                    className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full border ${
                      snippet.difficulty === 'beginner'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                        : snippet.difficulty === 'intermediate'
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                        : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'
                    }`}
                  >
                    {snippet.difficulty}
                  </span>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-3">
                  {snippet.description}
                </p>

                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 border-t border-neutral-100 dark:border-neutral-800/80 pt-2.5">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    {snippet.symbolCount} special symbols
                  </span>
                  <span>{snippet.code.split('\n').length} lines</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
