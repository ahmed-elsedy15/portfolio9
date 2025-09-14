import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact,  FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";


export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="icon html" /> },
    { name: "CSS", icon: <FaCss3Alt className="icon css" /> },
    { name: "JavaScript", icon: <FaJs className="icon js" /> },
    { name: "React", icon: <FaReact className="icon react" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="icon tailwind" /> },
    { name: "GitHub", icon: <FaGithub className="icon github" /> },
  ];

  return (
    <section className="skills-section " id="Skills">
      <div className="container">
        <h2 className="title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
