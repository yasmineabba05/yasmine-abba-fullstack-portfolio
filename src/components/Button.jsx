import { Link } from 'react-router-dom'

// variant : "primary" | "ghost" — "to" = page interne, "href" = lien externe, sinon <button>
export default function Button({ variant = 'primary', to, href, children, ...rest }) {
  const cls = 'btn btn-' + variant
  if (to) return <Link className={cls} to={to} {...rest}>{children}</Link>
  if (href) return <a className={cls} href={href} target="_blank" rel="noopener" {...rest}>{children}</a>
  return <button type="button" className={cls} {...rest}>{children}</button>
}
