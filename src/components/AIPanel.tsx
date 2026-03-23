import { Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Insight } from '@/types'

interface Props {
  insights: Insight[]
  chatMessages: { role: 'user' | 'ai'; text: string }[]
  chatInput: string
  setChatInput: (v: string) => void
  onSend: () => void
}

const insightStyle: Record<Insight['type'], string> = {
  warning: 'bg-amber-900/30 border-amber-700/40',
  positive: 'bg-forest-900/40 border-forest-700/40',
  neutral: 'bg-stone-800/60 border-stone-700/30',
}

const insightLabel: Record<Insight['type'], string> = {
  warning: 'text-amber-400',
  positive: 'text-forest-400',
  neutral: 'text-stone-500',
}

const insightBody: Record<Insight['type'], string> = {
  warning: 'text-amber-100/80',
  positive: 'text-forest-100/80',
  neutral: 'text-stone-300',
}

export function AIPanel({ insights, chatMessages, chatInput, setChatInput, onSend }: Props) {
  return (
    <aside className="flex flex-col border-l border-stone-800/40 bg-stone-900">
      <div className="px-4 py-4 border-b border-stone-800/40 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
        <span className="text-[12px] font-mono text-stone-400 uppercase tracking-wider">
          AI Coach
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        {insights.map(insight => (
          <div
            key={insight.id}
            className={cn(
              'rounded-lg border px-3.5 py-3',
              insightStyle[insight.type]
            )}
          >
            <p className={cn('text-[10px] font-mono uppercase tracking-wider mb-1', insightLabel[insight.type])}>
              {insight.category}
            </p>
            <p className="text-[12px] font-medium text-stone-200 mb-1">{insight.title}</p>
            <p className={cn('text-[12px] leading-relaxed', insightBody[insight.type])}>
              {insight.body}
            </p>
          </div>
        ))}

        {chatMessages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              'rounded-lg px-3.5 py-3 text-[12px] leading-relaxed',
              msg.role === 'user'
                ? 'bg-stone-700/50 text-stone-200 ml-4'
                : 'bg-stone-800/60 border border-stone-700/30 text-stone-300'
            )}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="px-4 py-3 border-t border-stone-800/40 flex gap-2">
        <input
          type="text"
          value={chatInput}
          onChange={e => setChatInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSend()}
          placeholder="Ask about your training…"
          className="flex-1 bg-stone-800/60 border border-stone-700/40 rounded-lg px-3 py-2 text-[12px] text-stone-200 placeholder:text-stone-600 font-mono outline-none focus:border-forest-600/60 transition-colors"
        />
        <button
          onClick={onSend}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-forest-700/60 hover:bg-forest-600/60 border border-forest-600/40 text-forest-300 transition-colors"
        >
          <Send size={13} />
        </button>
      </div>
    </aside>
  )
}
