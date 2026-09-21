import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail } from 'lucide-react'
import { useLang } from '../i18n'
import { links } from '../content'
import { asset } from '../hooks'
import { Reveal, Words } from './Reveal'

export default function Contact() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = links.email
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch {}
      ta.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal as="p" className="label mono"><span>(04)</span> {t.contact.label}</Reveal>
        <h2 className="contact-h"><Words text={t.contact.h} stagger={0.07} /></h2>

        <div className="contact-row">
          <Reveal as="p" className="contact-sub">
            <span className="pulse dark" aria-hidden="true" />{t.contact.sub}
          </Reveal>
          <Reveal delay={0.1}>
            <a className="contact-mail" href={`mailto:${links.email}`}>
              {links.email}<ArrowUpRight aria-hidden="true" className="flip" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="contact-actions">
          <a className="btn btn-dark" href={`mailto:${links.email}`}><Mail size={17} aria-hidden="true" />{t.contact.email}</a>
          <button type="button" className="btn btn-outline" onClick={copy} aria-live="polite">
            {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
            {copied ? t.contact.copied : t.contact.copy}
          </button>
          <a className="btn btn-outline" href={links.github} target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" />{t.contact.github}</a>
          {links.linkedin ? (
            <a className="btn btn-outline" href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" />{t.contact.linkedin}</a>
          ) : (
            <span className="btn btn-outline is-placeholder" title="Set links.linkedin in src/content.js"><Linkedin size={17} aria-hidden="true" />{t.contact.linkedinMissing}</span>
          )}
          <a className="btn btn-outline" href={asset(links.cv)} download><Download size={17} aria-hidden="true" />{t.contact.cv}</a>
        </Reveal>
      </div>
    </section>
  )
}
