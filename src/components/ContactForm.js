import React from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ns633ny",
        "template_u8rbay8",
        e.target,
        "D0bdh-fhM3osvSYPL"
      )
      .then(
        (result) => {
          alert("Email sended. Thank you ♥");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="formTotal">
      <h1>Leave me a message</h1>
      <section className="contact-form">
        <form onSubmit={sendEmail}>
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
