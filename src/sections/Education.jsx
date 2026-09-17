import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { useAppSettings } from "../context/AppSettingsContext.jsx";

export default function Education() {
  const { c } = useAppSettings();
  const { education, languages, ui } = c;

  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading kicker={ui.educationKicker} title={ui.educationTitle} index="05" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-line bg-surface p-7"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo/20 to-cyan/20 text-cyan">
              <GraduationCap size={20} />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {education.degree}
              </h3>
              <p className="text-sm text-muted">{education.year}</p>
            </div>
          </div>
          <p className="text-sm text-ink/85">{education.faculty}</p>
          <p className="mb-3 text-sm text-muted">{education.university}</p>
          <p className="text-sm text-muted">{education.grade}</p>
          <p className="mt-2 text-sm text-muted">{education.project}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-line bg-surface p-7"
        >
          <h3 className="mb-4 font-display text-lg font-semibold text-ink">
            {ui.languagesTitle}
          </h3>
          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.name}>
                <p className="text-sm text-ink">{lang.name}</p>
                <p className="text-xs text-muted">{lang.level}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
