import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Languages as LanguagesIcon } from "lucide-react";
import { useAppSettings } from "../context/AppSettingsContext.jsx";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { useScrollProgress } from "../hooks/useScrollProgress.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrolled } = useScrollProgress();
  const { c, theme, toggleTheme, lang, toggleLang } = useAppSettings();
  const navLinks = c.nav;
  const activeId = useActiveSection(navLinks.map((l) => l.id));

  function handleNavClick(id) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-base/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNavClick("home")}
          className="font-display text-lg font-semibold text-ink"
        >
          {c.profile.shortName}
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                activeId === link.id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full border border-line bg-surface2"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1.5 font-mono text-[0.72rem] transition-colors hover:border-cyan hover:text-cyan"
            aria-label="Toggle language"
          >
            <LanguagesIcon size={13} />
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-full border border-line p-2 transition-colors hover:border-indigo hover:text-indigo"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            className="text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-base/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`rounded-lg px-3 py-2.5 text-start text-sm ${
                    activeId === link.id ? "bg-surface2 text-ink" : "text-muted"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
