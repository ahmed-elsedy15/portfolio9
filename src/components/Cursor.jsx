import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useFinePointer } from '../hooks'

/** A soft ring that trails the pointer and swells over interactive elements. Desktop / fine pointers only. */
export default function Cursor() {
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 520, damping: 40, mass: 0.35 })
  const sy = useSpring(y, { stiffness: 520, damping: 40, mass: 0.35 })
  const [hot, setHot] = useState(false)

  useEffect(() => {
    if (!fine || reduce) return
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e) => setHot(!!e.target.closest?.('a, button, [role="tab"], input, [data-cursor]'))
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', over)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
    }
  }, [fine, reduce, x, y])

  if (!fine || reduce) return null
  return (
    <motion.div className={`cursor${hot ? ' is-hot' : ''}`} style={{ x: sx, y: sy }} aria-hidden="true">
      <span />
    </motion.div>
  )
}
