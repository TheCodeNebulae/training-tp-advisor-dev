import { TrendingUp, TrendingDown } from 'lucide-react'
import type { WeekMetrics } from '@/types'

interface Props {
  metrics: WeekMetrics
}

export function MetricsRow({ metrics }: Props) {
  const cards = [
    {
      label: 'Weekly volume',
      value: `${metrics.volume} mi`,
      sub: `${metrics.volumeChange > 0 ? '+' : ''}${metrics.volumeChange} from last week`,
      trend: metrics.volumeChange > 0 ? 'up' : 'down',
    },
    {
      label: 'TSS',
      value: metrics.tss,
      sub: `↑ ${metrics.tssChange}% — elevated`,
      trend: 'warn' as const,
    },
    {
      label: 'Avg HR',
      value: `${metrics.avgHr} bpm`,
      sub: 'Zone 2 target hit',
      trend: 'up',
    },
    {
      label: 'Long run',
      value: `${metrics.longRun} mi`,
      sub: 'Sat — Stone Mtn trail',
      trend: 'neutral',
    },
  ] as const

  return (
    <div className="grid grid-cols-4 gap-3 px-5 py-4 border-b border-stone-800/40">
      {cards.map(card => (
        <div
          key={card.label}
          className="bg-stone-800/50 rounded-lg px-4 py-3 border border-stone-700/30"
        >
          <p className="text-[11px] uppercase tracking-wider text-stone-500 mb-1">
            {card.label}
          </p>
          <p className="font-mono text-xl text-stone-100">{card.value}</p>
          <p
            className={[
              'text-[11px] mt-1 flex items-center gap-1',
              card.trend === 'up'      ? 'text-forest-400' :
              card.trend === 'down'    ? 'text-red-400'    :
              card.trend === 'warn'    ? 'text-amber-400'  :
              'text-stone-500',
            ].join(' ')}
          >
            {card.trend === 'up'   && <TrendingUp size={10} />}
            {card.trend === 'down' && <TrendingDown size={10} />}
            {card.sub}
          </p>
        </div>
      ))}
    </div>
  )
}
