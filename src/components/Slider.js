import "./Slider.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import React from "react";

import Slides from "./Slides";

function Slider() {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Projects</h2>
      </div>
      <div className="slide-container">
        <Carousel
         
          plugins={["autoplay", "infinite", "arrows"]}
          infinite
          slides={Slides}
          interval={3000}
          offset
          animationSpeed={1000}
        />
      </div>
    </div>
  );
}

export default Slider;
