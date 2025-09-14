import React from "react";


export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A modern e-commerce website built with React and Node.js.",
      image: "/images/project1.jpg",
      link: "https://github.com/username/ecommerce"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and CSS.",
      image: "/images/project2.jpg",
      link: "https://github.com/username/portfolio"
    },
    {
      title: "Car Rental System",
      description: "A car rental management system using PHP & MySQL.",
      image: "/images/project3.jpg",
      link: "https://github.com/username/car-rental"
    }
  
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
