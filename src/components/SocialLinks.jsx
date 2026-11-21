// Liens sociaux : variant "hero" (icônes rondes) ou "footer" (boutons avec nom)
const GITHUB = 'https://github.com/yasmineabba05'
const LINKEDIN = 'https://www.linkedin.com/in/yasmine-abba-02062634b/'
// Ouvre directement un nouveau message Gmail
export const EMAIL_LINK = 'https://mail.google.com/mail/?view=cm&fs=1&to=abbayasmine1@gmail.com'

const GH_PATH = "M12 .5A11.5 11.5 0 0 0 .5 12c0 5.100 3.300 9.400 7.900 10.900.6.100.8-.3.8-.6v-2c-3.200.7-3.900-1.500-3.900-1.500-.5-1.300-1.300-1.700-1.300-1.700-1-.7.100-.7.100-.7 1.200.1 1.800 1.200 1.800 1.200 1 1.800 2.800 1.300 3.400 1 .1-.8.4-1.300.8-1.600-2.600-.3-5.300-1.300-5.300-5.700 0-1.300.5-2.300 1.200-3.100-.1-.3-.5-1.500.1-3.100 0 0 1-.3 3.200 1.200a11 11 0 0 1 5.800 0c2.200-1.500 3.200-1.200 3.200-1.200.6 1.600.2 2.800.1 3.100.8.8 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.400.8 1.100.8 2.200v3.200c0 .3.2.7.8.6A11.500 11.500 0 0 0 23.500 12 11.500 11.500 0 0 0 12 .5z"
const LI_PATH = "M4.900 3.500a2.400 2.400 0 1 1 0 4.800 2.400 2.400 0 0 1 0-4.800zM3 9.500h3.800V21H3zM9.200 9.500h3.600v1.600c.5-.9 1.800-1.900 3.700-1.900 3.900 0 4.500 2.500 4.500 5.800V21h-3.800v-5.200c0-1.300 0-2.900-1.800-2.900s-2 1.400-2 2.800V21H9.200z"

const Mail = () => (
  <svg className="line" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
  </svg>
)
const Brand = ({ d, filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : undefined} aria-hidden="true"><path d={d} /></svg>
)

export default function SocialLinks({ variant = 'hero' }) {
  const items = [
    { name: 'GitHub', href: GITHUB, icon: (f) => <Brand d={GH_PATH} filled={f} /> },
    { name: 'LinkedIn', href: LINKEDIN, icon: (f) => <Brand d={LI_PATH} filled={f} /> },
    { name: 'Email', href: EMAIL_LINK, icon: () => <Mail /> },
  ]
  if (variant === 'footer') {
    return (
      <ul className="fsocial">
        {items.map((s) => (
          <li key={s.name}><a href={s.href} target="_blank" rel="noopener" aria-label={s.name}>{s.icon(true)}<span>{s.name}</span></a></li>
        ))}
      </ul>
    )
  }
  return (
    <div className="social-row">
      {items.map((s) => (
        <a key={s.name} href={s.href} target="_blank" rel="noopener" aria-label={s.name}>{s.icon(false)}</a>
      ))}
    </div>
  )
}
