import React from "react";


export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A modern e-commerce website built with React (Vite), styled with CSS, and integrated with a Dummy JSON API.",
      image: "img/pro1.jpg",
      link: "https://ahmed-elsedy15.github.io/e-commerce/"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React Vite and CSS.",
      image: "img/bro2.jpg",
      link: "https://ahmed-elsedy15.github.io/portfolio9/"
    },
  ];

  return (
    <section className="projects-section " id="projects">
      <div className="container">
        <h2 className="title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" className="btn">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
