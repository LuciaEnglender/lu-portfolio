import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("form-contact");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };
  return (
    <div className="formTotal">
      <h1>Leave me a message</h1>
      <section className="contact-form">
        <form
          name="contact"
          data-netlify="true"
          method="POST"
          id="form-contact"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="nombre">
              <label for="name">Name</label>
              <input
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
