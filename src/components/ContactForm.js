import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="formTotal">
      <h1>Leave me a message</h1>
      <section className="contact-form">
        <form name="contact" data-netlify="true" method="POST" id="contact">
          <input type="hidden" name="contact" value="contact" />
          <div>
            <div className="nombre">
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
            </div>
            <div className="mail">
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
            </div>
          </div>
          <div>
            <div className="msg">
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
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
