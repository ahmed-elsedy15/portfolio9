import { motion, useReducedMotion } from "framer-motion";

export default function ProfilePhoto({ src, alt, statusLabel }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-full max-w-[300px]"
    >
      {/* soft ambient glow, kept subtle */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo/15 to-cyan/10 blur-3xl" />

      {/* gradient ring frame */}
      <div className="rounded-[1.75rem] bg-gradient-to-br from-indigo via-line to-cyan p-[1.5px]">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-surface">
          <img
            src={src}
            alt={alt}
            className="aspect-[3/4] w-full object-cover object-top"
          />

          {/* HUD-style corner accents */}
          <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 rounded-tl-lg border-l-2 border-t-2 border-cyan/70" />
          <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 rounded-br-lg border-b-2 border-r-2 border-cyan/70" />
        </div>
      </div>

      {statusLabel && (
        <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface/95 px-4 py-1.5 text-xs text-ink shadow-lg backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          {statusLabel}
        </div>
      )}
    </motion.div>
  );
}
