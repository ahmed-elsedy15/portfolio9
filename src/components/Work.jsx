import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { useLang } from '../i18n'
import { projectMeta, links } from '../content'
import { asset } from '../hooks'
import { Reveal, Words } from './Reveal'
import { mocks } from './Mocks'

function Case({ meta, i }) {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [46, -46])
  const p = t.work.items[meta.id]
  const Mock = mocks[meta.id]
  const rev = i % 2 === 1

  return (
    <article ref={ref} className={`case${rev ? ' is-rev' : ''}`} id={`project-${meta.id}`} data-tone={meta.id}>
      <span className="case-num" aria-hidden="true">0{i + 1}</span>

      <motion.div className="case-media" style={{ y }}>
        <motion.div
          className="stage"
          initial={reduce ? false : { clipPath: 'inset(10% 6% 10% 6% round 30px)', opacity: 0 }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 30px)', opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px -12% 0px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="stage-shape" aria-hidden="true" />
          {meta.image ? (
            <img className="stage-img" src={asset(meta.image)} alt={p.title} loading="lazy" decoding="async" />
          ) : (
            <Mock />
          )}
        </motion.div>
        {!meta.image && <p className="note mono">{t.work.note}</p>}
      </motion.div>

      <div className="case-info">
        <Reveal as="p" className="kind mono">{p.kind}</Reveal>
        <h3 className="case-title"><Words text={p.title} /></h3>
        <Reveal as="p" delay={0.1} className="case-blurb">{p.blurb}</Reveal>

        {(p.role || p.team) && (
          <Reveal delay={0.15} className="meta-row">
            {p.role && <div><span className="mono">{t.work.role}</span><p>{p.role}</p></div>}
            {p.team && <div><span className="mono">{t.work.team}</span><p>{p.team}</p></div>}
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <span className="mono lbl">{t.work.did}</span>
          <ul className="points">{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
        </Reveal>

        <Reveal delay={0.25}>
          <span className="mono lbl">{t.work.stack}</span>
          <ul className="chips">{meta.tech.map((x) => <li key={x}>{x}</li>)}</ul>
        </Reveal>

        {(meta.live || meta.repo) && (
          <Reveal delay={0.3} className="case-links">
            {meta.live && <a className="btn btn-primary btn-sm" href={meta.live} target="_blank" rel="noreferrer">{t.work.live}<ArrowUpRight size={16} aria-hidden="true" className="flip" /></a>}
            {meta.repo && <a className="btn btn-ghost btn-sm" href={meta.repo} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" />{t.work.code}</a>}
          </Reveal>
        )}
      </div>
    </article>
  )
}

function Mini({ meta, i }) {
  const { t } = useLang()
  const p = t.work.items[meta.id]
  return (
    <Reveal as="article" className="mini" id={`project-${meta.id}`}>
      <span className="case-num small" aria-hidden="true">0{i + 1}</span>
      <div>
        <p className="kind mono">{p.kind}</p>
        <h3 className="case-title">{p.title}</h3>
        <p className="case-blurb">{p.blurb} <strong>{t.work.you}</strong></p>
      </div>
      <ul className="chips">{meta.tech.map((x) => <li key={x}>{x}</li>)}</ul>
    </Reveal>
  )
}

export default function Work() {
  const { t } = useLang()
  return (
    <section id="work" className="work">
      <div className="wrap">
        <header className="sec-head">
          <Reveal as="p" className="label mono"><span>(01)</span> {t.work.label}</Reveal>
          <h2 className="sec-title"><Words text={t.work.title} /></h2>
          <Reveal as="p" className="sec-count mono">{t.work.count}</Reveal>
        </header>

        {projectMeta.slice(0, 3).map((m, i) => <Case key={m.id} meta={m} i={i} />)}
        <Mini meta={projectMeta[3]} i={3} />
      </div>
    </section>
  )
}
