import { useEffect, useState } from 'react'
import Header from './components/Header.tsx'
import Timeline from './components/timeline.tsx'
import EventModal from './components/EventModal.tsx'
import FilterPanel from './components/FilterPanel.tsx'

interface Event {
  title: string
  year: string | number
  description: string
  imageURL: string
}

const EVENTS_URL = './events.json'

export default function App() {
  const [events, setEvents] = useState<Event[]>([])
  const [selected, setSelected] = useState<Event | null>(null)
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    fetch(EVENTS_URL)
      .then((r) => r.json())
      .then((data: Event[]) => setEvents(data))
      .catch((e: Error) => console.error('Error loading events:', e))
  }, [])

  return (
    <div>
      <Header onToggleFilters={() => setFiltersOpen((v) => !v)} />

      <main className="container">
        {filtersOpen && (
          <FilterPanel
            onClose={() => setFiltersOpen(false)}
            onBookmark={() => alert('Bookmarks coming soon!')}
          />
        )}

        <nav className="subhead">
          <p>The years and timeline</p>
        </nav>

        <Timeline 
          events={events} 
          onSelect={(ev) => setSelected(ev)}
          selectedEvent={selected}
        />
      </main>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </div>
  )
}