import React, { useEffect, useState } from "react";
import "./Cover.css";
import coverVideo from "../media/coverVideo.mp4";
const Cover = () => {
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="cover-container-loading">
          <video className="video" src={coverVideo} autoPlay loop muted />
          <div className="textoCover">
            <h1>Lucia Englender</h1>
            <p>👩‍💻 Full Stack Developer 👩‍💻</p>
          </div>
        </div>
      ) : (
        <div className="cover-container">
          <video className="video" src={coverVideo} autoPlay loop muted />
          <div className="textoCover">
            <h1>Lucia Englender</h1>
            <p>👩‍💻 Full Stack Developer 👩‍💻</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cover;
