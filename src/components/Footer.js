import React from "react";
import "./Footer.css";
import CV from "../media/CV.pdf";
import Particle from "./Particle";
import ContactForm from "./ContactForm";

function Footer() {
  return (
    <footer className="footer">
      <div className="p-particles-js">
        <Particle />
      </div>
      <div className="contact-info">
        <div className="footer-info">
          <h1>Lucia Englender</h1>
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <p>Mar del Plata, Buenos Aires, Argentina</p>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>luenglender@gmail.com</p>
          <p>+54 9 223 6826974</p>
        </div>
        <div className="footer-rrss">
          <a
            href="https://www.linkedin.com/in/lucia-englender/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fa-4x linkedin"></i>
          </a>
          <a
            href="https://github.com/LuciaEnglender"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github fa-4x github"></i>
          </a>
          <a href={CV} target="_blank" rel="noreferrer">
            <i class="fa-regular fa-user fa-4x"></i>
          </a>
        </div>
        <div className="design">Design with ♥ by Lucia</div>
      </div>
      <div className="contacto">
        <ContactForm />
      </div>
    </footer>
  );
}

export default Footer;
