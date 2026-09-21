import { useLang } from '../i18n'

export default function Marquee() {
  const { t } = useLang()
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div className="marquee-row" key={k}>
            {t.marquee.map((s, i) => (
              <span key={i}>
                {s}
                <b />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
