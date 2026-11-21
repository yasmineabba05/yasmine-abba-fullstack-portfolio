import SectionTitle from '../components/SectionTitle.jsx'
import SkillCard from '../components/SkillCard.jsx'
import { skills } from '../data/skills.js'

export default function Skills() {
  return (
    <section className="pg" data-page="skills">
      <div className="container">
        <SectionTitle en="Skills" fr="Compétences" subEn="The technologies I work with." subFr="Les technologies que j'utilise." />
        <div className="grid2">
          {skills.map((c) => (<SkillCard key={c.title} {...c} />))}
        </div>
      </div>
    </section>
  )
}
