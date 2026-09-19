import React from 'react'
import { CompletedSessionResult } from '../../types/typing'

interface WpmAccuracyChartProps {
  sessions: CompletedSessionResult[]
}

export const WpmAccuracyChart: React.FC<WpmAccuracyChartProps> = ({ sessions }) => {
  if (sessions.length < 2) {
    return (
      <div className="h-52 flex flex-col items-center justify-center text-center gap-2 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-2xl">
        <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
          <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
        </div>
        <span className="text-xs text-neutral-400">Complete at least 2 sessions to see your speed trajectory</span>
      </div>
    )
  }

  const data = sessions.slice(0, 20).reverse()
  const maxWpm = Math.max(...data.map(d => d.netWpm), 60)
  const minWpm = Math.max(0, Math.min(...data.map(d => d.netWpm)) - 10)
  const height = 200
  const width = 600
  const padX = 42
  const padY = 28

  const getX = (i: number) => padX + (i / (data.length - 1)) * (width - padX * 2)
  const getY = (wpm: number) => height - padY - ((wpm - minWpm) / (maxWpm - minWpm)) * (height - padY * 2)

  const points = data.map((d, i) => ({
    x: getX(i),
    y: getY(d.netWpm),
    wpm: d.netWpm,
    acc: d.accuracy
  }))

  // Smooth cubic Bezier path
  const smooth = (pts: { x: number; y: number }[]) => {
    if (pts.length < 2) return `M ${pts[0].x} ${pts[0].y}`
    let d = `M ${pts[0].x} ${pts[0].y}`
    for (let i = 0; i < pts.length - 1; i++) {
      const cpx1 = pts[i].x + (pts[i + 1].x - (pts[i - 1]?.x ?? pts[i].x)) * 0.2
      const cpy1 = pts[i].y + (pts[i + 1].y - (pts[i - 1]?.y ?? pts[i].y)) * 0.2
      const cpx2 = pts[i + 1].x - (pts[i + 2]?.x ?? pts[i + 1].x - pts[i].x) * 0.2
      const cpy2 = pts[i + 1].y - (pts[i + 2]?.y ?? pts[i + 1].y - pts[i].y) * 0.2
      d += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${pts[i + 1].x} ${pts[i + 1].y}`
    }
    return d
  }

  const pathD = smooth(points)
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padY} L ${points[0].x} ${height - padY} Z`

  const gridWpmValues = [minWpm, Math.round((minWpm + maxWpm) / 2), maxWpm]

  return (
    <div className="w-full overflow-x-auto select-none">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-52 overflow-visible">
        <defs>
          <linearGradient id="wpmAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal grid guide lines */}
        {gridWpmValues.map((wpm, idx) => {
          const y = getY(wpm)
          return (
            <g key={idx}>
              <line
                x1={padX}
                y1={y}
                x2={width - padX}
                y2={y}
                className="stroke-neutral-200 dark:stroke-neutral-800"
                strokeDasharray="3 3"
                strokeWidth="1"
              />
              <text
                x={padX - 6}
                y={y + 4}
                textAnchor="end"
                className="fill-neutral-400"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
              >
                {wpm}
              </text>
            </g>
          )
        })}

        {/* Session index X labels */}
        {points.length <= 10 && points.map((p, i) => (
          <text
            key={i}
            x={p.x}
            y={height - 6}
            textAnchor="middle"
            className="fill-neutral-400"
            fontSize="9"
            fontFamily="ui-monospace, monospace"
          >
            #{i + 1}
          </text>
        ))}

        {/* Gradient area fill */}
        <path d={areaD} fill="url(#wpmAreaGrad)" />

        {/* Speed line with glow */}
        <path
          d={pathD}
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />

        {/* Data point circles */}
        {points.map((p, i) => (
          <g key={i} className="group">
            <circle
              cx={p.x}
              cy={p.y}
              r="5"
              fill="#0ea5e9"
              stroke="white"
              strokeWidth="2"
              className="dark:stroke-[#121216] cursor-pointer transition-all"
            />
            {/* Tooltip on hover */}
            <g className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <rect
                x={p.x - 30}
                y={p.y - 36}
                width="60"
                height="28"
                rx="6"
                fill="#0f172a"
                opacity="0.9"
              />
              <text
                x={p.x}
                y={p.y - 23}
                textAnchor="middle"
                fill="white"
                fontSize="11"
                fontFamily="ui-monospace, monospace"
                fontWeight="bold"
              >
                {p.wpm} WPM
              </text>
              <text
                x={p.x}
                y={p.y - 12}
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="9"
                fontFamily="ui-monospace, monospace"
              >
                {p.acc}% Acc
              </text>
            </g>
          </g>
        ))}
      </svg>
    </div>
  )
}
