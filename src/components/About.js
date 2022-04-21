import React from "react";
import "./Abot.css";
import foto from "../media/picture.jpg";
import CV from "../media/CV.pdf";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutText">
        <h1>About Me</h1>
        <p>
          Full Stack Developer who has decided to change 180° the course of her
          life when started studying a web developmet career in 2021. To this
          day, I acquired knowledge in{" "}
          <b>JavaScript, ReactJS, NodeJS, ExpressJS and PostgreSQL</b> as the
          main technologies wich I work with.<br></br>
          I'm passionate about solving problems, learning new technologies and
          mastering the ones I already know.
          <br></br>
          Because of my previous work experience, I've gained a{" "}
          <b>strong interpersonal skills</b> proven through
          customer satisfaction, as well as
          <b> team work, organization and management skills</b> due to my
          supervisor role.
          
          <br></br>
          <br></br>
          Here are my social networks and resume.
        </p>
        <div className="icons">
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
      </div>
      <div className="picture">
        <img src={foto} alt='Lucia Englender' />
      </div>
    </div>
  );
};

export default About;
