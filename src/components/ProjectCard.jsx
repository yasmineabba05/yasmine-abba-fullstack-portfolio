import { T } from '../hooks/useLang.jsx'
import Button from './Button.jsx'

const hide = (e) => { e.currentTarget.style.display = 'none' }

export default function ProjectCard({ project: x, hidden, onOpen }) {
  return (
    <article className="glass card reveal" data-cat={x.cat} hidden={hidden}>
      <div className="shot" aria-hidden="true">{x.short}<img src={`images/projects/${x.id}.png`} alt="" loading="lazy" onError={hide} /></div>
      <div className="cb">
        <span className="tag"><T en={x.tag[0]} fr={x.tag[1]} /></span>
        <h3>{x.name}</h3>
        <p><T en={x.desc[0]} fr={x.desc[1]} /></p>
        <p className="tech">{x.tech || <T en="Technologies: to be added" fr="Technologies : à ajouter" />}</p>
        <div className="row">
          <Button data-open={x.id} onClick={() => onOpen(x.id)}><T en="View Project" fr="Voir le projet" /></Button>
          <span className="soft"><T en="Live demo / GitHub: link to add" fr="Démo / GitHub : lien à ajouter" /></span>
        </div>
      </div>
    </article>
  )
}
