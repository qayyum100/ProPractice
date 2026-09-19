import React from 'react'
import { SkillDnaMetrics } from '../../types/ai'

interface SkillDNAChartProps {
  metrics: SkillDnaMetrics
}

export const SkillDNAChart: React.FC<SkillDNAChartProps> = ({ metrics }) => {
  const axes = [
    { label: 'Speed', value: metrics.speedScore },
    { label: 'Accuracy', value: metrics.accuracyScore },
    { label: 'Consistency', value: metrics.consistencyScore },
    { label: 'Endurance', value: metrics.enduranceScore },
    { label: 'Punctuation', value: metrics.punctuationMastery },
    { label: 'Vocabulary', value: metrics.vocabularyBreadth },
    { label: 'Dev Lexicon', value: metrics.developerLexicon },
    { label: 'Rhythm', value: metrics.rhythmFluidity },
  ]

  const size = 320
  const center = size / 2
  const radius = center - 45
  const angleStep = (Math.PI * 2) / axes.length

  // Generate radar polygon points
  const points = axes.map((axis, i) => {
    const angle = i * angleStep - Math.PI / 2
    const distance = (axis.value / 100) * radius
    const x = center + distance * Math.cos(angle)
    const y = center + distance * Math.sin(angle)
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <svg width={size} height={size} className="overflow-visible select-none">
        {/* Concentric grid rings */}
        {[0.25, 0.5, 0.75, 1].map((scale, idx) => (
          <circle
            key={idx}
            cx={center}
            cy={center}
            r={radius * scale}
            fill="none"
            className="stroke-neutral-200 dark:stroke-neutral-800"
            strokeDasharray={scale === 1 ? undefined : '3 3'}
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {axes.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2
          const x = center + radius * Math.cos(angle)
          const y = center + radius * Math.sin(angle)
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              className="stroke-neutral-200 dark:stroke-neutral-800"
              strokeWidth="1"
            />
          )
        })}

        {/* Radar Filled Polygon */}
        <polygon
          points={points}
          className="fill-sky-500/20 dark:fill-sky-400/20 stroke-sky-500 dark:stroke-sky-400"
          strokeWidth="2"
        />

        {/* Radar Vertex Points */}
        {axes.map((axis, i) => {
          const angle = i * angleStep - Math.PI / 2
          const distance = (axis.value / 100) * radius
          const x = center + distance * Math.cos(angle)
          const y = center + distance * Math.sin(angle)
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              className="fill-sky-500 dark:fill-sky-400 stroke-white dark:stroke-[#121216]"
              strokeWidth="2"
            />
          )
        })}

        {/* Labels */}
        {axes.map((axis, i) => {
          const angle = i * angleStep - Math.PI / 2
          const labelDist = radius + 24
          const x = center + labelDist * Math.cos(angle)
          const y = center + labelDist * Math.sin(angle)
          return (
            <text
              key={i}
              x={x}
              y={y + 4}
              textAnchor="middle"
              className="text-[10px] font-semibold fill-neutral-600 dark:fill-neutral-400"
            >
              {axis.label} ({axis.value}%)
            </text>
          )
        })}
      </svg>
    </div>
  )
}
