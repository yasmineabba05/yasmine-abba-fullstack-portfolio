import { useCallback, useEffect, useState } from 'react'

// Thème clair / sombre : mémorisé dans localStorage ("ya-theme"), appliqué via <html data-theme>
export default function useTheme() {
  const [theme, setTheme] = useState(() => (document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'))

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#FBF9FF' : '#08070D')
  }, [theme])

  const toggleTheme = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light'
    const r = document.documentElement
    r.classList.add('theme-anim')
    setTheme(next)
    try { localStorage.setItem('ya-theme', next) } catch {}
    setTimeout(() => r.classList.remove('theme-anim'), 400)
  }, [theme])

  return { theme, toggleTheme }
}
export { useTheme }
