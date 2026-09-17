import { motion } from "framer-motion";
import { FolderGit2, Mail, Download } from "lucide-react";
import Button from "../components/Button.jsx";
import Typewriter from "../components/Typewriter.jsx";
import ProfilePhoto from "../components/ProfilePhoto.jsx";
import { useAppSettings } from "../context/AppSettingsContext.jsx";
import photo from "../assets/ahmed-photo.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Intro() {
  const { c } = useAppSettings();
  const { profile, ui, highlights } = c;

  return (
    <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-[1.15fr_0.85fr]">
      {/* left / text column: home block stacked above the about block */}
      <div>
        <section
          id="home"
          className="flex min-h-screen flex-col justify-center pb-16 pt-28 md:pt-24"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />

          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs text-cyan"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {profile.availability}
            </motion.p>

            <motion.div variants={item} className="mb-7 md:hidden">
              <ProfilePhoto
                src={photo}
                alt={`Portrait of ${profile.name}`}
                statusLabel={profile.availability}
              />
            </motion.div>

            <motion.h1
              variants={item}
              className="min-h-[2.2em] font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl md:text-6xl"
            >
              <Typewriter text={profile.name} />
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 bg-gradient-to-r from-indigo to-cyan bg-clip-text font-display text-xl text-transparent sm:text-2xl"
            >
              {profile.title} · {profile.subtitle}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-[52ch] text-[1.05rem] leading-relaxed text-muted"
            >
              {profile.intro}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
              <Button
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("projects");
                }}
                icon={FolderGit2}
              >
                {ui.viewProjects}
              </Button>
              <Button
                href="#contact"
                variant="ghost"
                icon={Mail}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
              >
                {ui.contactMe}
              </Button>
              <Button
                href="/Ahmed_Elshahat_CV_Frontend_Developer.pdf"
                variant="ghost"
                icon={Download}
                download
              >
                {ui.downloadCV}
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="border-t border-line py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-9"
          >
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan">
              {ui.aboutKicker}
            </p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              {ui.aboutTitle}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="max-w-[60ch] text-[1.05rem] leading-relaxed text-muted"
          >
            {profile.summary}
          </motion.p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-line bg-surface p-5"
              >
                <h3 className="mb-1.5 font-display text-base font-semibold text-ink">
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {h.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* right column: the photo sticks while both blocks above scroll past it */}
      <div className="hidden md:block">
        <div className="sticky top-28">
          <ProfilePhoto
            src={photo}
            alt={`Portrait of ${profile.name}`}
            statusLabel={profile.availability}
          />
        </div>
      </div>
    </div>
  );
}
