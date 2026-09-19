import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Wand2, Sparkles, ArrowLeft } from 'lucide-react'
import { synthesizeCustomTestFromPrompt } from '../lib/gemini'

export const CustomTestBuilderPage: React.FC = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [textContent, setTextContent] = useState<string>('')
  const [duration, setDuration] = useState<number>(60)
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate')
  const [category, setCategory] = useState<string>('Engineering')
  const [aiPrompt, setAiPrompt] = useState<string>('')
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false)

  const handleAiSynthesize = async () => {
    const prompt = aiPrompt.trim()
    if (!prompt) return
    setIsSynthesizing(true)
    try {
      const synthesized = await synthesizeCustomTestFromPrompt(prompt)
      setTitle(synthesized.title)
      setDescription(synthesized.description)
      setTextContent(synthesized.textContent)
      setCategory(synthesized.category)
      setDifficulty(synthesized.difficulty)
      setDuration(synthesized.duration)
    } catch {
      setTitle(prompt)
      setDescription(`Curated practice module synthesized for: ${prompt}`)
      setTextContent(
        `Mastering ${prompt} requires theoretical precision and deliberate execution. Practice rhythmic keystroke cadence and syntax precision to solidify deep muscle memory.`
      )
    } finally {
      setIsSynthesizing(false)
    }
  }

  const handleSaveAndPractice = () => {
    if (!title.trim() || !textContent.trim()) {
      alert('Please provide a title and practice text.')
      return
    }

    // Save to local storage for persistence across CustomTestsPage
    try {
      const existing = JSON.parse(localStorage.getItem('practice_custom_tests') || '[]')
      const newTest = {
        id: `ct_user_${Date.now()}`,
        title: title.trim(),
        description: description.trim() || 'Custom user created practice text.',
        textContent: textContent.trim(),
        difficulty,
        duration,
        author: 'You',
        timesTaken: 1,
        category
      }
      localStorage.setItem('practice_custom_tests', JSON.stringify([newTest, ...existing]))
    } catch {
      // Storage fallback
    }

    navigate('/practice', {
      state: {
        customText: textContent.trim(),
        mode: 'custom_created',
        duration
      }
    })
  }

  return (
    <div className="py-8 sm:py-12 space-y-8">
      <Container size="md" className="space-y-8">
        <button
          onClick={() => navigate('/custom-tests')}
          className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Custom Tests</span>
        </button>

        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Custom Test Builder
          </h1>
          <p className="text-sm text-neutral-500">
            Design your own typing and English practice tests or use AI synthesis.
          </p>
        </div>

        {/* AI Generator Helper Box */}
        <div className="p-6 rounded-3xl bg-sky-50/60 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-800/40 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-700 dark:text-sky-300">
            <Wand2 className="w-4 h-4" />
            <span>AI Practice Text Assistant</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="e.g. React Hook Performance Optimization, Kubernetes Pod Networking..."
              className="bg-white dark:bg-[#121216]"
            />
            <Button
              type="button"
              variant="primary"
              size="md"
              isLoading={isSynthesizing}
              onClick={handleAiSynthesize}
              icon={<Sparkles className="w-4 h-4" />}
            >
              Synthesize
            </Button>
          </div>
        </div>

        {/* Test Creation Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm space-y-6">
          <Input
            label="Test Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Docker Container Lifecycle"
          />

          <Input
            label="Description (Optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief context regarding what this test trains..."
          />

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
              Practice Passage Content ({textContent.length} chars)
            </label>
            <textarea
              rows={5}
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              placeholder="Type or paste the exact text you want practitioners to type..."
              className="w-full bg-neutral-50 dark:bg-[#18181f] border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 text-sm font-mono text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                Target Duration
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[30, 60, 90, 120].map((dur) => (
                  <button
                    key={dur}
                    type="button"
                    onClick={() => setDuration(dur)}
                    className={`py-2 text-xs font-mono font-semibold rounded-xl border transition-all ${
                      duration === dur
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-neutral-900 dark:border-white'
                        : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {dur}s
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                Difficulty Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['beginner', 'intermediate', 'advanced'] as const).map((diff) => (
                  <button
                    key={diff}
                    type="button"
                    onClick={() => setDifficulty(diff)}
                    className={`py-2 text-xs font-semibold capitalize rounded-xl border transition-all ${
                      difficulty === diff
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-neutral-900 dark:border-white'
                        : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <Button variant="ghost" onClick={() => navigate('/custom-tests')}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSaveAndPractice}>
              Save & Test Run
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
