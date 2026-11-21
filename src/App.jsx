import { useEffect, useRef, useState } from 'react'
import { HashRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { useLang } from './hooks/useLang.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Services from './sections/Services.jsx'

const keyOf = (p) => (p === '/' ? 'home' : p.slice(1))
const reduce = () => matchMedia('(prefers-reduced-motion:reduce)').matches

function Shell() {
  const { t } = useLang()
  const { pathname } = useLocation()
  const [loaded, setLoaded] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const curRef = useRef(null)

  // titre + description (suivent la langue)
  useEffect(() => {
    const k = keyOf(pathname)
    document.body.dataset.page = k
    document.title = t(k + '.title')
    document.querySelector('meta[name="description"]')?.setAttribute('content', t(k + '.desc'))
  }, [pathname, t])

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  // apparition au scroll
  useEffect(() => {
    const els = [...document.querySelectorAll('.reveal')]
    if (reduce()) { els.forEach((e) => e.classList.add('in')); return }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.15 })
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [pathname])

  useEffect(() => {
    const on = () => setShowTop(scrollY > 600)
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    const hide = () => setTimeout(() => setLoaded(true), reduce() ? 0 : 350)
    if (document.readyState === 'complete') hide()
    else addEventListener('load', hide, { once: true })
  }, [])

  // curseur personnalisé (desktop)
  useEffect(() => {
    const c = curRef.current
    if (!c || reduce() || !matchMedia('(hover:hover) and (pointer:fine)').matches) return
    c.classList.add('on')
    const move = (e) => { c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px' }
    const over = (e) => c.classList.toggle('hover', !!e.target.closest('a,button'))
    addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', over)
    return () => { removeEventListener('mousemove', move); document.removeEventListener('mouseover', over) }
  }, [])

  return (
    <>
      <div className={'loader' + (loaded ? ' done' : '')} aria-hidden="true"><b>YA</b></div>
      <div className="cursor" ref={curRef} aria-hidden="true" />
      <div className="page-bg" aria-hidden="true" />
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus() }}>{t('skip')}</a>
      <Navbar />
      <main id="main" tabIndex={-1} key={pathname}><Outlet /></main>
      <Footer />
      <button className={'to-top' + (showTop ? ' show' : '')} aria-label={t('top')} onClick={() => scrollTo({ top: 0 })}>↑</button>
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
