import { useState } from 'react'
import { mockActivities, weekMetrics, mockInsights } from '@/data/mockData'

export function useTraining() {
  const [activities] = useState(mockActivities)
  const [selectedId, setSelectedId] = useState<string>(mockActivities[0].id)
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([])

  const selectedActivity = activities.find(a => a.id === selectedId) ?? activities[0]

  function sendMessage() {
    const text = chatInput.trim()
    if (!text) return
    setChatMessages(prev => [
      ...prev,
      { role: 'user', text },
      { role: 'ai', text: 'AI analysis coming soon — API integration is the next step.' },
    ])
    setChatInput('')
  }

  return {
    activities,
    selectedActivity,
    selectedId,
    setSelectedId,
    metrics: weekMetrics,
    insights: mockInsights,
    chatInput,
    setChatInput,
    chatMessages,
    sendMessage,
  }
}
