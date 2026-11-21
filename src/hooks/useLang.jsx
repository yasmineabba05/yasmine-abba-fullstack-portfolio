import { createContext, useCallback, useContext, useState } from 'react'
import { translations } from '../data/translations.js'

const Ctx = createContext(null)
const KEY = 'ya-lang'

function readLang() {
  let l = 'en'
  try { l = localStorage.getItem(KEY) || (navigator.language.startsWith('fr') ? 'fr' : 'en') } catch {}
  return l === 'fr' ? 'fr' : 'en'
}

export function LangProvider({ children }) {
  const [lang, set] = useState(() => { const l = readLang(); document.documentElement.lang = l; return l })
  const setLang = useCallback((l) => {
    document.documentElement.lang = l
    try { localStorage.setItem(KEY, l) } catch {}
    set(l)
  }, [])
  const t = useCallback((k) => (translations[lang] && translations[lang][k]) || translations.en[k] || k, [lang])
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
export const T = ({ en, fr }) => <><span className="en">{en}</span><span className="fr">{fr}</span></>
