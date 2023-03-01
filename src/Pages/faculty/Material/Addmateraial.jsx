import React from 'react';
import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';
import './material.css';




const Addmateraial = () => {
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
                              <span>Material Details</span>
                            </h5>
                          </div>
                          <div className="col-12">
                            <div className="form-group local-forms">
                              <label>
                                Name <span className="login-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="name"
                                className="form-control name-input"
                                placeholder="Enter name"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Course <span className="login-danger">*</span>
                              </label>
                              <select
                                className="form-control select"
                                name="course">
                                <option>Select course</option>
                                <option>BCA</option>
                                <option>BBA</option>
                                <option>BCON</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Semester <span className="login-danger">*</span>
                              </label>
                              <select
                                className="form-control select"
                                name="semester">
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
                              <label>
                                Division <span className="login-danger">*</span>
                              </label>
                              <select
                                className="form-control select"
                                name="division">
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
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Date {" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input
                                type="date"
                                name="date"
                                className="form-control"
                                placeholder="Enter Date"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Submission Date {" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input
                                type="date"
                                name="sdate"
                                className="form-control"
                                placeholder="Enter submission Date"
                              />
                            </div>
                          </div>
                          <div class="col-12 col-sm-4">
                            <label>
                                Type of file <span className="login-danger">*</span>
                              </label>
                              <select
                                className="form-control select"
                                name="course">
                                <option>Select type</option>
                                <option>Assignment</option>
                                <option>Syllabus</option>
                                <option>Material</option>
                              </select>
                          </div>
                            <input type="file" style={{ marginLeft: "20px" }} />
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                             
                            </div>
                          </div>
                         
                          <div className="col-12">
                            <div className="student-submit">
                              <button
                                type="submit"
                                className="btn btn-primary"
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
      </div>
    </>
  )
}

export default WithLayout(Addmateraial);