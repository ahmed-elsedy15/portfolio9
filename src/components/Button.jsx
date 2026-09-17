import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  download,
  target,
  className = "",
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none";
  const variants = {
    primary:
      "bg-gradient-to-r from-indigo to-cyan text-[#070810] shadow-glow hover:opacity-90",
    ghost:
      "border border-line text-ink hover:border-indigo hover:text-indigo",
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {Icon && <Icon size={16} strokeWidth={2} />}
        {children}
      </Component>
    </motion.div>
  );
}
