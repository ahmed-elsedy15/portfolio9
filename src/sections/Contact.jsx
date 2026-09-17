import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import Button from "../components/Button.jsx";
import { useAppSettings } from "../context/AppSettingsContext.jsx";

export default function Contact() {
  const { c } = useAppSettings();
  const { profile, ui } = c;

  const contacts = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    {
      icon: Phone,
      label: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, external: true },
    { icon: Github, label: "GitHub", href: profile.github, external: true },
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/15 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-cyan">
          {ui.contactKicker}
        </p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl md:text-5xl">
          {ui.contactHeading}
        </h2>
        <p className="mx-auto mt-5 max-w-[50ch] text-[1.05rem] text-muted">
          {ui.contactSub(profile)}
        </p>

        <div className="mt-8 flex justify-center">
          <Button href={`mailto:${profile.email}`} icon={Mail}>
            {ui.sayHello}
          </Button>
        </div>

        <div className="mx-auto mt-14 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
          {contacts.map((cItem) => (
            <a
              key={cItem.label}
              href={cItem.href}
              target={cItem.external ? "_blank" : undefined}
              rel={cItem.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-2 rounded-xl border border-line bg-surface px-3 py-4 text-xs text-muted transition-colors hover:border-indigo/50 hover:text-ink"
            >
              <cItem.icon size={18} className="text-cyan" />
              <span className="truncate">{cItem.label}</span>
            </a>
          ))}
        </div>
      </motion.div>

      <p className="relative mt-24 text-center text-xs text-muted">
        {ui.footer(profile.name, new Date().getFullYear())}
      </p>
    </section>
  );
}
