import React, { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* اللوجو */}
        <h1 className="logo">Ahmed</h1>

        {/* اللينكات */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* زر البورجر */}
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? "line rotate1" : "line"}></div>
          <div className={isOpen ? "line fade" : "line"}></div>
          <div className={isOpen ? "line rotate2" : "line"}></div>
        </div>
      </div>
    </nav>
  );
}
