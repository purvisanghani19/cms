import React, { useState } from "react";
import "./notice.css";
import axios from "axios";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Leavenotice = () => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [division, setDivision] = useState("");
  const [rollNo,setRollno] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");

console.log(date,name,course,semester,division,email,subject,message);
  const handleapi = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/use/student/studentLeaveNotice/create", {
		date:date,
        name: name,
		course:course,
		semester:semester,
		division:division,
		rollNo:rollNo,
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
      <div class="noti_container">
        <h1>Leave Notice</h1>
        <form>
          <label for="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            placeholder="Enter  date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label  for="course">Course</label>
          <select value={course} onChange={(e) => setCourse(e.target.value)}  id="course" name="course" className="course">
            <option value="select" >Select</option>
            <option value="bcom" >
              BCOM
            </option>
            <option value="bba">
              BBA
            </option>
            <option value="mba" >
              BCA
            </option>
          </select>
          <label for="semester">Semester</label>
          <select value={semester} onChange={(e) => setSemester(e.target.value)} id="semester" name="semester" className="course">
            <option value="select" >semester</option>
            <option value=" 1"> 1</option>
            <option value=" 2"> 2</option>
            <option value=" 3"> 3</option>
          </select>
          <label for="course">Division</label>
          <select value={division} onChange={(e) => setDivision(e.target.value)} id="diviosion" name="diviosion" className="course">
            <option value="select" >Select</option>
            <option value=" 1"> 1</option>
            <option value=" 2"> 2</option>
            <option value=" 3"> 3</option>
          </select>
		  <label for="rollno">Roll No:</label>
          <input
            type="number"
            id="rollno" 
            name="rollno"
			value={rollNo}
			onChange={(e) => setRollno(e.target.value)}
            placeholder="Enter your rollno"
            required
          />
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
          <button className="leavenotice-btn" type="submit" onClick={handleapi}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default WithLayout(Leavenotice);
