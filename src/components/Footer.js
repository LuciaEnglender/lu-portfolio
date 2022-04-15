import React from "react";
import "./Footer.css";
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
        <div className="footer-rrss-small">
          
          <div>
            <div className="design">Design with 💗 by Lucia</div>
          </div>
        </div>
      </div>

      <div className="contacto">
        <ContactForm />
      </div>
    </footer>
  );
}

export default Footer;
