import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}

/**
 * Standard WPM Calculation:
 * Gross WPM = (Total characters typed / 5) / time in minutes
 * Net WPM = ((Correct characters / 5) / time in minutes)
 */
export function calculateGrossWpm(totalChars: number, seconds: number): number {
  if (seconds <= 0) return 0
  const minutes = seconds / 60
  return Math.max(0, Math.round((totalChars / 5) / minutes))
}

export function calculateNetWpm(correctChars: number, seconds: number): number {
  if (seconds <= 0) return 0
  const minutes = seconds / 60
  return Math.max(0, Math.round((correctChars / 5) / minutes))
}

export function calculateAccuracy(correctChars: number, totalChars: number): number {
  if (totalChars === 0) return 100
  const acc = (correctChars / totalChars) * 100
  return Math.max(0, Math.min(100, Math.round(acc * 10) / 10))
}

/**
 * Consistency Score: 100 - (standard deviation of keystroke intervals) normalized
 */
export function calculateConsistency(intervalsMs: number[]): number {
  if (intervalsMs.length < 5) return 100
  const mean = intervalsMs.reduce((a, b) => a + b, 0) / intervalsMs.length
  const variance = intervalsMs.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / intervalsMs.length
  const stdDev = Math.sqrt(variance)
  
  // Lower stdDev means more rhythmic consistency
  const score = Math.max(10, Math.min(100, 100 - (stdDev / 12)))
  return Math.round(score)
}
