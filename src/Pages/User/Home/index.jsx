import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "./user.css";

const UserDashboard = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggelnav = () => {
    setToggleMenu(!toggleMenu);
    console.log("toggleMenu");
  };

  return (
    <div>
      <div class="main-home">
        {/* <video src={h1} autoPlay loop muted></video> */}

        <nav className="navbar">
          <ul
            className={toggleMenu ? "nav-links-mobile" : "nav-links"}
            onClick={() => setToggleMenu(false)}
          >
            <a href="#" className="item">
              <li>Home</li>
            </a>
            <a href="#about" className="item">
              <li>About</li>
            </a>
            <a href="#contact" className="item">
              <li>Contact</li>
            </a>
            <a href="#footer" to="/event" className="item">
              <li>Event</li>
            </a>
            <Link to="/login" className="item">
              <li>Login</li>
            </Link>
          </ul>
          <button
            className="mobile_menu_icon"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? (
              <i class="fa-sharp fa-solid fa-xmark"></i>
            ) : (
              <i class="fa-sharp fa-solid fa-bars"></i>
            )}
          </button>
        </nav>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVuaXZlcnNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="contant">
        <h1 className="index-contant">Welcome to our collage</h1>
        <div className="harvi">
          <div className="btn-1 c1">GET STARTED</div>
        </div>
      </div>

      <About id="#about" />

      <Contact id="#contact" />
      <Footer id="#footer" />
    </div>
  );
};

export default UserDashboard;
