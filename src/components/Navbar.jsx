import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../hooks/useLang.jsx'
import useTheme from '../hooks/useTheme.js'

const links = [['/', 'nav.home'], ['/about', 'nav.about'], ['/skills', 'nav.skills'], ['/projects', 'nav.projects'], ['/experience', 'nav.experience'], ['/education', 'nav.education'], ['/services', 'nav.services']]

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const { toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const linksRef = useRef(null)
  const indRef = useRef(null)

  useEffect(() => { setOpen(false) }, [pathname])

  // indicateur animé sous le lien actif
  useEffect(() => {
    const place = () => {
      const a = linksRef.current?.querySelector('[aria-current="page"]')
      const ind = indRef.current
      if (!a || !ind) return
      ind.style.left = a.offsetLeft + 'px'
      ind.style.width = a.offsetWidth + 'px'
    }
    place()
    addEventListener('resize', place)
    document.fonts?.ready.then(place)
    return () => removeEventListener('resize', place)
  }, [pathname, lang])

  return (
    <header className="nav">
      <div className="container">
        <NavLink to="/" end className="logo" aria-label="Yasmine Abba, home">Y<span>A</span></NavLink>
        <nav aria-label="Main">
          <ul className={'nav-links' + (open ? ' open' : '')} id="menu" ref={linksRef}>
            {links.map(([to, k]) => (<li key={to}><NavLink to={to} end>{t(k)}</NavLink></li>))}
            <li className="nav-indicator" ref={indRef} aria-hidden="true" />
          </ul>
        </nav>
        <div className="nav-tools">
          <div className="lang" role="group" aria-label="Language">
            <button data-lang="fr" aria-pressed={lang === 'fr'} onClick={() => setLang('fr')}>FR</button>
            <button data-lang="en" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} type="button" aria-label={t("theme")} aria-pressed="false"><svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg><svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>
          <button className="burger" aria-expanded={open} aria-controls="menu" aria-label="Menu" onClick={() => setOpen((o) => !o)}><span /><span /><span /></button>
        </div>
      </div>
    </header>
  )
}
