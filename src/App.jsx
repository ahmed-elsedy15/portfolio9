import { motion, useScroll, useSpring } from 'framer-motion'
import { useLang } from './i18n'
import Curtain from './components/Curtain'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import About from './components/About'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { t } = useLang()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 })

  return (
    <>
      <a className="skip" href="#main">{t.nav.skip}</a>
      <Curtain />
      <Cursor />
      <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
