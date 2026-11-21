import { useLang } from '../hooks/useLang.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

export default function Education() {
  const { t } = useLang()
  return (
    <>

<section className="pg" data-page="education"><div className="container"><SectionTitle en="Education" fr="Formation" /><ol className="tl"><li className="reveal"><div className="glass pad"><span className="tag"><span className="en">Current: 2nd year</span><span className="fr">En cours : 2ᵉ année</span></span><h3>ISTA Cité de l'Air — OFPPT, El Jadida</h3><p><span className="en">Digital Development, Full Stack. Qualification: Technicien Spécialisé (Bac+2).</span><span className="fr">Développement Digital, option Full Stack. Diplôme : Technicien Spécialisé (Bac+2).</span></p></div></li></ol></div></section>
    </>
  )
}
