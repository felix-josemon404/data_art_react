import { createPortal } from 'react-dom'

interface Event {
  title: string
  year: string | number
  description: string
  imageURL: string
}

interface EventModalProps {
  event: Event | null
  onClose: () => void
}

export default function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null
  const modalRoot = document.getElementById('modal-root') || document.body

  const modal = (
    <div className="modal" onClick={(e) => e.currentTarget === e.target && onClose()}>
      <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="close" aria-label="Close" onClick={onClose}>×</button>
        <h2 id="modal-title">{event.title}</h2>
        <p className="muted">{event.year}</p>
        <img src={event.imageURL} alt={event.title} />
        <p>{event.description}</p>
      </div>
    </div>
  )

  return createPortal(modal, modalRoot)
}