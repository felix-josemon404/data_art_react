interface Event {
  title: string
  year: string | number
  description: string
  imageURL: string
}

interface EventMarkerProps {
  event: Event
  onClick: () => void
  isActive?: boolean
}

export default function EventMarker({ event, onClick, isActive = false }: EventMarkerProps) {
  return (
    <div
      className="timeline-event"
      role="button"
      tabIndex={0}
      aria-current={isActive}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
    >
      <div className="event-dot" aria-hidden="true"></div>
      <h3>{event.title}</h3>
      <p className="muted">{event.year}</p>
      <img src={event.imageURL} alt={event.title} loading="lazy" />
    </div>
  )
}