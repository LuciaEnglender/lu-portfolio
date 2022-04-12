import React from "react";
import "./NavBar.css";
function NavBar({ scroll }) {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (scroll > 20) {
    return (
      <nav className="navbar scrolling">
        <div className="navbar-logo" onClick={toTheTop}>
          <i class="fa-solid fa-angles-up"></i>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar goingDown">
        <div className="navbar-logo"></div>
      </nav>
    );
  }
}

export default NavBar;
