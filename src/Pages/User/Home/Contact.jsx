import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import Navbar from "../../../components/User/Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log({ name, email, message });

  const handleapi = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:4000/api/use/contactus/create", {
        name: name,
        email: email,
        message: message,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  };
  return (
    <>
      <Navbar />
      <div id="contact" className="contact">
        <div className="contact_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9052831912177!2d72.85250239999995!3d21.235604200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f27ee8159e3%3A0xf6defb4d03e81080!2sSutex%20Bank%20College%20of%20Computer%20Applications%20%26%20Science!5e0!3m2!1sen!2sin!4v1675084745543!5m2!1sen!2sin"
            width="100"
            height="auto"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact_form">
          <h1>Contact form</h1>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="contact_form_txt"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="contact_form_txt"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Message"
              className="contact_form_txtarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {/* <button
              type="submit"
              placeholder="Submit"
              className="contact_form_btn"
              onChange={handleapi}
            /> */}
            <button
              type="submit"
              placeholder="Submit"
              className="contact_form_btn"
              onClick={handleapi}
            >
              submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
