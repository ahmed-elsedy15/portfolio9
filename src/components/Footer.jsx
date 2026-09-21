import { ArrowUp } from 'lucide-react'
import { useLang } from '../i18n'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <p>© {new Date().getFullYear()} {t.footer.rights}</p>
        <p className="mono">{t.footer.made}</p>
        <a href="#top" className="to-top">{t.footer.top}<ArrowUp size={16} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
