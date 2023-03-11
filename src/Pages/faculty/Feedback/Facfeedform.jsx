import React, { useState } from "react";
import "./facfeedform.css";
import WithLayout from "../../../components/common/comfaculty/Sidebar/SideBar";
import axios from "axios";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Facfeedform = () => {

    const navigate=useNavigate("");
    
      const [fname, setFname] = useState("");
      const [lname, setLname] = useState("");
      const [course, setCourse] = useState("");
      const [title, setTitle] = useState("");
      const [message, setMessage] = useState("");

  
      console.log(fname, lname, course, title, message);
    
      const handlefeedform = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:5000/api/use/staff/staff-feedback/", {
            fName: fname,
            lName: lname,
            course: course,
            title:title,
            message: message,
            createdBy: JSON.parse(localStorage.getItem('user'))?.response?.data?.userId})
          .then((result) => {
            console.log(result);
            alert("your feedback has been submmited");
            navigate("/facfeedback");
          })
          .catch((error) => {
            console.log(error);
            alert("!!🥴oops try again");
          }, []);
      };
    
  
  
 
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
        
          <div
            className="row"
            style={{ textAlign: "start", marginBottom: "15px" }}
          >
          <div className="d-flex" >

          <Link to="/facfeedback"><BsFillArrowLeftCircleFill className="feedaero" /></Link>
            <h3 className="feed-text">Add Feedback</h3>
          </div>
            <div className="row">
              <div className="col-sm-12">
                <form className="feedbackform" >
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group local-forms">
                        <label>
                          First Name <span className="login-danger">*</span>
                        </label>
                        <input
                          style={{ border: "1px solid black" }}
                          type="text"
                          name="name"
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
                          name="name"
                          value={lname}
                          onChange={(e) => setLname(e.target.value)}
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
                        <label>
                          Title <span className="login-danger">*</span>
                        </label>
                        <input
                          style={{ border: "1px solid black" }}
                          type="text"
                          name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                    {/* <div className="col-12 col-sm-6">
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
                    </div> */}
                    <div className="col-12">
                      <div className="form-group local-forms">
                        <label>
                          Message <span className="login-danger">*</span>
                        </label>
                        <textarea
                          style={{ border: "1px solid black" }}
                          type="text"
                          name="discription"
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
                          onClick={handlefeedform}
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
  );
};

export default WithLayout(Facfeedform);
