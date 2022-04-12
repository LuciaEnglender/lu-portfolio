import React from "react";
import "./NavBar.css";
function NavBar({ scroll, height }) {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const down = () => {
    window.scrollTo({ top: height, left: 0, behavior: "smooth" });
  };

  if (scroll > 20) {
    return (
      <nav className="navbar scrolling">
        <div className="navbar-logo" onClick={toTheTop}>
          asd
        </div>
      </nav>
    );
  } else {
   return ( <nav className="navbar goingDown">
      <div className="navbar-logo" onClick={down}>
        asd
      </div>
    </nav>)
  }
}

export default NavBar;
