import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/** Fade + rise when scrolled into view. */
export function Reveal({ as = 'div', delay = 0, y = 28, className, children, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * Staggered word-by-word mask reveal.
 * Splits on WORDS only — never letters — so Arabic letters keep joining correctly.
 * (The *outer* span is what gets observed: an element translated out of its own clipping
 * parent would never intersect the viewport.)
 */
const wordVariants = { hidden: { y: '118%' }, show: { y: '0%' } }

export function Words({ text, delay = 0, stagger = 0.055, animateOn = 'view', hl = false }) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  const trigger =
    animateOn === 'load'
      ? { animate: 'show' }
      : { whileInView: 'show', viewport: { once: true, margin: '0px 0px -10% 0px' } }
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <motion.span className={`w${hl ? ' hl' : ''}`} initial={reduce ? false : 'hidden'} {...trigger}>
            <motion.span
              className="w-in"
              variants={wordVariants}
              transition={{ duration: 0.9, delay: delay + i * stagger, ease: EASE }}
            >
              {w}
            </motion.span>
          </motion.span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </>
  )
}
