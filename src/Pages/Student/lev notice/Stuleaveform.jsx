import axios from 'axios';
import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import WithLayout from '../../../components/common/comstudent/Stusidebar';
import './stuleavenotice.css';



const Stuleaveform = () => {
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

  const handlenotice = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/use/student/studentLeaveNotice/create", {
		date:date,
        Name: name,
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
     <div className="stulevnoti" style={{marginLeft:"268px"}}>
     <div className='leaveicon d-flex' >
        <BsFillArrowLeftCircleFill className='addnotice-icon'/>
        <h1 >Leave Notice</h1>
     </div>
        <form className='leavenotice-form'>
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
          <label  for="course">Course</label>
          <select 
          value={course}
           onChange={(e) => setCourse(e.target.value)} 
            id="course" name="course" classNameName="course">
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
          <label for="subject">Semester:</label>
          <select 
          value={semester}
           onChange={(e) => setSemester(e.target.value)} 
            id="semester" name="semester" classNameName="semester">
            <option value="select" >Select</option>
            <option value="1" >
             1
            </option>
            <option value="2">
            2
            </option>
            <option value="3" >
             3
            </option>
          </select>
             <label for="subject">Division:</label>
             <select 
          value={division}
           onChange={(e) => setDivision(e.target.value)} 
            id="division" name="division" classNameName="division">
            <option value="select" >Select</option>
            <option value="1" >
             1
            </option>
            <option value="2">
            2
            </option>
            <option value="3" >
             3
            </option>
            <option value="4" >
             4
            </option>
            <option value="5" >
             5
            </option>
            <option value="6" >
             6
            </option>
          </select>
        <label for="name">Roll No:</label>
          <input
            type="text"
            id="rollno"
            name="rollno"
            placeholder="Enter your roll no"
            value={rollNo}
            onChange={(e) => setRollno(e.target.value)}
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
          <button classNameName="leavenotice-btn" type="submit" onClick={handlenotice}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default WithLayout(Stuleaveform);