interface FilterPanelProps {
  onClose: () => void
  onBookmark: () => void
}

export default function FilterPanel({ onClose, onBookmark }: FilterPanelProps) {
  return (
    <aside className="filter-panel">
      <div className="filter-header">
        <h2>Filters (coming soon)</h2>
        <button className="close" onClick={onClose} aria-label="Close">×</button>
      </div>
      <div className="filter-body">
        <p>Add category filters and bookmarks later.</p>
        <button onClick={onBookmark}>Bookmark current selection</button>
      </div>
    </aside>
  )
}