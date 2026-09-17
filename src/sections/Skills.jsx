import { motion } from "framer-motion";
import { Code2, PenTool, Database, Wrench } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Badge from "../components/Badge.jsx";
import { useAppSettings } from "../context/AppSettingsContext.jsx";

const icons = { Code2, PenTool, Database, Wrench };

export default function Skills() {
  const { c } = useAppSettings();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading kicker={c.ui.skillsKicker} title={c.ui.skillsTitle} index="02" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {c.skillGroups.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo/20 to-cyan/20 text-cyan">
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.3, delay: j * 0.03 }}
                  >
                    <Badge>{item}</Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
