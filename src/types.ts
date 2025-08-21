// Shared type definitions for the TV Evolution Timeline app

export interface Event {
  title: string
  year: string | number
  description: string
  imageURL: string
}

export interface EventModalProps {
  event: Event | null
  onClose: () => void
}

export interface EventMarkerProps {
  event: Event
  onClick: () => void
}

export interface FilterPanelProps {
  onClose: () => void
  onBookmark: () => void
}

export interface HeaderProps {
  onToggleFilters: () => void
}

export interface TimelineProps {
  events: Event[]
  onSelect: (event: Event) => void
}

export interface ThemeHook {
  dark: boolean
  setDark: (dark: boolean) => void
}