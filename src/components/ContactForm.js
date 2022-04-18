import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    // <div className="formTotal">
    //   <h1>Leave me a message</h1>
    //   <section className="contact-form">
    //     <form
    //       name="contact-portfolio"
    //       netlify
    //       netlify-honeypot="bot-field"
    //       method="post"
    //     >
    //       <div>
    //         <input type="hidden" name="form-name" value="contact-portfolio" />
    //         <div className="nombre">
    //           <label for="name">
    //             Name
    //             <input
    //               name="name"
    //               required
    //               type="text"
    //               id="name"
    //               placeholder="Your name"
    //             ></input>{" "}
    //           </label>
    //         </div>
    //         <div className="mail">
    //           <label for="email">
    //             Email
    //             <input
    //               name="email"
    //               required
    //               type="text"
    //               id="email"
    //               placeholder="Your email"
    //             ></input>
    //           </label>
    //         </div>
    //       </div>
    //       <div>
    //         <div className="msg">
    //           <label for="message">
    //             Message
    //             <textarea
    //               name="message"
    //               required
    //               id="message"
    //               rows="10"
    //               placeholder="Anything you want to say"
    //             />
    //           </label>
    //           <input type="submit" className="boton-submit" value="Send" />
    //         </div>
    //       </div>
    //     </form>
    //   </section>
    // </div>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Your Role:{" "}
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
