import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { useLang } from '../i18n'
import { Words } from './Reveal'
import Portrait from './Portrait'

export default function Hero() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const D = reduce ? 0 : 0.95 // wait for the curtain
  const fade = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: D + delay, ease: [0.22, 1, 0.36, 1] },
  })
  const firstCount = t.hero.h1.split(' ').length

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true"><span /></div>

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...fade(0)}>
            <span className="dot" aria-hidden="true" />
            {t.hero.eyebrow}
            <em>/ {t.hero.role}</em>
          </motion.p>

          <h1 className="hero-h1">
            <Words text={t.hero.h1} animateOn="load" delay={D + 0.1} />{' '}
            <Words text={t.hero.h1hl} animateOn="load" delay={D + 0.1 + firstCount * 0.055} hl />
          </h1>

          <motion.p className="hero-intro" {...fade(0.55)}>{t.hero.intro}</motion.p>

          <motion.div className="hero-cta" {...fade(0.7)}>
            <a className="btn btn-primary" href="#work">
              <span>{t.hero.explore}</span>
              <ArrowDownRight size={18} aria-hidden="true" className="flip" />
            </a>
            <a className="btn btn-ghost" href="#contact">{t.hero.contact}</a>
          </motion.div>

          <motion.p className="avail" {...fade(0.85)}>
            <span className="pulse" aria-hidden="true" />
            {t.hero.avail}
          </motion.p>
        </div>

        <Portrait />
      </div>

      <div className="wrap hero-foot">
        <span className="scroll"><i aria-hidden="true" />{t.hero.scroll}</span>
        <span className="mono">{t.hero.place}</span>
      </div>
    </section>
  )
}
