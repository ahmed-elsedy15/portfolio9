import { useEffect, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useFinePointer, asset } from '../hooks'
import { links } from '../content'
import { useLang } from '../i18n'

/** One depth layer: shifts with the pointer by `k` px (negative = recedes, positive = floats forward). */
function Layer({ sx, sy, depth, k, className = '', children }) {
  const x = useTransform([sx, depth], ([v, d]) => v * k * d)
  const y = useTransform([sy, depth], ([v, d]) => v * k * d)
  return (
    <motion.div className={`p-layer ${className}`} style={{ x, y }}>
      {children}
    </motion.div>
  )
}

// deterministic "particles" so SSR/hydration & re-renders stay stable
const DOTS = [
  [8, 14, 4, 0], [22, 4, 3, 1.2], [90, 10, 5, 0.6], [96, 34, 3, 2], [4, 46, 3, 0.9], [12, 78, 5, 1.6],
  [30, 96, 3, 0.3], [70, 100, 4, 2.2], [94, 74, 4, 1.1], [56, -4, 3, 1.8], [-4, 30, 4, 2.4], [102, 56, 3, 0.4],
]

export default function Portrait() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const fine = useFinePointer()
  const interactive = fine && !reduce

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 110, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 110, damping: 18, mass: 0.6 })
  const depthRaw = useMotionValue(1)
  const depth = useSpring(depthRaw, { stiffness: 120, damping: 16 })

  const rotY = useTransform(sx, (v) => v * 10)
  const rotX = useTransform(sy, (v) => v * -8)
  const lx = useTransform(sx, (v) => 50 + v * 32)
  const ly = useTransform(sy, (v) => 38 + v * 32)
  const light = useMotionTemplate`radial-gradient(circle at ${lx}% ${ly}%, rgba(200,255,61,.30), transparent 58%)`

  // Track the pointer across the whole viewport so the composition always "looks at" the cursor
  useEffect(() => {
    if (!interactive) return
    const move = (e) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2)
      my.set((e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [interactive, mx, my])

  // Photo / optional cut-out detection (missing files fall back gracefully)
  const [photoOk, setPhotoOk] = useState(true)
  const [cutout, setCutout] = useState(false)
  useEffect(() => {
    const img = new Image()
    img.onload = () => setCutout(true)
    img.src = asset(links.cutout)
  }, [])

  const D = reduce ? 0 : 1.0

  return (
    <div
      className="portrait"
      onPointerEnter={() => interactive && depthRaw.set(1.7)}
      onPointerLeave={() => depthRaw.set(1)}
      data-cursor
    >
      <motion.div
        className="portrait-enter"
        initial={reduce ? false : { opacity: 0, y: 50, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: D, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div className="portrait-stage" style={interactive ? { rotateX: rotX, rotateY: rotY } : undefined}>
          <Layer sx={sx} sy={sy} depth={depth} k={-10}><div className="p-glow" /></Layer>

          <Layer sx={sx} sy={sy} depth={depth} k={-20}>
            <div className="p-block" />
          </Layer>

          <Layer sx={sx} sy={sy} depth={depth} k={-6}>
            <div className="p-orbit">
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth=".25" strokeDasharray="1 2.2" />
                <circle cx="50" cy="1" r="1.3" fill="var(--lime)" />
              </svg>
            </div>
          </Layer>

          <Layer sx={sx} sy={sy} depth={depth} k={8}>
            <div className="p-frame" />
          </Layer>

          {/* the portrait itself */}
          <div className="p-card">
            {cutout ? (
              <>
                <div className="p-backdrop" />
                <Layer sx={sx} sy={sy} depth={depth} k={-4}>
                  <img className="p-img p-img--cut" src={asset(links.cutout)} alt={t.hero.portrait.alt} decoding="async" fetchpriority="high" />
                </Layer>
              </>
            ) : photoOk ? (
              <Layer sx={sx} sy={sy} depth={depth} k={-7}>
                <img className="p-img" src={asset(links.photo)} alt={t.hero.portrait.alt} decoding="async" fetchpriority="high" onError={() => setPhotoOk(false)} />
              </Layer>
            ) : (
              <div className="p-fallback" role="img" aria-label={t.hero.portrait.alt}>
                <svg viewBox="0 0 100 125" aria-hidden="true">
                  <circle cx="50" cy="46" r="17" />
                  <path d="M14 125c0-27 16-42 36-42s36 15 36 42z" />
                </svg>
                <p>{t.hero.portrait.missing}<br /><code>{t.hero.portrait.hint}</code></p>
              </div>
            )}
            <motion.div className="p-light" style={{ background: light }} aria-hidden="true" />
            <div className="p-vignette" aria-hidden="true" />
          </div>

          <Layer sx={sx} sy={sy} depth={depth} k={22}>
            <div className="p-dots" aria-hidden="true">
              {DOTS.map(([l, tp, s, d], i) => (
                <span key={i} style={{ left: `${l}%`, top: `${tp}%`, width: s, height: s, animationDelay: `${d}s` }} className={i % 3 === 0 ? 'lime' : ''} />
              ))}
            </div>
          </Layer>

          <Layer sx={sx} sy={sy} depth={depth} k={36}><span className="p-chip c1">React</span></Layer>
          <Layer sx={sx} sy={sy} depth={depth} k={50}><span className="p-chip c2">Next.js</span></Layer>
          <Layer sx={sx} sy={sy} depth={depth} k={42}><span className="p-chip c3">TypeScript</span></Layer>
        </motion.div>
      </motion.div>
      <p className="p-cap mono">— {t.hero.portrait.caption}</p>
    </div>
  )
}
