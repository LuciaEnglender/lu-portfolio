import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="formTotal">
      <h1>Leave me a message</h1>
      <section className="contact-form">
        <form name="contact" netlify data-netlify="true" method="POST">
          <div>
            <div className="nombre">
              <label for="name">Name</label>
              <input
                value="contact"
                name="name"
                required
                type="text"
                id="name"
                placeholder="Your name"
              ></input>{" "}
            </div>
            <div className="mail">
              <label for="email">Email</label>
              <input
                value="contact"
                name="email"
                required
                type="text"
                id="email"
                placeholder="Your email"
              ></input>
            </div>
          </div>
          <div>
            <div className="msg">
              <label for="message">Message</label>
              <textarea
                value="contact"
                name="message"
                required
                id="message"
                rows="10"
                placeholder="Anything you want to say"
              />
              <input type="submit" className="boton-submit" value="Send" />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
