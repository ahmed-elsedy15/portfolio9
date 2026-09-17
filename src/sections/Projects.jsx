import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { useAppSettings } from "../context/AppSettingsContext.jsx";

export default function Projects() {
  const { c } = useAppSettings();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading kicker={c.ui.projectsKicker} title={c.ui.projectsTitle} index="04" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {c.projects.map((project, i) => (
          <div key={project.id} className={i === 0 ? "md:col-span-2" : ""}>
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
