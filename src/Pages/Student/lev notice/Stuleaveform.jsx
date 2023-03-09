import axios from "axios";
import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";
// import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import WithLayout from "../../../components/common/comstudent/Stusidebar";
import "./stuleavenotice.css";

const Stuleaveform = () => {
  const navigation = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [division, setDivision] = useState("");
  const [spid, setSpid] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  // console.log(date, fname,lname, course, semester, division, email, reason, message);

  const handlenotice = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/use/student/student-leave-notice", {
        fName: fname,
        lName: lname,
        email: email,
        course: course,
        sem: semester,
        div: division,
        spid: spid,
        reason: reason,
        date: date,
        message: message,
      })
      .then((result) => {
        console.log(result);
        alert("your leave has been submmited");
        navigation("/Leavestud");
      })
      .catch((error) => {
        console.log(error);
      }, []);
  };
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div className="d-flex">
                <a href="/Leavestud">
                  <BsFillArrowLeftCircleFill className="leaveaero" />
                </a>
                <h3 className="leave-text">Add Leave</h3>
              </div>
              <div className="row" style={{ textAlign: "start" }}>
                <div className="col-sm-12">
                  <form className="stu-leaveform">
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <div className="form-group local-forms">
                          <label>
                            First Name <span className="login-danger">*</span>
                          </label>
                          <input
                            style={{ border: "1px solid black" }}
                            type="text"
                            name="fname"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group local-forms">
                          <label>
                            Last Name <span className="login-danger">*</span>
                          </label>
                          <input
                            style={{ border: "1px solid black" }}
                            type="text"
                            name="lname"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group local-forms">
                          <label>
                            Email <span className="login-danger">*</span>
                          </label>
                          <input
                            style={{ border: "1px solid black" }}
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
                          <label for="course">Course</label>
                          <select
                            style={{ border: "1px solid black" }}
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
                          <label for="subject">Semester:</label>
                          <select
                            style={{ border: "1px solid black" }}
                            value={semester}
                            onChange={(e) => setSemester(e.target.value)}
                            id="semester"
                            name="semester"
                            classNameName="form-control"
                          >
                            <option value="select">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group local-forms">
                          <label for="subject">Division:</label>
                          <select
                            style={{ border: "1px solid black" }}
                            value={division}
                            onChange={(e) => setDivision(e.target.value)}
                            id="division"
                            name="division"
                            classNameName="form-control"
                          >
                            <option value="select">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group local-forms">
                          <label>
                            SPID <span className="login-danger">*</span>
                          </label>
                          <input
                            style={{ border: "1px solid black" }}
                            type="text"
                            name="spid"
                            value={spid}
                            onChange={(e) => setSpid(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-6">
                        <div className="form-group local-forms">
                          <label>
                            Reason <span className="login-danger">*</span>
                          </label>
                          <input
                            style={{ border: "1px solid black" }}
                            type="text"
                            name="title"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group local-forms">
                          <label>
                            Date <span className="login-danger">*</span>
                          </label>
                          <input
                            style={{ border: "1px solid black" }}
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
                          <label>
                            Message <span className="login-danger">*</span>
                          </label>
                          <textarea
                            style={{ border: "1px solid black" }}
                            type="text"
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
                            style={{ backgroundColor: "#263159 !important" }}
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
  );
};

export default WithLayout(Stuleaveform);
