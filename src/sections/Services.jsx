import { T } from '../hooks/useLang.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'
import { EMAIL_LINK } from '../components/SocialLinks.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <section className="pg" data-page="services">
      <div className="container">
        <SectionTitle en="Services" fr="Mes services" subEn="What I can offer for your next project." subFr="Ce que je peux vous proposer pour votre prochain projet." />
        <div className="grid3 svcs">
          {services.map(([icon, en, fr, dEn, dFr]) => (
            <article className="glass pad svc reveal" key={en}>
              <div className="ic" aria-hidden="true">{icon}</div>
              <h3><T en={en} fr={fr} /></h3>
              <p><T en={dEn} fr={dFr} /></p>
              <Button variant="ghost" href={EMAIL_LINK + '&su=Projet%20web'}><T en="Discuss a project" fr="Discuter d'un projet" /></Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
