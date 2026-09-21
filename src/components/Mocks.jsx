import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Home, Languages, LogOut, Moon, PieChart, Plus, Receipt, Settings, ShoppingCart, Sun } from 'lucide-react'
import { useLang } from '../i18n'
import { salesModules } from '../content'

/* These are *illustrative, interactive* previews built in code — not screenshots and containing no
   real business data. Swap them for real screenshots via `projectMeta[].image` in content.js. */

/* ------------------------------------------------ 01 · Sales system ---- */
const BARS = [42, 64, 50, 76, 58, 90, 68, 82, 96]

export function SalesMock() {
  const { t } = useLang()
  const m = t.mocks.sales
  const [rtl, setRtl] = useState(false)
  const [dark, setDark] = useState(true)
  const [act, setAct] = useState(0)
  const mods = salesModules[rtl ? 'ar' : 'en']
  const bars = BARS.map((_, i) => BARS[(i + act * 2) % BARS.length])

  return (
    <div className="mock-wrap">
      <div className="sm" dir={rtl ? 'rtl' : 'ltr'} lang={rtl ? 'ar' : 'en'} data-theme={dark ? 'dark' : 'light'} role="group" aria-label={m.aria}>
        <aside className="sm-side">
          <div className="sm-brand"><i /><b /></div>
          <ul>
            {mods.map((name, i) => (
              <li key={i}>
                <button type="button" className={i === act ? 'on' : ''} onClick={() => setAct(i)} aria-current={i === act}>
                  <i aria-hidden="true" />{name}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="sm-main">
          <div className="sm-top">
            <span className="sm-search" />
            <div className="sm-ctl">
              <button type="button" onClick={() => setRtl((v) => !v)} aria-label={m.toggleLang} aria-pressed={rtl}>
                <Languages aria-hidden="true" />{rtl ? 'EN' : 'AR'}
              </button>
              <button type="button" onClick={() => setDark((v) => !v)} aria-label={m.toggleTheme} aria-pressed={!dark}>
                {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
              </button>
            </div>
          </div>
          <div className="sm-kpis">
            {[0, 1, 2, 3].map((i) => (
              <div key={i}><i /><b style={{ width: `${46 + ((i * 17 + act * 9) % 40)}%` }} /></div>
            ))}
          </div>
          <div className="sm-body">
            <div className="sm-chart">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  style={{ height: `${h}%`, originY: 1 }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
            <div className="sm-rows">
              {[0, 1, 2, 3].map((i) => (
                <div key={i}><i /><b style={{ width: `${40 + ((i * 13 + act * 7) % 35)}%` }} /><em /></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------- 02 · Flosy Feen ---- */
export function FlosyMock() {
  const { t } = useLang()
  const m = t.mocks.flosy
  const [screen, setScreen] = useState('login')
  const [tog, setTog] = useState([true, false, true])
  const tabs = [['home', Home], ['expenses', Receipt], ['budget', PieChart], ['settings', Settings]]

  const view = {
    login: (
      <div className="fm-login">
        <span className="fm-logo">F</span>
        <h4>Flosy Feen</h4>
        <i className="fm-sk w70" /><i className="fm-sk w50" />
        <button type="button" className="fm-google" onClick={() => setScreen('home')}>
          <span aria-hidden="true">G</span>{m.google}
        </button>
      </div>
    ),
    home: (
      <div className="fm-home">
        <div className="fm-ring">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="40" className="trk" />
            <motion.circle cx="50" cy="50" r="40" className="val" initial={{ pathLength: 0 }} animate={{ pathLength: 0.68 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} />
          </svg>
          <i /><b />
        </div>
        {[0, 1, 2].map((i) => (<div className="fm-row" key={i}><i className={`d${i}`} /><b /><em /></div>))}
      </div>
    ),
    expenses: (
      <div className="fm-list">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div className="fm-row" key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
            <i className={`d${i % 3}`} /><b style={{ width: `${52 + ((i * 11) % 30)}%` }} /><em />
          </motion.div>
        ))}
        <span className="fm-fab" aria-hidden="true"><Plus /></span>
      </div>
    ),
    budget: (
      <div className="fm-budget">
        {[0.78, 0.46, 0.9, 0.3].map((w, i) => (
          <div key={i}>
            <b style={{ width: `${40 + i * 8}%` }} />
            <span><motion.i initial={{ width: 0 }} animate={{ width: `${w * 100}%` }} transition={{ delay: 0.1 + i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} /></span>
          </div>
        ))}
      </div>
    ),
    settings: (
      <div className="fm-settings">
        {tog.map((on, i) => (
          <div className="fm-row" key={i}>
            <i className={`d${i}`} /><b style={{ width: `${44 + i * 10}%` }} />
            <button type="button" className={`fm-toggle${on ? ' on' : ''}`} role="switch" aria-checked={on} aria-label={`${m.tabs[3]} ${i + 1}`} onClick={() => setTog((s) => s.map((v, j) => (j === i ? !v : v)))}><span /></button>
          </div>
        ))}
        <button type="button" className="fm-out" onClick={() => setScreen('login')}><LogOut aria-hidden="true" />{m.signout}</button>
      </div>
    ),
  }

  return (
    <div className="mock-wrap">
      <div className="phone" role="group" aria-label={m.aria}>
        <span className="ph-notch" aria-hidden="true" />
        <div className="ph-screen">
          {screen !== 'login' && <div className="ph-head"><b>{m.tabs[tabs.findIndex(([k]) => k === screen)]}</b></div>}
          <AnimatePresence mode="wait">
            <motion.div key={screen} className="ph-view" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>
              {view[screen]}
            </motion.div>
          </AnimatePresence>
          {screen !== 'login' && (
            <nav className="ph-tabs" aria-label="Preview tabs">
              {tabs.map(([key, Icon], i) => (
                <button type="button" key={key} className={screen === key ? 'on' : ''} onClick={() => setScreen(key)} aria-label={m.tabs[i]} aria-current={screen === key}>
                  <Icon aria-hidden="true" />
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------- 03 · E-commerce shop ---- */
const TILES = [
  { id: 1, c: 1 }, { id: 2, c: 2 }, { id: 3, c: 3 }, { id: 4, c: 4 },
  { id: 5, c: 1 }, { id: 6, c: 2 }, { id: 7, c: 3 }, { id: 8, c: 4 },
]

export function ShopMock() {
  const { t } = useLang()
  const m = t.mocks.shop
  const [cat, setCat] = useState(0)
  const [count, setCount] = useState(0)
  const items = TILES.filter((x) => cat === 0 || x.c === cat)

  return (
    <div className="mock-wrap">
      <div className="em" role="group" aria-label={m.aria}>
        <div className="em-top">
          <b className="em-logo" />
          <span className="em-search" />
          <span className="em-cart" aria-label={`${m.cart}: ${count}`}>
            <ShoppingCart aria-hidden="true" />
            <motion.em key={count} initial={{ scale: 1.7 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>{count}</motion.em>
          </span>
        </div>
        <div className="em-pills" role="tablist">
          {m.cats.map((c, i) => (
            <button type="button" key={i} role="tab" aria-selected={cat === i} className={cat === i ? 'on' : ''} onClick={() => setCat(i)}>{c}</button>
          ))}
        </div>
        <motion.div layout className="em-grid">
          <AnimatePresence popLayout>
            {items.map((it) => (
              <motion.div layout key={it.id} className="em-card" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                <div className={`em-img t${it.c}`}><i /></div>
                <span className="em-cat">{m.cats[it.c]}</span>
                <b />
                <button type="button" onClick={() => setCount((n) => n + 1)}><Plus aria-hidden="true" />{m.add}</button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export const mocks = { sales: SalesMock, flosy: FlosyMock, shop: ShopMock }
