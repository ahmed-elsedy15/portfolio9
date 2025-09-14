import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* اللوجو أو الاسم */}
        <div className="footer-logo">
          <h2>Ahmed Elshahat</h2>
        </div>

        {/* الروابط */}
        <ul className="footer-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* أيقونات السوشيال */}
        <div className="footer-socials">
          <a href="https://github.com/ahmed-elsedy15" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-elsesy-b57233245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          
        </div>
      </div>

      {/* حقوق الملكية */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ahmed Elshahat. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
