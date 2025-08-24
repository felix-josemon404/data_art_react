import { createPortal } from 'react-dom'
import { useEffect, useRef } from 'react'

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
  const modalRef = useRef<HTMLDivElement>(null)
  const lastActiveRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!event) return

    // Save the element that had focus before modal opened
    lastActiveRef.current = document.activeElement as HTMLElement

    // Focus the first focusable element inside modal
    const focusableEls = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    focusableEls?.[0]?.focus()

    // Trap focus and handle Esc
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
      if (e.key === 'Tab' && focusableEls) {
        const first = focusableEls[0]
        const last = focusableEls[focusableEls.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)

    return () => {
      document.removeEventListener('keydown', handleKey)
      // Return focus to last active element when modal closes
      lastActiveRef.current?.focus()
    }
  }, [event, onClose])

  if (!event) return null
  const modalRoot = document.getElementById('modal-root') || document.body

  const modal = (
    <div className="modal" onClick={(e) => e.currentTarget === e.target && onClose()}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
      >
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