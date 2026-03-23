import { cn, formatPace, formatDuration, formatDate, activityLabel } from '@/lib/utils'
import type { Activity } from '@/types'

interface Props {
  activity: Activity
  selected: boolean
  onClick: () => void
}

const typeColors: Record<Activity['type'], string> = {
  run:   'bg-forest-900/60 text-forest-300 border-forest-700/40',
  trail: 'bg-amber-900/40 text-amber-300 border-amber-700/40',
  ride:  'bg-blue-900/40 text-blue-300 border-blue-700/40',
  hike:  'bg-stone-800 text-stone-300 border-stone-700/40',
}

const typeGlyph: Record<Activity['type'], string> = {
  run:   '⟁',
  trail: '↑',
  ride:  '○',
  hike:  '△',
}

const tagStyle: Record<string, string> = {
  'recovery-risk': 'bg-amber-900/60 text-amber-300 border border-amber-700/40',
  'on-plan':       'bg-forest-900/60 text-forest-400 border border-forest-700/40',
}

export function ActivityCard({ activity, selected, onClick }: Props) {
  const isRide = activity.type === 'ride'
  const stat = isRide
    ? `${activity.speed?.toFixed(1)} mph`
    : formatPace(activity.pace ?? 0)
  const sub = isRide
    ? `${activity.power}W NP`
    : `HR ${activity.avgHr} avg`

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left rounded-lg border px-4 py-3 transition-all',
        'grid items-center gap-4',
        selected
          ? 'bg-stone-800 border-forest-600/60'
          : 'bg-stone-900/60 border-stone-800/50 hover:bg-stone-800/60 hover:border-stone-700/50'
      )}
      style={{ gridTemplateColumns: '36px 1fr auto' }}
    >
      <div
        className={cn(
          'w-9 h-9 rounded-full flex items-center justify-center text-sm font-mono border',
          typeColors[activity.type]
        )}
      >
        {typeGlyph[activity.type]}
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[13px] font-medium text-stone-100 truncate">
            {activity.title}
          </span>
          {activity.tags?.map(tag => (
            <span key={tag} className={cn('text-[10px] px-2 py-0.5 rounded-full font-mono', tagStyle[tag])}>
              {tag.replace('-', ' ')}
            </span>
          ))}
        </div>
        <p className="text-[11px] text-stone-500 mt-0.5 font-mono">
          {formatDate(activity.date)} · {activity.distance} mi · {formatDuration(activity.duration)} · {activityLabel(activity.type)}
        </p>
      </div>

      <div className="text-right shrink-0">
        <p className="font-mono text-[13px] text-stone-200">{stat}</p>
        <p className="font-mono text-[11px] text-stone-500">{sub}</p>
      </div>
    </button>
  )
}
