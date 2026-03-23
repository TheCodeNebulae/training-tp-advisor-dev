import { clsx, type ClassValue } from 'clsx'
import type { ActivityType } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPace(secondsPerMile: number): string {
  const m = Math.floor(secondsPerMile / 60)
  const s = secondsPerMile % 60
  return `${m}:${String(s).padStart(2, '0')} /mi`
}

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

export function activityLabel(type: ActivityType): string {
  const labels: Record<ActivityType, string> = {
    run: 'Run',
    trail: 'Trail run',
    ride: 'Ride',
    hike: 'Hike',
  }
  return labels[type]
}
