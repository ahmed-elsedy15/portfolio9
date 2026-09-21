import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react'
import { dict } from './content'

const LangCtx = createContext(null)
const KEY = 'portfolio-lang'

export function LangProvider({ children }) {
  // English is the default; a previous manual choice is remembered.
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem(KEY)
      if (saved === 'ar' || saved === 'en') return saved
    } catch {}
    return 'en'
  })

  useLayoutEffect(() => {
    const el = document.documentElement
    el.lang = lang
    el.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = dict[lang].meta.title
    try { localStorage.setItem(KEY, lang) } catch {}
  }, [lang])

  const toggle = useCallback(() => setLang((l) => (l === 'en' ? 'ar' : 'en')), [])
  const value = useMemo(() => ({ lang, isRTL: lang === 'ar', t: dict[lang], toggle }), [lang, toggle])
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>
}

export const useLang = () => useContext(LangCtx)
