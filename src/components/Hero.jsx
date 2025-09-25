import React from "react";


export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2>
          Hi, I'm <br /> <span>Ahmed Elshahat</span>
        </h2>
        <p>
          I am a frontend developer passionate about creating modern,
          responsive, and user-friendly websites using React, JavaScript, and
          CSS.
        </p>
          <a href="/CV2.pdf" target="_blank" rel="noopener noreferrer" className="btn">
          View CV
        </a>
      </div>

      <div className="hero-img">
        <img src="img/img33.png" alt="profile" />
      </div>
      
    </section>
  );
}
