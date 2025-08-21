interface Event {
  title: string
  year: string | number
  description: string
  imageURL: string
}

interface EventMarkerProps {
  event: Event
  onClick: () => void
}

export default function EventMarker({ event, onClick }: EventMarkerProps) {
  return (
    <div
      className="timeline-event"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="event-dot" aria-hidden></div>
      <h3>{event.title}</h3>
      <p className="muted">{event.year}</p>
      <img src={event.imageURL} alt={event.title} loading="lazy" />
    </div>
  )
}