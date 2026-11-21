import SectionTitle from '../components/SectionTitle.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { T } from '../hooks/useLang.jsx'

// Section Contact : prête à l'emploi mais NON affichée (la page Contact a été retirée du site).
// Pour la remettre : importer ce composant dans src/App.jsx, ajouter une <Route path="contact" /> et un lien dans Navbar.jsx.
export default function Contact() {
  return (
    <section className="pg" data-page="contact">
      <div className="container">
        <SectionTitle en="Contact" fr="Contact" subEn="Have a project or an opportunity? Let's talk." subFr="Un projet ou une opportunité ? Parlons-en." />
        <div className="glass pad reveal">
          <p><T en="Reach me directly:" fr="Me contacter directement :" /></p>
          <SocialLinks variant="footer" />
        </div>
      </div>
    </section>
  )
}
