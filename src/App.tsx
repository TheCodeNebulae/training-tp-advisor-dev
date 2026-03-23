import { useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { MetricsRow } from '@/components/MetricsRow'
import { ActivityCard } from '@/components/ActivityCard'
import { AIPanel } from '@/components/AIPanel'
import { useTraining } from '@/hooks/useTraining'

type Section = 'overview' | 'activities' | 'load' | 'race' | 'import'

export default function App() {
  const [section, setSection] = useState<Section>('overview')
  const {
    activities,
    selectedId,
    setSelectedId,
    metrics,
    insights,
    chatMessages,
    chatInput,
    setChatInput,
    sendMessage,
  } = useTraining()

  return (
    <div className="h-screen bg-stone-950 flex flex-col">
      <div
        className="flex-1 overflow-hidden"
        style={{ display: 'grid', gridTemplateColumns: '200px 1fr 280px' }}
      >
        <Sidebar active={section} onNavigate={setSection} />

        <main className="flex flex-col overflow-hidden bg-stone-950">
          <header className="flex items-center justify-between px-5 py-4 border-b border-stone-800/40 bg-stone-900/60">
            <h1 className="text-[14px] font-medium text-stone-100">This week</h1>
            <span className="font-mono text-[11px] text-stone-500 bg-stone-800 px-3 py-1 rounded-md border border-stone-700/30">
              Mar 17 – Mar 23, 2026
            </span>
          </header>

          <MetricsRow metrics={metrics} />

          <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-2.5">
            {activities.map(activity => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                selected={activity.id === selectedId}
                onClick={() => setSelectedId(activity.id)}
              />
            ))}
          </div>
        </main>

        <AIPanel
          insights={insights}
          chatMessages={chatMessages}
          chatInput={chatInput}
          setChatInput={setChatInput}
          onSend={sendMessage}
        />
      </div>
    </div>
  )
}
