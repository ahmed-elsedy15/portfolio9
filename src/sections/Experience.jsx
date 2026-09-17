import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading.jsx";
import TimelineItem from "../components/TimelineItem.jsx";
import { useAppSettings } from "../context/AppSettingsContext.jsx";

export default function Experience() {
  const { c } = useAppSettings();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading kicker={c.ui.experienceKicker} title={c.ui.experienceTitle} index="03" />

      <div className="relative">
        <div className="absolute top-2 start-[13px] h-[calc(100%-16px)] w-px bg-line md:start-[21px]" />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top" }}
          className="absolute top-2 start-[13px] h-[calc(100%-16px)] w-px bg-gradient-to-b from-indigo to-cyan md:start-[21px]"
        />

        <div className="space-y-14">
          {c.experience.map((job, i) => (
            <TimelineItem key={job.id} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
