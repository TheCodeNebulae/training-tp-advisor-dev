export type ActivityType = 'run' | 'trail' | 'ride' | 'hike'

export interface Activity {
  id: string
  type: ActivityType
  title: string
  date: string // ISO date string
  distance: number // miles
  duration: number // seconds
  avgHr: number
  pace?: number // seconds per mile (runs)
  speed?: number // mph (rides)
  power?: number // normalized watts (rides)
  elevGain?: number // feet
  tss: number
  tags?: string[]
}

export interface WeekMetrics {
  volume: number
  tss: number
  avgHr: number
  longRun: number
  tssChange: number
  volumeChange: number
}

export interface Insight {
  id: string
  type: 'warning' | 'positive' | 'neutral'
  category: string
  title: string
  body: string
}
