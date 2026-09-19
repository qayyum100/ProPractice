import React from 'react'
import { VocabularyItem } from '../../types/english'
import { Volume2, BookOpen, Tag } from 'lucide-react'
import { Badge } from '../ui/Badge'

interface VocabularyCardProps {
  item: VocabularyItem
  onPracticeWord?: (word: string) => void
}

export const VocabularyCard: React.FC<VocabularyCardProps> = ({
  item,
  onPracticeWord
}) => {
  const speakWord = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(item.word)
      utterance.rate = 0.9
      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between gap-4">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
                {item.word}
              </h3>
              <button
                onClick={speakWord}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-sky-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                title="Pronounce Word"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            {item.phonetic && (
              <span className="text-xs font-mono text-neutral-400">
                {item.phonetic} • <span className="italic">{item.partOfSpeech}</span>
              </span>
            )}
          </div>
          <Badge variant="brand">{item.level}</Badge>
        </div>

        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mt-2">
          {item.definition}
        </p>

        <div className="mt-4 p-3 rounded-2xl bg-neutral-50 dark:bg-[#181820] border border-neutral-200/60 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 italic">
          "{item.exampleSentence}"
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs">
        <div className="flex items-center gap-1 text-neutral-400">
          <Tag className="w-3.5 h-3.5" />
          <span className="capitalize">{item.category}</span>
        </div>

        {onPracticeWord && (
          <button
            onClick={() => onPracticeWord(item.word)}
            className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Practice Word</span>
          </button>
        )}
      </div>
    </div>
  )
}
