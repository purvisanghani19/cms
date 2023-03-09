import React from "react";
import Navbar from "../../../components/User/Navbar";
import "./about.css";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about" className="about-section ">
        <div className="about-container">
          <div className="content_section">
            <div className="title">
              <h1>About us</h1>
            </div>
            <div className="about-content">
              <h3>
                A university is an institution where students study for degrees
                and where academic research is done.
              </h3>
              <p>
                A good quality institute bloom in an environment that fosters
                competitiveness, creative thinking, innovation and so forth. It
                provides a learning environment that encourages working on
                innovative projects in order to promote holistic personality
                development for nurturing future leaders.
              </p>
              <p>
                Usually a college campus includes libraries, lecture halls,
                residence halls, student centers or dining halls, and park-like
                settings.
              </p>
            </div>
          </div>
          <div className="image_section">
            <img
              src="https://img.freepik.com/free-vector/happy-women-learning-language-online-isolated-flat-vector-illustration-cartoon-female-characters-taking-individual-lessons-through-messenger-education-digital-technology-concept_74855-10088.jpg?w=2000"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
