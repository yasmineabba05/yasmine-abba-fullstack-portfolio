import { useLang } from '../hooks/useLang.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

export default function Experience() {
  const { t } = useLang()
  return (
    <>

<section className="pg" data-page="experience"><div className="container"><SectionTitle en="Experience & engagements" fr="Expérience et engagements" /><ol className="tl"><li className="reveal"><div className="glass pad"><span className="tag"><span className="en">July 2025 · El Jadida</span><span className="fr">Juillet 2025 · El Jadida</span></span><h3>FedEx</h3><p><span className="en">Internship. Details to be added.</span><span className="fr">Stage. Détails à ajouter.</span></p></div></li><li className="reveal"><div className="glass pad"><span className="tag">All Riding Family</span><h3>All Riding Family</h3><p><span className="en">Participation in the association's activities and in Be Careful, 2nd edition.</span><span className="fr">Participation aux activités de l'association et à Be Careful, 2ᵉ édition.</span></p></div></li><li className="reveal"><div className="glass pad"><span className="tag">CAD</span><h3>Club d'Activités Diversifiées (CAD)</h3><p><span className="en">Secretary to the president.</span><span className="fr">Secrétaire du président.</span></p></div></li><li className="reveal"><div className="glass pad"><span className="tag"><span className="en">Institute</span><span className="fr">Institut</span></span><h3><span className="en">Institute Innovation Group</span><span className="fr">Groupe d'Innovation de l'institut</span></h3><p><span className="en">Former president.</span><span className="fr">Ancienne présidente.</span></p></div></li></ol>
<div className="glass pad reveal"><h3><span className="en">What these roles show</span><span className="fr">Ce que ces rôles montrent</span></h3><ul className="chips"><li><span className="en">Teamwork</span><span className="fr">Travail d'équipe</span></li><li>Leadership</li><li><span className="en">Organization</span><span className="fr">Organisation</span></li><li>Communication</li><li><span className="en">Initiative</span><span className="fr">Initiative</span></li></ul></div></div></section>
    </>
  )
}
