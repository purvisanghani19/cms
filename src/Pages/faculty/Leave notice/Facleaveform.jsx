import axios from "axios";
import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import WithLayout from "../../../components/common/comfaculty/Sidebar/SideBar";
import "./facleavenotice.css";

const Facleaveform = () => {

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");

  console.log(date,name,course,email,subject,message);


  const handlenotice = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:4000/api/use/faculty/facultyLeaveNotice/create", {
		    date:date,
        Name: name,
		    course:course,
        email: email,
		    subject:subject,
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
      <div className="facultylevnoti" style={{ marginLeft: "400px" }}>
        <div className="leaveicon d-flex">
          <a href="/facleavenotice">
            <BsFillArrowLeftCircleFill className="addnotice-icon" />
          </a>
          <h1>Leave Notice</h1>
        </div>
        <form className="leavenotice-form">
          <label for="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Enter  date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label for="course">Course</label>
          <select
            value={course}
             onChange={(e) => setCourse(e.target.value)}
            id="course"
            name="course"
            classNameName="course"
          >
            <option value="select">Select</option>
            <option value="bcom">BCOM</option>
            <option value="bba">BBA</option>
            <option value="mba">BCA</option>
          </select>

          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <label for="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject	(e.target.value)}
            placeholder="Enter the subject of your leave"
            required
          />
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage	(e.target.value)}
            placeholder="Enter your leave request message"
            required
          ></textarea>
          <button classNameName="leavenotice-btn" type="submit" onClick={handlenotice}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default WithLayout(Facleaveform);
