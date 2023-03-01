import React from "react";
import './studentlist.css';
import WithLayout from "../../../components/common/comfaculty/Sidebar/SideBar";
import { Table } from "react-bootstrap";
// import Table from "react-bootstrap/Table";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";


const Studentlist = () => {
  return (
    <>
      {/* <div id="content">
        <div
          className="container-fluid"
          style={{ width: "100%", marginLeft: "268px" }}
        >
          <div className="studentlist" style={{ overflow: "hidden" }}>
            <div className="col-xl-6">
              <div className="card mb-3">
                <div
                  className="card-header stunotice"
                  style={{
                    backgroundColor: "#263159",
                    color: "#f8f9fa",
                    textAlign: "center",
                  }}
                >
                  Student List{" "}
                </div>
                <div className="card-body d-flex">
                  <div className="col-md-4">
                    <label className="small mb-1">Semester :</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="" disabled selected>
                        Select your semester
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="1">4</option>
                      <option value="2">5</option>
                      <option value="3">6</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="small mb-1">Division :</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="" disabled selected>
                        Select your Division
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div
                    className="searchbtn"
                    style={{ margin: "18px", textAlign: "start" }}
                  >
                    <a
                      href=""
                      class="btn btn-danger"
                      style={{ width: "138px" }}
                    >
                      Search
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div id="content-wrapper" className="d-flex flex-column"  style={{marginLeft:"268px"}}>
      <div id="content">
        <div className="container-fluid">
          <div className="row">
            <div class="page-header">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="page-title">Students</h3>
                </div>
                <div class="col-auto text-right float-right ml-auto">
                  <a href="/ourstudent/addstudent">
                    <button
                      style={{
                        padding: "3px 25px",
                        marginRight: "25px",
                        borderRadius: "5px",
                        backgroundColor: "#005d91",
                        border: "none",
                        color: "#fff",
                      }}
                    >
                      Add
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <Table striped bordered hover>
                    <thead>
                      <tr style={{ backgroundColor: "#005d91" }}>
                        <th class="text-center">ID</th>
                        <th class="text-center">Name</th>
                        <th class="text-center">Email</th>
                        <th class="text-center">Gender</th>
                        <th class="text-center">BOD</th>
                        <th class="text-center">Mobile Number</th>
                        <th class="text-center">Address</th>
                        <th class="text-center">Course</th>
                        <th class="text-center">Sem</th>
                        <th class="text-center">Div</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">PRE2209</td>
                        <td class="text-center">
                          <h2 class="table-avatar">
                            <a
                              href="teacher-details.html"
                              class="avatar avatar-sm mr-2"
                            >
                              <img
                                class="img-circle elevation-2 user-img"
                                // src={userImg}
                              />
                            </a>
                            <a
                              href="teacher-details.html"
                              style={{
                                textDecoration: "none",
                                color: "#212529",
                              }}
                            >
                              Aaliyah
                            </a>
                          </h2>
                        </td>
                        <td class="text-center">aliyah@gmail.com</td>
                        <td class="text-center">Female</td>
                        <td class="text-center">12/10/1979</td>
                        <td class="text-center">097 3584 5870</td>
                        <td class="text-center">911 Deer Ridge Drive,USA</td>
                        <td class="text-center">BBA</td>
                        <td class="text-center">4</td>
                        <td class="text-center">1</td>
                        <td class="text-center">
                          {/* <div class="actions">
                            <EditIcon
                              style={{
                                marginRight: "5px",
                                color: "#0094ff",
                              }}
                            />
                            <DeleteIcon style={{ color: "#db3d3d" }} />
                          </div> */}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">PRE2209</td>
                        <td class="text-center">
                          <h2 class="table-avatar">
                            <a
                              href="teacher-details.html"
                              class="avatar avatar-sm mr-2"
                            >
                              <img
                                class="img-circle elevation-2 user-img"
                                // src={userImg}
                              />
                            </a>
                            <a
                              href="teacher-details.html"
                              style={{
                                textDecoration: "none",
                                color: "#212529",
                              }}
                            >
                              Aaliyah
                            </a>
                          </h2>
                        </td>
                        <td class="text-center">aliyah@gmail.com</td>
                        <td class="text-center">Female</td>
                        <td class="text-center">12/10/1979</td>
                        <td class="text-center">097 3584 5870</td>
                        <td class="text-center">911 Deer Ridge Drive,USA</td>
                        <td class="text-center">BBA</td>
                        <td class="text-center">6</td>
                        <td class="text-center">2</td>
                        <td class="text-center">
                          
                        </td>
                      </tr>
                    </tbody>
                  </Table>
          </div>
        </div>
      </div>
    </div>


    </>
  );
};

export default WithLayout(Studentlist);
