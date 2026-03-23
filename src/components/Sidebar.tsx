import { BarChart2, Activity, Zap, Flag, UploadCloud } from 'lucide-react'
import { cn } from '@/lib/utils'

type Section = 'overview' | 'activities' | 'load' | 'race' | 'import'

interface Props {
  active: Section
  onNavigate: (s: Section) => void
}

const nav: { id: Section; label: string; Icon: typeof BarChart2 }[] = [
  { id: 'overview',    label: 'Overview',       Icon: BarChart2 },
  { id: 'activities',  label: 'Activities',     Icon: Activity  },
  { id: 'load',        label: 'Load & recovery',Icon: Zap       },
  { id: 'race',        label: 'Race planner',   Icon: Flag      },
  { id: 'import',      label: 'Import data',    Icon: UploadCloud},
]

export function Sidebar({ active, onNavigate }: Props) {
  return (
    <aside className="flex flex-col border-r border-stone-800/40 bg-stone-900">
      <div className="px-5 py-5 border-b border-stone-800/40">
        <p className="font-mono text-[11px] tracking-widest text-forest-400 uppercase">
          Training
        </p>
        <p className="font-mono text-[11px] tracking-widest text-forest-400 uppercase">
          Analyzer
        </p>
      </div>

      <nav className="flex-1 py-3">
        {nav.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={cn(
              'w-full flex items-center gap-3 px-5 py-2.5 text-left text-[13px] transition-colors',
              active === id
                ? 'text-forest-300 bg-forest-900/40 border-r-2 border-forest-400'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/40'
            )}
          >
            <Icon size={14} strokeWidth={1.5} />
            {label}
          </button>
        ))}
      </nav>

      <div className="px-5 py-4 border-t border-stone-800/40">
        <p className="text-[11px] text-stone-600 uppercase tracking-wider mb-1">Connected</p>
        <p className="text-[12px] text-stone-400 font-mono">TrainingPeaks · Strava</p>
      </div>
    </aside>
  )
}
