import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="formTotal">
      <h1>Leave me a message</h1>
      <section className="contact-form">
        <form name="form" netlify>
          <label for="name">Name</label>
          <input name="name" required type="text" id="name"></input>
          <label for="email">Email</label>
          <input name="email" required type="text" id="email"></input>
          <label for="message">Message</label>
          <textarea name="message" required id="message" cols="50" rows="10" />
          <input type="submit" className="boton-submit" value="Send" />
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
