import React, { useEffect, useState, useMemo } from 'react'
import { KeystrokeEvent } from '../../types/typing'
import { FlightReplayController, ReplayState } from '../../core/replayRecorder'
import { Play, Pause, RotateCcw, FastForward, Clock } from 'lucide-react'
import { Button } from '../ui/Button'
import { formatTime } from '../../lib/utils'

interface FlightReplayProps {
  targetText: string
  keystrokeLog: KeystrokeEvent[]
}

export const FlightReplay: React.FC<FlightReplayProps> = ({
  targetText,
  keystrokeLog
}) => {
  const controller = useMemo(() => {
    return new FlightReplayController(targetText, keystrokeLog)
  }, [targetText, keystrokeLog])

  const [replayState, setReplayState] = useState<ReplayState>({
    currentText: '',
    currentKeystrokeIndex: 0,
    currentTimeMs: 0,
    totalDurationMs: keystrokeLog.length > 0 ? keystrokeLog[keystrokeLog.length - 1].timestamp : 0,
    isPlaying: false,
    speedMultiplier: 1,
    wpmAtInstant: 0,
    errorCount: 0
  })

  useEffect(() => {
    controller.subscribe((state) => {
      setReplayState(state)
    })
    return () => {
      controller.destroy()
    }
  }, [controller])

  const handlePlayPause = () => {
    if (replayState.isPlaying) {
      controller.pause()
    } else {
      controller.play()
    }
  }

  const handleRestart = () => {
    controller.restart()
  }

  const handleSpeedChange = (speed: number) => {
    controller.setSpeed(speed)
  }

  const progressPercent = replayState.totalDurationMs > 0
    ? Math.min(100, (replayState.currentTimeMs / replayState.totalDurationMs) * 100)
    : 0

  return (
    <div className="w-full rounded-3xl bg-neutral-50 dark:bg-[#101014] border border-neutral-200 dark:border-neutral-800 p-6 space-y-6">
      {/* Replay Display Box */}
      <div className="min-h-[140px] max-h-[220px] overflow-y-auto p-6 rounded-2xl bg-white dark:bg-[#16161c] border border-neutral-200 dark:border-neutral-800/80 font-mono text-xl sm:text-2xl leading-relaxed select-none">
        <span className="text-neutral-900 dark:text-neutral-100">
          {replayState.currentText}
        </span>
        <span className="inline-block w-2.5 h-6 bg-sky-500 animate-pulse-subtle ml-0.5 align-middle" />
        <span className="text-neutral-400/40 dark:text-neutral-600/40">
          {targetText.slice(replayState.currentText.length)}
        </span>
      </div>

      {/* Progress Scrubber */}
      <div className="space-y-1.5">
        <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-sky-500 h-full transition-all duration-75"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-neutral-400 font-mono">
          <span>{formatTime(replayState.currentTimeMs / 1000)}</span>
          <span>{formatTime(replayState.totalDurationMs / 1000)}</span>
        </div>
      </div>

      {/* Controls and Real-time Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="primary"
            onClick={handlePlayPause}
            icon={replayState.isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          >
            {replayState.isPlaying ? 'Pause' : 'Play Replay'}
          </Button>

          <Button
            size="sm"
            variant="secondary"
            onClick={handleRestart}
            icon={<RotateCcw className="w-4 h-4" />}
          >
            Restart
          </Button>
        </div>

        {/* Speed Multipliers */}
        <div className="flex items-center gap-1 bg-neutral-200/60 dark:bg-neutral-800/60 p-1 rounded-xl">
          {[0.5, 1, 2, 4].map((speed) => (
            <button
              key={speed}
              onClick={() => handleSpeedChange(speed)}
              className={`px-2.5 py-1 text-xs font-mono font-semibold rounded-lg transition-all ${
                replayState.speedMultiplier === speed
                  ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {speed}x
            </button>
          ))}
        </div>

        {/* Flight Telemetry Status */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-neutral-500">
            <FastForward className="w-3.5 h-3.5 text-sky-500" />
            <span>Instant WPM:</span>
            <span className="font-bold text-neutral-900 dark:text-white">{replayState.wpmAtInstant}</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-500">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Errors:</span>
            <span className="font-bold text-neutral-900 dark:text-white">{replayState.errorCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
