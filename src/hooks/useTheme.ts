import { useEffect, useState } from 'react'

interface ThemeHook {
  dark: boolean
  setDark: (dark: boolean) => void
}

export function useTheme(): ThemeHook {
  const [dark, setDark] = useState(() => {
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })

  useEffect(() => {
    document.body.classList.toggle('dark-theme', dark)
  }, [dark])

  return { dark, setDark }
}