import { motion } from "framer-motion";

export default function SectionHeading({ index, title, kicker }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 flex items-end justify-between border-b border-line pb-6"
    >
      <div>
        {kicker && (
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan">
            {kicker}
          </p>
        )}
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          {title}
        </h2>
      </div>
      {index && (
        <span className="hidden font-display text-sm text-muted md:block">
          {index}
        </span>
      )}
    </motion.div>
  );
}
