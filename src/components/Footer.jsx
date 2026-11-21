import { useLang } from '../hooks/useLang.jsx'
import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="fmain">
          <div className="fbrand">
            <strong>YA — Yasmine Abba</strong>
            <p>{t('footer.tag')}</p>
            <p>{t('footer.role')}</p>
          </div>
          <SocialLinks variant="footer" />
        </div>
        <small className="fcopy">{t('footer.rights')}</small>
      </div>
    </footer>
  )
}
