import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../i18n'
import { skillGroups } from '../content'
import { Reveal, Words } from './Reveal'

function place(i, n) {
  const a = ((-90 + (360 / n) * i) * Math.PI) / 180
  const ring = i % 2 ? 0.7 : 1
  return { x: 50 + Math.cos(a) * 35 * ring, y: 50 + Math.sin(a) * 37 * ring }
}

export default function Stack() {
  const { t, lang } = useLang()
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const group = skillGroups[active]
  const n = group.skills.length

  return (
    <section id="stack" className="stack">
      <div className="wrap">
        <header className="sec-head">
          <Reveal as="p" className="label mono"><span>(03)</span> {t.stack.label}</Reveal>
          <h2 className="sec-title"><Words text={t.stack.title} /></h2>
          <Reveal as="p" className="sec-count mono">{t.stack.hint}</Reveal>
        </header>

        <div className="stack-grid">
          <div className="groups" role="tablist" aria-label={t.stack.title}>
            {skillGroups.map((g, i) => (
              <button
                type="button"
                key={g.id}
                role="tab"
                id={`tab-${g.id}`}
                aria-selected={active === i}
                aria-controls="constellation"
                className={`group-btn${active === i ? ' on' : ''}`}
                onClick={() => setActive(i)}
                onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(i)}
                onFocus={() => setActive(i)}
              >
                <small className="mono">0{i + 1}</small>
                <span>{g.name[lang]}</span>
                <em className="mono">{g.skills.length}</em>
              </button>
            ))}
          </div>

          <div className="const" id="constellation" role="tabpanel" aria-labelledby={`tab-${group.id}`}>
            <AnimatePresence mode="wait">
              <motion.div key={group.id + lang} className="const-inner" exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                <svg className="const-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  {group.skills.map((_, i) => {
                    const p = place(i, n)
                    return (
                      <motion.line
                        key={i} x1="50" y1="50" x2={p.x} y2={p.y}
                        vectorEffect="non-scaling-stroke"
                        initial={reduce ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.15 + i * 0.06 }}
                      />
                    )
                  })}
                </svg>
                <motion.div className="const-core" initial={reduce ? false : { scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }}>
                  <span>{group.name[lang]}</span>
                </motion.div>
                <ul className="const-nodes">
                  {group.skills.map((s, i) => {
                    const p = place(i, n)
                    return (
                      <motion.li
                        key={s.en}
                        className="node"
                        style={{ '--x': `${p.x}%`, '--y': `${p.y}%`, '--d': `${(i % 4) * 0.7}s` }}
                        initial={reduce ? false : { opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.25 + i * 0.07, type: 'spring', stiffness: 260, damping: 18 }}
                      >
                        <span>{lang === 'ar' && s.ar ? s.ar : s.en}</span>
                      </motion.li>
                    )
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
