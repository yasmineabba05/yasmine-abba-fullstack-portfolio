import { useEffect, useRef, useState } from 'react'
import { T } from '../hooks/useLang.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { filters, projects } from '../data/projects.js'

const hide = (e) => { e.currentTarget.style.display = 'none' }
const TBD = <T en="To be completed" fr="À compléter" />

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)
  const dlg = useRef(null)
  const p = projects.find((x) => x.id === open)

  useEffect(() => {
    const d = dlg.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  return (
    <>
      <section className="pg" data-page="projects">
        <div className="container">
          <SectionTitle en="Projects" fr="Projets" subEn="Selected work." subFr="Sélection de réalisations." />
          <div className="filters" role="group" aria-label="Filter">
            {filters.map(([k, en, fr]) => (
              <button key={k} className={filter === k ? 'on' : ''} data-f={k} onClick={() => setFilter(k)}><T en={en} fr={fr} /></button>
            ))}
          </div>
          <div className="grid2" id="cards">
            {projects.map((x) => (
              <ProjectCard key={x.id} project={x} hidden={filter !== 'all' && x.cat !== filter} onOpen={setOpen} />
            ))}
          </div>
        </div>
      </section>
      <dialog id="modal" ref={dlg} aria-label="Project" onClose={() => setOpen(null)} onClick={(e) => { if (e.target === dlg.current) setOpen(null) }}>
        <button className="x" aria-label="Close" onClick={() => setOpen(null)}>×</button>
        <div id="mbody">
          {p && (
            <>
              <h2>{p.name}</h2>
              <h3><T en="Overview" fr="Présentation" /></h3><p><T en={p.desc[0]} fr={p.desc[1]} /></p>
              <h3><T en="Objectives" fr="Objectifs" /></h3><p>{TBD}</p>
              <h3><T en="Main features" fr="Fonctionnalités principales" /></h3><p>{TBD}</p>
              <h3><T en="Technologies" fr="Technologies" /></h3><p>{p.tech || TBD}</p>
              <h3><T en="Screenshots" fr="Captures d'écran" /></h3>
              <div className="gal">
                <div className="shot"><img src={`images/projects/${p.id}.png`} alt={p.id} loading="lazy" onError={hide} /></div>
                <div className="shot"><T en="Screenshot" fr="Capture" /><img src={`images/projects/${p.id}-2.png`} alt="" loading="lazy" onError={hide} /></div>
              </div>
              <h3><T en="Development process" fr="Processus de développement" /></h3><p>{TBD}</p>
              <p className="soft"><T en="Live demo and source code links: to be added." fr="Liens démo et code source : à ajouter." /></p>
            </>
          )}
        </div>
      </dialog>
    </>
  )
}
