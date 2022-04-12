import React from "react";
import CSS from "../media/logos/css.png";
import EXPRESSJS from "../media/logos/Expressjs.png";
import GIT from "../media/logos/git.png";
import GITHUB from "../media/logos/github.png";
import HTML from "../media/logos/html.png";
import JAVASCRIPT from "../media/logos/javascript.png";
import NODEJS from "../media/logos/nodejs.png";
import POSTRGESQL from "../media/logos/postgresql.png";
import REACTJS from "../media/logos/reactjs.png";
import REDUX from "../media/logos/redux.png";
import SEQUELIZE from "../media/logos/sequelize.png";
import SQL from "../media/logos/sql.png";
import "./Skiller.css";

const Skiller = () => {
  const skillsTemplates = [
    {
      title: "JavaScript",
      url: JAVASCRIPT,
      alt: "JavaScript",
      width: "50px",
      height: "50px",
    },
    {
      title: "ReactJS",
      url: REACTJS,
      alt: "ReactJS",
      width: "55px",
      height: "50px",
    },
    { title: "Redux", url: REDUX, alt: "Redux", width: "55px", height: "50px" },
    { title: "HTML", url: HTML, alt: "HTML", width: "50px", height: "50px" },
    { title: "CSS", url: CSS, alt: "CSS", width: "90px", height: "50px" },
    {
      title: "NodeJS",
      url: NODEJS,
      alt: "NodeJS",
      width: "70px",
      height: "50px",
    },

    { title: "SQL", url: SQL, alt: "SQL", width: "50px", height: "50px" },

    {
      title: "Sequelize",
      url: SEQUELIZE,
      alt: "Sequelize",
      width: "50px",
      height: "55px",
    },
    { title: "Git", url: GIT, alt: "Git", width: "50px", height: "50px" },
    {
      title: "Github",
      url: GITHUB,
      alt: "Github",
      width: "50px",
      height: "50px",
    },
    {
      title: "PostgreSQL",
      url: POSTRGESQL,
      alt: "PostgreSQL",
      width: "200px",
      height: "50px",
    },
    {
      title: "ExpressJS",
      url: EXPRESSJS,
      alt: "ExpressJS",
      width: "150px",
      height: "50px",
    },
  ];
  return (
    <div className="skills-container">
      <div className="skills">
        <div className="skills-box">
          {skillsTemplates.map((skill) => (
            <div className="skills-item">
              <div className="img-skill">
                <img
                  src={skill.url}
                  alt={skill.alt}
                  width={skill.width}
                  height={skill.height}
                  className="logo-skill"
                />
              </div>
              <div className="title-skill">
                <span>{skill.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-title">
        <h2>Tech Skills</h2>
      </div>
    </div>
  );
};

export default Skiller;
