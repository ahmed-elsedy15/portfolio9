import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Badge from "./Badge.jsx";
import { useAppSettings } from "../context/AppSettingsContext.jsx";

export default function ProjectCard({ project, index }) {
  const { c } = useAppSettings();

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-indigo/50"
    >
      <div className="pointer-events-none absolute -top-24 end-[-6rem] h-64 w-64 rounded-full bg-indigo/0 blur-3xl transition-colors duration-500 group-hover:bg-indigo/20" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-cyan">
            {project.tag}
          </p>
          <h3 className="font-display text-2xl font-semibold text-ink">
            {project.name}
          </h3>
        </div>
        <ArrowUpRight
          size={22}
          className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan"
        />
      </div>

      <p className="relative mt-4 max-w-[60ch] text-[0.95rem] leading-relaxed text-muted">
        {project.description}
      </p>
      <p className="relative mt-2 text-sm text-ink/80">{project.role}</p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech} subtle>
            {tech}
          </Badge>
        ))}
      </div>

      <div className="relative mt-6 flex flex-wrap gap-4 border-t border-line pt-5 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-cyan"
          >
            <Github size={16} /> {c.ui.github}
          </a>
        )}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-cyan"
          >
            <ExternalLink size={16} /> {c.ui.liveDemo}
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-muted/70">
            <ExternalLink size={16} /> {c.ui.liveDemoSoon}
          </span>
        )}
      </div>
    </motion.article>
  );
}
