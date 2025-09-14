import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";


export default function Contact() {
  return (
    <section className="contact-section " id="contact">
      <div className="container">
        <h2 className="title">Get in Touch</h2>
        <p className="subtitle">Feel free to reach out to me anytime 🚀</p>
        <div className="contact-row">
          <div className="contact-card">
            <div className="icon-circle phone"><FaPhoneAlt /></div>
            <p>+20 101 601 1527</p>
          </div>
          <div className="contact-card">
            <div className="icon-circle email"><FaEnvelope /></div>
            <p>ahmed1522003aa@gmail.com</p>
          </div>
          <div className="contact-card">
            <div className="icon-circle location"><FaMapMarkerAlt /></div>
            <p>Mansoura, Egypt</p>
          </div>
          <div className="contact-card">
            <div className="icon-circle linkedin"><FaLinkedin /></div>
            <a href="https://www.linkedin.com/in/ahmed-elsesy-b57233245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">linkedin.com/in/ahmed-elsesy</a>
          </div>
          <div className="contact-card">
            <div className="icon-circle github"><FaGithub /></div>
            <a href="https://github.com/ahmed-elsedy15" target="_blank">github.com/ahmed-elsedy15</a>
          </div>
        </div>
      </div>
    </section>
  );
}
