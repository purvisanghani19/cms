import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer" className="user-footer">
        <div className="footer">
          <div className="social-icon">
            <a>
              {" "}
              <i class="fa-brands fa-google"></i>
            </a>
            <a>
              {" "}
              <i class="fa-solid fa-phone"></i>
            </a>
          </div>

          <ul className="list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <p className="copyright">sutex bank of collage @ 2023</p>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
