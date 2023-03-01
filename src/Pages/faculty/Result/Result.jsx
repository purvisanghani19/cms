import React from "react";
import { Table } from "react-bootstrap";
import WithLayout from "../../../components/common/comfaculty/Sidebar/SideBar";

const Result = () => {
  return (
    <>
      <div
        className="container-xl px-4 mt-5 "
        style={{ marginLeft: "268px", textAlign: " start" }}
      >
        <div className="row">
          <div className="col-xl-14">
            <div className="card mb-3">
              <div
                className="card-header stunotice"
                style={{
                  backgroundColor: "#263159",
                  color: "#f8f9fa",
                  textAlign: "center",
                }}
              >
                Student result{" "}
              </div>
              <div className="card-body d-flex ">
                <div className="col-md-3">
                  <label className="small mb-1">course :</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="" disabled selected>
                      Select your course
                    </option>
                    <option value="1">BBA</option>
                    <option value="2">BCA</option>
                    <option value="3">BCOM</option>
                  </select>
                </div>
                <div className="col-md-3">
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
                <div className="col-md-3">
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
                  <a href="" class="btn btn-danger" style={{ width: "138px" }}>
                    Search
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   

   
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="row">
            <div class="page-header">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="page-title">Students</h3>
                </div>
                <div class="col-auto text-right float-right ml-auto">
                  {/* <a href="/ourstudent/addstudent">
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
                  </a> */}
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div className="shadow">
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
                          
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">PRE2209</td>
                        <td class="text-center">
                          
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
        </div>
      </div>
    </div>
    </>
  );
};

export default WithLayout(Result);
