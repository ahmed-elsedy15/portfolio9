import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

/** Short (≈0.9s) entrance curtain — skipped entirely for reduced motion. */
export default function Curtain() {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), reduce ? 0 : 900)
    return () => clearTimeout(t)
  }, [reduce])
  if (reduce) return null
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="curtain"
          aria-hidden="true"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            AE<i />
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
