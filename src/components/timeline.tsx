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
}

export default function Timeline({ events, onSelect }: TimelineProps) {
  return (
    <section id="timeline" className="timeline-grid">
      {events.map((ev, idx) => (
        <EventMarker key={idx} event={ev} onClick={() => onSelect(ev)} />
      ))}
    </section>
  )
}