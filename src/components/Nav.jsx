import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useLang } from '../i18n'
import { links } from '../content'
import { asset } from '../hooks'

const IDS = ['work', 'about', 'stack', 'contact']

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const els = IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => io.observe(el))
    const onScroll = () => window.scrollY < 200 && setActive('')
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])
  return active
}

export default function Nav() {
  const { t, lang, toggle } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <a href="#top" className="logo" aria-label={t.nav.home} onClick={() => setOpen(false)}>
          <span>AE</span><i aria-hidden="true" />
        </a>
        <nav className="nav-links" aria-label="Primary">
          {IDS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}>{t.nav[id]}</a>
          ))}
        </nav>
        <div className="nav-end">
          <button type="button" className="lang" onClick={toggle} aria-label={t.nav.langLabel} lang={lang === 'en' ? 'ar' : 'en'}>
            {t.nav.lang}
          </button>
          <a className="btn btn-ghost btn-sm nav-cv" href={asset(links.cv)} download>
            <Download size={15} aria-hidden="true" /> <span>{t.nav.cv}</span>
          </a>
          <button type="button" className="burger" aria-expanded={open} aria-controls="menu" aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu"
            className="menu"
            initial={{ clipPath: 'circle(0% at 50% 0%)' }}
            animate={{ clipPath: 'circle(150% at 50% 0%)' }}
            exit={{ clipPath: 'circle(0% at 50% 0%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile">
              {IDS.map((id, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.25 + i * 0.07, duration: 0.6 } }}
                >
                  <small>0{i + 1}</small>{t.nav[id]}
                </motion.a>
              ))}
            </nav>
            <div className="menu-foot">
              <a className="btn btn-primary" href={asset(links.cv)} download onClick={() => setOpen(false)}>
                <Download size={16} aria-hidden="true" /> {t.nav.cv}
              </a>
              <a className="mono" href={`mailto:${links.email}`}>{links.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
