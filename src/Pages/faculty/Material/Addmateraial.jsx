import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import WithLayout from "../../../components/common/comfaculty/Sidebar/SideBar";
import "./material.css";

const Addmateraial = () => {
  const navigate = useNavigate("");

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [division, setDivision] = useState("");
  // const [date, setDate] = useState("");
  const [typeOfFile, setTypeOfFile] = useState("");

  console.log(name, course, semester,division, typeOfFile);

  const handlematerial = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/use/staff/material", {
        name: name,
        course: course,
        semester:semester,
        division:division,
        // date: date,
        typeOfFile: typeOfFile,
      })
      .then((result) => {
        console.log(result);
        alert("your feedback has been submmited");
        navigate("/material");
      })
      .catch((error) => {
        console.log(error);
        alert("!!🥴oops try again");
      }, []);
  };

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row add-material">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <h5 className="form-title">
                            <span className="span-addmaterial">
                              Material Details
                            </span>
                          </h5>
                        </div>
                        <div className="col-12">
                          <div className="form-group local-forms">
                            <label className="lbladdmaterial">
                              Name <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              className="form-control name-input"
                              placeholder="Enter name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label className="lbladdmaterial">
                              Course <span className="login-danger">*</span>
                            </label>
                            <select
                              className="form-control select"
                              name="course"
                              value={course}
                          onChange={(e) => setCourse(e.target.value)}
                            >
                              <option>Select course</option>
                              <option>BCA</option>
                              <option>BBA</option>
                              <option>BCON</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label className="lbladdmaterial">
                              Semester <span className="login-danger">*</span>
                            </label>
                            <select
                              className="form-control select"
                              name="semester"
                              value={semester}
                          onChange={(e) => setSemester(e.target.value)}
                            >
                              <option>Select semester</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label className="lbladdmaterial">
                              Division <span className="login-danger">*</span>
                            </label>
                            <select
                              className="form-control select"
                              name="division"
                              value={division}
                          onChange={(e) => setDivision(e.target.value)}
                            >
                              <option>Select division</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                            </select>
                          </div>
                        </div>
                        {/* <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label className="lbladdmaterial">
                              Date <span className="login-danger">*</span>
                            </label>
                            <input
                              type="date"
                              name="date"
                              className="form-control"
                              placeholder="Enter Date"
                              value={date}
                          onChange={(e) => setDate(e.target.value)}
                            />
                          </div>
                        </div> */}
                        <div className="col-12 col-sm-8">
                          <div className="form-group local-forms">
                            <label className="lbladdmaterial">
                              Type <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              className="form-control name-input"
                              placeholder="Enter name"
                              value={typeOfFile}
                          onChange={(e) => setTypeOfFile(e.target.value)}
                            />
                          </div>
                        </div>
                        <input type="file" />
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms"></div>
                        </div>

                        <div className="col-12">
                          <div className="student-submit">
                            <button type="submit" className="btn btn-primary" onClick={handlematerial}>
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
      </div>
    </>
  );
};

export default WithLayout(Addmateraial);
