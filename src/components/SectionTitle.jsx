import { T } from '../hooks/useLang.jsx'

export default function SectionTitle({ en, fr, subEn, subFr }) {
  return (
    <header className="ph reveal">
      <h2><T en={en} fr={fr} /></h2>
      {subEn && <p><T en={subEn} fr={subFr} /></p>}
    </header>
  )
}
