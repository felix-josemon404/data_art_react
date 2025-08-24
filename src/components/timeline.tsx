import EventMarker from './EventMarker'

interface Event {
  title: string
  year: string | number
  description: string
  imageURL: string
}

interface TimelineProps {
  events: Event[]
  onSelect: (event: Event) => void
  selectedEvent?: Event | null
}

export default function Timeline({ events, onSelect, selectedEvent }: TimelineProps) {
  return (
    <section id="timeline" className="timeline-grid">
      {events.map((ev, idx) => (
        <EventMarker 
          key={idx} 
          event={ev} 
          onClick={() => onSelect(ev)}
          isActive={selectedEvent?.title === ev.title && selectedEvent?.year === ev.year}
        />
      ))}
    </section>
  )
}