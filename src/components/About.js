import React from "react";
import "./Abot.css";
import foto from "../media/picture.jpg";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutText">
        <h3>About Me</h3>
        <p>
          
          Decided to change 180° the course of my life when I started studying
          the web developmet career in 2021. To this day, I acquired knowledge
          in JavaScript, ReactJS, NodeJS, ExpressJS and PostgreSQL as the main
          technologies wich I work with.
        </p>
      </div>
      <div className="picture">
        <img src={foto} />
      </div>
    </div>
  );
};

export default About;
