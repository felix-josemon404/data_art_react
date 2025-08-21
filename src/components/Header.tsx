import { useTheme } from '../hooks/useTheme.ts'

interface HeaderProps {
  onToggleFilters: () => void
}

export default function Header({ onToggleFilters }: HeaderProps) {
  const { dark, setDark } = useTheme()

  return (
    <header className="app-header">
      <div className="logo-wrap">
        <div className="logo-dot" aria-hidden>📺</div>
        <h1>Evolution of TV</h1>
      </div>
      <div className="header-actions">
        <button onClick={() => setDark(!dark)} aria-pressed={dark}>
          {dark ? 'Light' : 'Dark'} Theme
        </button>
        <button className="ghost" onClick={onToggleFilters}>Filters</button>
      </div>
    </header>
  )
}