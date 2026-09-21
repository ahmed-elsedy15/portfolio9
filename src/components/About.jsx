import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

function Word({ text, i, n, progress, still }) {
  const o = useTransform(progress, [i / n, Math.min(1, (i + 3) / n)], [0.16, 1])
  const m = /^\*(.+?)\*(.*)$/.exec(text)
  const body = m ? (
    <>
      <mark>{m[1]}</mark>
      {m[2]}
    </>
  ) : (
    text
  )
  return <motion.span style={{ opacity: still ? 1 : o }}>{body}</motion.span>
}

export default function About() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] })
  const words = t.about.text.split(' ')

  return (
    <section id="about" className="about">
      <div className="wrap about-grid">
        <div className="about-side">
          <Reveal as="p" className="label mono"><span>(02)</span> {t.about.label}</Reveal>
          <div className="badge" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <defs><path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
              <text><textPath href="#circ" textLength="484" lengthAdjust="spacing">REACT · NEXT.JS · TYPESCRIPT · TAILWIND · </textPath></text>
            </svg>
            <span>AE</span>
          </div>
        </div>

        <div className="about-main">
          <p className="about-text" ref={ref}>
            {words.map((w, i) => (
              <span key={i} className="aw">
                <Word text={w} i={i} n={words.length} progress={scrollYProgress} still={!!reduce} />{' '}
              </span>
            ))}
          </p>

          <dl className="facts">
            {t.about.facts.map(([k, v], i) => (
              <Reveal key={k} delay={i * 0.08} className="fact">
                <dt className="mono">{k}</dt>
                <dd>{v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
