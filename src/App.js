import Cover from "./components/Cover";
import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import { useState, useEffect } from "react";
import About from "./components/About";
import Slider from "./components/Slider";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  const [scrollHeight, setScroll] = useState(0);
  const [innerHeight, setInnerHeight] = useState(window.scrollY);
  console.log(window);
  const handlerScroll = () => {
    let position = window.pageYOffset;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
  }, [scrollHeight]);
  return (
    <div className="App">
      <NavBar scroll={scrollHeight} height={innerHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
