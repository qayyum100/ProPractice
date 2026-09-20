import React, { useState } from 'react'
import { CodeSnippet, SupportedLanguage } from '../../data/codeSnippets'
import { X, Upload, Code2, Check, FileText } from 'lucide-react'

interface CustomCodeInputModalProps {
  isOpen: boolean
  onClose: () => void
  onAddCustomSnippet: (snippet: CodeSnippet) => void
}

export const CustomCodeInputModal: React.FC<CustomCodeInputModalProps> = ({
  isOpen,
  onClose,
  onAddCustomSnippet,
}) => {
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState<SupportedLanguage>('typescript')

  if (!isOpen) return null

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name
    setTitle(nameWithoutExt)

    // Detect language from extension
    const ext = file.name.split('.').pop()?.toLowerCase()
    if (ext === 'java') setLanguage('java')
    else if (ext === 'ts' || ext === 'tsx' || ext === 'js' || ext === 'jsx') setLanguage('typescript')
    else if (ext === 'py') setLanguage('python')
    else if (ext === 'go') setLanguage('go')
    else if (ext === 'rs') setLanguage('rust')
    else if (ext === 'cpp' || ext === 'h' || ext === 'hpp') setLanguage('cpp')
    else if (ext === 'sql') setLanguage('sql')
    else if (ext === 'sh' || ext === 'bash') setLanguage('shell')

    const reader = new FileReader()
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setCode(event.target.result)
      }
    }
    reader.readAsText(file)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!code.trim()) return

    const symbolMatches = code.match(/[{}()[\]<>=;:!?&|.+\-*\/@#$^%\\~`"']/g) || []

    const newSnippet: CodeSnippet = {
      id: `custom-${Date.now()}`,
      title: title.trim() || 'Custom User Snippet',
      language,
      category: 'user_custom',
      difficulty: 'intermediate',
      description: `Uploaded/Pasted custom source code snippet (${code.split('\n').length} lines).`,
      code: code.trim(),
      symbolCount: symbolMatches.length,
    }

    onAddCustomSnippet(newSnippet)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200/80 dark:border-neutral-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Import Custom Code
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Paste code or upload your source file to practice your own codebase.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
          {/* Upload File Zone */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Upload Source File (.java, .ts, .py, .go, .rs, .sql, .sh)
            </label>
            <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-neutral-300 dark:border-neutral-700 hover:border-purple-500 dark:hover:border-purple-500 rounded-2xl cursor-pointer bg-neutral-50/50 dark:bg-neutral-950/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
                <Upload className="w-4 h-4 text-purple-500" />
                <span>Click to browse file or drag & drop</span>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".java,.ts,.tsx,.js,.jsx,.py,.go,.rs,.cpp,.h,.hpp,.sql,.sh,.bash,.txt"
                onChange={handleFileUpload}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                Snippet Title
              </label>
              <input
                type="text"
                placeholder="e.g. My Custom Auth Middleware"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                Target Language Syntax
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="java">Java / Spring Boot</option>
                <option value="typescript">TypeScript / React</option>
                <option value="python">Python</option>
                <option value="go">Go</option>
                <option value="rust">Rust</option>
                <option value="cpp">C++</option>
                <option value="sql">SQL</option>
                <option value="shell">Shell / Bash</option>
                <option value="custom">General Code</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
              Code Content
            </label>
            <textarea
              rows={6}
              placeholder="Paste your source code here..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              required
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2 border-t border-neutral-200/80 dark:border-neutral-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!code.trim()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold text-xs transition-colors shadow-lg shadow-purple-500/20"
            >
              <Check className="w-4 h-4" />
              <span>Load Into Practice</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
