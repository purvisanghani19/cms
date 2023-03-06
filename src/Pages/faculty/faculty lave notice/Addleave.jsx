import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';
import './facleave.css';



const Addleave = () => {

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  console.log(date, name, course, email, subject, message);


  const navigation=useNavigate()
  const handlenotice = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/use/staff/staff-levae-notice", {
        date: date,
        name: name,
        course: course,
        email: email,
        subject: subject,
        message: message,
      })
      .then((result) => {
        console.log(result);
        alert("your message has been submitted !!");
        navigation('/facleavenotice')
      })
      .catch((error) => { 
        console.log(error);
      }, []);
  };
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column" >
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <h3 className='add-facleave' style={{ textAlign: "start", marginBottom: "20px", fontSize: "30px", color: "black" }}>Add Leave Notice</h3>
              <div className="row addleave">
                <div className="col-sm-12">
                  <form>
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <div className="form-group local-forms">
                          <label className='addfacleave'>
                            Date <span className="login-danger">*</span>
                          </label>
                          <input style={{ border: "1px solid black" }}
                            type="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group local-forms">
                          <label className='addfacleave'>
                            Name <span className="login-danger">*</span>
                          </label>
                          <input style={{ border: "1px solid black" }}
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group local-forms">
                          <label className='addfacleave'>
                            Email <span className="login-danger">*</span>
                          </label>
                          <input style={{ border: "1px solid black" }}
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group local-forms">
                          <label className='addfacleave' for="course">Course</label>
                          <select style={{ border: "1px solid black" }}
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            id="course"
                            name="course"
                            classNameName="form-control"
                          >
                            <option value="select">Select</option>
                            <option value="bcom">BCOM</option>
                            <option value="bba">BBA</option>
                            <option value="mba">BCA</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group local-forms">
                          <label className='addfacleave'>
                            Title <span className="login-danger">*</span>
                          </label>
                          <input style={{ border: "1px solid black" }}
                            type="text"
                            name="title"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-12 ">
                        <div className="form-group local-forms">
                          <label className='addfacleave'>
                            Message <span className="login-danger">*</span>
                          </label>
                          <textarea style={{ border: "1px solid black" }}
                            type="text"
                            placeholder="Enter your leave request message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-12 ">
                        <div className="student-submit">
                          <button
                            style={{ backgroundColor: "#17a2b8" }}
                            type="submit"
                            className="btn-leave"
                            onClick={handlenotice}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WithLayout(Addleave);