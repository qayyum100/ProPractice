import React from 'react'
import { VoiceCategoryMeta } from '../../types/amazonVoice'
import {
  Package,
  AlertTriangle,
  RotateCcw,
  Truck,
  Crown,
  Radio,
  Headphones,
  Users,
  Shield,
  CreditCard,
  Globe,
  PhoneForwarded,
  Award,
  BarChart2,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react'

interface VoiceCategoryCardProps {
  category: VoiceCategoryMeta
  accuracy: number
  totalQuestionsAnswered: number
  onStartCategoryQuiz: (categoryKey: VoiceCategoryMeta['key']) => void
  isSelected?: boolean
  onToggleSelect?: (categoryKey: VoiceCategoryMeta['key']) => void
}

export const VoiceCategoryCard: React.FC<VoiceCategoryCardProps> = ({
  category,
  accuracy,
  totalQuestionsAnswered,
  onStartCategoryQuiz,
  isSelected,
  onToggleSelect
}) => {
  const getIcon = () => {
    switch (category.iconName) {
      case 'Shield': return <Shield className="w-5 h-5" />
      case 'Package': return <Package className="w-5 h-5" />
      case 'RotateCcw': return <RotateCcw className="w-5 h-5" />
      case 'CreditCard': return <CreditCard className="w-5 h-5" />
      case 'Truck': return <Truck className="w-5 h-5" />
      case 'Crown': return <Crown className="w-5 h-5" />
      case 'Globe': return <Globe className="w-5 h-5" />
      case 'PhoneForwarded': return <PhoneForwarded className="w-5 h-5" />
      case 'Radio': return <Radio className="w-5 h-5" />
      case 'Headphones': return <Headphones className="w-5 h-5" />
      case 'Users': return <Users className="w-5 h-5" />
      case 'BarChart': return <BarChart2 className="w-5 h-5" />
      case 'Award': return <Award className="w-5 h-5" />
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5" />
      default: return <Sparkles className="w-5 h-5" />
    }
  }

  return (
    <div
      className={`group relative p-5 rounded-3xl transition-all duration-200 border flex flex-col justify-between ${
        isSelected
          ? 'bg-amber-500/10 border-amber-500/60 ring-2 ring-amber-500/30 dark:bg-amber-950/20'
          : 'bg-white dark:bg-[#121217] border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-xs hover:shadow-md'
      }`}
    >
      <div>
        {/* Top bar with category badge and icon */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
              style={{ backgroundColor: `${category.color.accent}18`, color: category.color.accent }}
            >
              {getIcon()}
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
              {category.badge}
            </span>
          </div>

          {onToggleSelect && (
            <button
              type="button"
              onClick={() => onToggleSelect(category.key)}
              className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-amber-500 border-amber-500 text-white'
                  : 'border-neutral-300 dark:border-neutral-700 hover:border-neutral-400'
              }`}
              title="Select for custom quiz"
              aria-label={`Select ${category.title}`}
            >
              {isSelected && <CheckCircle2 className="w-4 h-4 fill-white text-amber-500" />}
            </button>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {category.title}
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-3">
          {category.description}
        </p>

        {/* Topics preview tag list */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {category.topics.slice(0, 3).map((topic, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded-md font-medium bg-neutral-100/80 dark:bg-[#1a1a22] text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-800"
            >
              {topic}
            </span>
          ))}
          {category.topics.length > 3 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-md text-neutral-400 font-medium">
              +{category.topics.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Footer with Performance Telemetry & Launch Action */}
      <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-2">
        <div className="text-xs">
          {totalQuestionsAnswered > 0 ? (
            <div className="flex items-center gap-1.5">
              <span className={`font-mono font-bold ${accuracy >= 80 ? 'text-emerald-500' : accuracy >= 60 ? 'text-amber-500' : 'text-rose-500'}`}>
                {accuracy}%
              </span>
              <span className="text-[11px] text-neutral-400">({totalQuestionsAnswered} answered)</span>
            </div>
          ) : (
            <span className="text-[11px] text-neutral-400 italic">Not practiced yet</span>
          )}
        </div>

        <button
          type="button"
          onClick={() => onStartCategoryQuiz(category.key)}
          className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-900 hover:text-white dark:bg-neutral-800 dark:hover:bg-white dark:hover:text-neutral-900 text-neutral-800 dark:text-neutral-200 transition-all cursor-pointer shadow-2xs"
        >
          <span>Practise</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
