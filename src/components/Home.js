import Cover from "./Cover";
import "../App.css";
import NavBar from "./NavBar";
import React from "react";
import { useState, useEffect } from "react";
import About from "./About";
import Slider from "./Slider";
import Info from "./Info";
import Footer from "./Footer";
import Skiller from "./Skiller";

const Home = () => {
  const [scrollHeight, setScroll] = useState(0);

  const handlerScroll = () => {
    let position = window.pageYOffset;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
  }, [scrollHeight]);

  return (
    <div className="App" id="App">
      <NavBar scroll={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Skiller />
      <Info />

      <Footer />
    </div>
  );
};

export default Home;
