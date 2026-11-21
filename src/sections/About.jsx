import { useLang } from '../hooks/useLang.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

export default function About() {
  const { t } = useLang()
  return (
    <>

<section className="pg" data-page="about"><div className="container"><SectionTitle en="About me" fr="À propos de moi" />
<div className="grid2"><article className="glass pad reveal"><h3>Français</h3><p>Je suis étudiante en deuxième année de Développement Digital, option Full Stack, à l'ISTA Cité de l'Air. Passionnée par le développement web, je m'intéresse à la création d'applications modernes, intuitives et adaptées aux besoins des utilisateurs.</p><p>J'aime transformer les idées en solutions digitales concrètes, apprendre de nouvelles technologies et relever de nouveaux défis.</p></article>
<article className="glass pad reveal"><h3>English</h3><p>I'm a second-year Digital Development student specializing in Full Stack Development at ISTA Cité de l'Air. Passionate about web development, I enjoy creating modern, intuitive and user-friendly applications.</p><p>I love turning ideas into practical digital solutions, exploring new technologies and taking on new challenges.</p></article></div>
<div className="grid3">
<article className="glass pad reveal"><h3><span className="en">Academic journey</span><span className="fr">Parcours</span></h3><p><span className="en">Digital Development, Full Stack track, at ISTA Cité de l'Air (OFPPT), El Jadida.</span><span className="fr">Développement Digital, option Full Stack, à l'ISTA Cité de l'Air (OFPPT), El Jadida.</span></p></article>
<article className="glass pad reveal"><h3><span className="en">Objectives</span><span className="fr">Objectifs</span></h3><p><span className="en">Find internship opportunities, take on client projects and collaborate with professionals.</span><span className="fr">Trouver des stages, réaliser des projets pour des clients et collaborer avec des professionnels.</span></p></article>
<article className="glass pad reveal"><h3><span className="en">Interests</span><span className="fr">Centres d'intérêt</span></h3><p><span className="en">Web development and learning new technologies. More interests: to be added.</span><span className="fr">Développement web et apprentissage de nouvelles technologies. Autres centres d'intérêt : à ajouter.</span></p></article></div>
<div className="glass pad reveal"><h3><span className="en">Professional qualities</span><span className="fr">Qualités professionnelles</span></h3><ul className="chips"><li><span className="en">Teamwork</span><span className="fr">Travail d'équipe</span></li><li>Leadership</li><li><span className="en">Organization</span><span className="fr">Organisation</span></li><li>Communication</li><li><span className="en">Initiative</span><span className="fr">Initiative</span></li></ul></div>
</div></section>
    </>
  )
}
