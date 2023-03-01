import React from "react";
import './feedform.css';
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Studfeedform = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <div className="container-fluid">
        <div className="row" style={{textAlign:"start",marginBottom:"15px"}}>
          <h3 className="feed-text">Add Feedback</h3>
          <div className="row">
            <div className="col-sm-12">
              <form className="feedbackform">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group local-forms">
                      <label>
                      Name <span className="login-danger">*</span>
                      </label>
                      <input
                        style={{ border: "1px solid black" }}
                        type="date"
                        name="date"
                        // value={date}
                        // onChange={(e) => setDate(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group local-forms">
                      <label for="course">Course</label>
                      <select
                        style={{ border: "1px solid black" }}
                        // value={course}
                        // onChange={(e) => setCourse(e.target.value)}
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
                        // value={semester}
                        // onChange={(e) => setSemester(e.target.value)}
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
                        // value={division}
                        // onChange={(e) => setDivision(e.target.value)}
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
                       Title <span className="login-danger">*</span>
                      </label>
                      <input
                        style={{ border: "1px solid black" }}
                        type="text"
                        name="roll no"
                        // value={rollNo}
                        // onChange={(e) => setRollno(e.target.value)}
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
                        name="email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group local-forms">
                      <label>
                        Discription <span className="login-danger">*</span>
                      </label>
                      <textarea
                        style={{ border: "1px solid black" }}
                        type="text"
                        name="title"
                        // value={subject}
                        // onChange={(e) => setSubject(e.target.value)}
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
                        // onClick={handlenotice}
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

export default WithLayout(Studfeedform);
