import { useLang } from '../hooks/useLang.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { useEffect } from 'react'
import Button from '../components/Button.jsx'
import SocialLinks from '../components/SocialLinks.jsx'

const hide = (e) => { e.currentTarget.style.display = 'none' }

export default function Hero() {
  const { t } = useLang()
  useEffect(() => {
    const wrap = document.querySelector('.photo-wrap')
    if (!wrap || matchMedia('(prefers-reduced-motion:reduce)').matches || !matchMedia('(hover:hover)').matches) return
    const move = (e) => { wrap.style.transform = `rotateY(${(e.clientX / innerWidth - 0.5) * 10}deg) rotateX(${(e.clientY / innerHeight - 0.5) * -10}deg)` }
    addEventListener('mousemove', move, { passive: true })
    return () => removeEventListener('mousemove', move)
  }, [])
  return (
    <>

<section className="hero"><div className="container">
  <div>
    <p className="hello">{t("home.hello")}</p>
    <h1><span className="line"><span>{t("home.l1")}</span></span><span className="line"><span>{t("home.l2")}</span></span><span className="line"><span>{t("home.l3")}</span></span></h1>
    <p className="subtitle">{t("home.sub")}</p>
    <p className="intro">{t("home.intro")}</p>
    <div className="cta">
      <Button to="/projects">{t("home.explore")}</Button>
      
    </div>
    <SocialLinks variant="hero" />
  </div>
  <div className="photo-wrap"><div className="photo-glow" aria-hidden="true"></div><div className="ring r2" aria-hidden="true"></div>
<figure className="photo"><img src="images/profile.png" alt="Yasmine Abba" width="440" height="550" fetchPriority="high" onError={hide} /><figcaption className="ph-fallback"><b>YA</b><span><span className="en">Your photo goes here: assets/images/yasmine.jpg</span><span className="fr">Ta photo ici : assets/images/yasmine.jpg</span></span></figcaption></figure>
<span className="corner c1" aria-hidden="true"></span><span className="corner c2" aria-hidden="true"></span><span className="badge"><span className="en">Digital Development · Full Stack</span><span className="fr">Développement Digital · Full Stack</span></span></div>
</div></section>
    </>
  )
}
