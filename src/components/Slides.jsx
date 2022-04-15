import React from "react";
import img1 from "../media/HomeMain.png";
import img2 from "../media/img-seekerpro.jpg";
import img3 from "../media/weatherApp.jpg";
import "./Slides.css";

const slidesInfo = [
  {
    src: img1,
    alt: "Countries App",
    desc: "Countries App. Academic development of a SPA (Single Page Application) that consumes data from  restcountries API to get information about countries of the world working with Node JS and Express to the back-end construction, and React, Redux and CSS for the front-end realization.",
    title: "CountriesApp",
    url: "https://www.youtube.com/watch?v=mZutIPImerY&feature=youtu.be",
  },
  {
    src: img2,
    alt: "seekerPRO",
    desc: "JSeeker App. Soy Henry Bootcamp graduation project, which consists of a complex SPA oriented to IT recruitment work, with features such as live chat, a pipeline that sends notifications to the applicant about the status of their hiring process, access control through Auth0, and other basic features. My work was mainly in the backend, in the development of data handling and association using Sequelize, ExpressJS and NodeJS for PostgreSQL. I also collaborated with the graphic design through HTML, CSS and TailwindCSS.",
    title: "JSeeker PRO App",
    url: "https://pf-seekerpro.herokuapp.com/",
  },
  {
    src: img3,
    alt: "weather app",
    desc: "Weather App. It is a React app that consumes the openweather.org API. Brings the current weather, hourly and daily. The design it's made in CSS and deployed in Heroku.",
    title: "Weather App",
    url: "https://weather-app-lu-englender.netlify.app/",
  },
];

const Slides = slidesInfo.map((slide) => (
  <div className="slideContainer">
    <div className="slideImg">
      <img src={slide.src} alt={slide.alt} key={slide.img} />
    </div>
    <div className="slideText">
      <div className="slideTitle">
        <span>{slide.title}</span>
      </div>
      <div className="slideDesc">
        <span>{slide.desc}</span>
      </div>
      {/* <div className="info"> */}
      <a href={slide.url} target="_blank" className="info" rel="noreferrer">
        Check it!
      </a>
      {/* </div> */}
    </div>
  </div>
));

export default Slides;
