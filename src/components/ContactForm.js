import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="formTotal">
      <h1>Leave me a message</h1>
      <section className="contact-form">
        <form name="contact-portfolio" method="POST" data-netlify="true">
          <p>
            <p className="nombre">
              <label for="name">
                Name
                <input
                  name="name"
                  required
                  type="text"
                  id="name"
                  placeholder="Your name"
                ></input>{" "}
              </label>
            </p>
            <p className="mail">
              <label for="email">
                Email
                <input
                  name="email"
                  required
                  type="text"
                  id="email"
                  placeholder="Your email"
                ></input>
              </label>
            </p>
          </p>
          <p>
            <p className="msg">
              <label for="message">
                Message
                <textarea
                  name="message"
                  required
                  id="message"
                  rows="10"
                  placeholder="Anything you want to say"
                />
              </label>
              <input type="submit" className="boton-submit" value="Send" />
            </p>
          </p>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
