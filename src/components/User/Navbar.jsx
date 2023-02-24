import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
   
  return (
    <>
       <nav className="user-navbar">
            <ul className={toggleMenu ? "nav-links-mobile" : "nav-links"} onClick={() => setToggleMenu(false)}>
              <Link to="/" className="item"><li>Home</li></Link>
              <Link to='/about'  className="item"><li>About</li></Link>
              <Link  to='/contact'  className="item"><li>Contact</li></Link>
              <Link to="/login" className="item"><li>Login</li></Link>

          
            </ul>
            <button className="mobile_menu_icon" onClick={() => setToggleMenu(!toggleMenu)}>
              {
                toggleMenu ? (<i class="fa-sharp fa-solid fa-xmark"></i>) : (<i class="fa-sharp fa-solid fa-bars"></i>)
              }
            </button>
          </nav>
    </>
  );
};

export default Navbar;
