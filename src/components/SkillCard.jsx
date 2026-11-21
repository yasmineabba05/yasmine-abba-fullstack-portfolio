export default function SkillCard({ title, items }) {
  return (
    <article className="glass pad reveal">
      <h3>{title}</h3>
      <ul className="skills">
        {items.map((s) => (<li key={s}><i>{s.slice(0, 2)}</i>{s}</li>))}
      </ul>
    </article>
  )
}
