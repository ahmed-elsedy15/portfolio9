import { motion } from "framer-motion";
import Badge from "./Badge.jsx";

export default function TimelineItem({ job, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative ps-10 md:ps-14"
    >
      <span className="absolute top-1.5 start-[7px] h-3 w-3 rounded-full border-2 border-cyan bg-base md:start-[15px]" />

      <p className="mb-1 font-mono text-xs text-cyan">{job.period}</p>
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <h3 className="font-display text-xl font-semibold text-ink">
          {job.role}
        </h3>
        <Badge>{job.type}</Badge>
      </div>
      <p className="mb-1 text-sm text-ink/80">{job.org}</p>
      <p className="mb-4 text-sm text-muted">{job.teamNote}</p>

      <ul className="space-y-2 text-[0.95rem] leading-relaxed text-muted">
        {job.bullets.map((b) => (
          <li key={b} className="flex gap-2.5">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.stack.map((tech) => (
          <Badge key={tech} subtle>
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
