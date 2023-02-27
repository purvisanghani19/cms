import React from "react";
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

      {/* <div className="container-xl px-4 mt-5 " style={{ marginLeft: "268px", textAlign: " start" }}>
       
            <div className="card mb-4" style={{height:"auto"}}>
              <div className="card-header stunotice" style={{ backgroundColor: "#263159", color: "#f8f9fa", textAlign: "center" }}>Student result </div>
              <div className="card-body">
                  <div className="container mt-3">
                <div className="row table-responsive mt-4">
                    <table className="table" style={{heigh :"auto"}}>
                        <thead>
                            <tr className='tbltr'>
                                <th scope="col">Roll No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Course</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Passing marks</th>
                                <th scope="col">Total marks</th>
                            </tr>
                            <tr>
                            <td> 11</td>
                            <td>sxvvx</td>
                            <td>sxvvx</td>
                            <td>sxvvx</td>
                            <td>sxvvx</td>
                             <td>sxvvx</td>
                            </tr>
                            <tr>
                            <td> 11</td>
                            <td>sxvvx</td>
                            <td>sxvvx</td>
                            <td>sxvvx</td>
                            <td>sxvvx</td>
                             <td>sxvvx</td>
                            </tr>
                            <tr>
                            <td> 11</td>
                            <td>sxvvx</td>
                            <td>sxvvx</td>
                            <td>sxvvx</td>
                            <td>sxvvx</td>
                             <td>sxvvx</td>
                            </tr>
                        </thead>
                        <tbody>
                          

                        </tbody>

                    </table>
                </div>
            </div>
              </div>
            </div>
          
     
    </div> */}

      {/* <div class="row" style={{marginLeft:"280px"}}>
        <div class="col-md-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="d-sm-flex align-items-center mb-4">
                <a href="#" class="text-dark ml-auto mb-3 mb-sm-0"> View all Students</a>
              </div>
              <div class="table-responsive border rounded p-1">
              <table className="table">
                <tr className="table-header">
                    <th className="cell">S.no</th>
                    <th className="cell">Name</th>
                    <th className="cell">Username</th>
                    <th className="cell">Address</th>
                    <th className="cell">Email Id</th>
                    <th className="cell">Phone No.</th>
                </tr>
                <tr  className="active">
                    <td>1</td>
                    <td>Smith</td>
                    <td>Smith Mark</td>
                    <td>#67/B Maxico Usa</td>
                    <td>mark@gmail.com</td>
                    <td>+3755438764</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Smith Mark</td>
                    <td>Smith</td>
                    <td>#67/A England</td>
                    <td>marksmith@gmail.com</td>
                    <td>+376768764</td>
                </tr>
                <tr  className="active">
                    <td>3</td>
                    <td>Willson</td>
                    <td>Will</td>
                    <td>#3657/34 India New Delhi</td>
                    <td>will34@gmail.com</td>
                    <td>+372385694</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Jacob</td>
                    <td>Jacob Thornton</td>
                    <td>#67/B Maxico Usa</td>
                    <td>Jacob@gmail.com</td>
                    <td>+3755438764</td>
                </tr>
                <tr  className="active">
                    <td>5</td>
                    <td>Larry</td>
                    <td>Larry  Bird</td>
                    <td>#67/B  USA</td>
                    <td>BirdLarry@gmail.com</td>
                    <td>+6675438764</td>
                </tr>
            </table>
              </div>

            </div>
          </div>
        </div>
      </div> */}

      <div
        className="container-xl px-6 mt-5"
        style={{ marginLeft: "280px", textAlign: " start" }}
      >
        <div className="row">
          <div className="col-xl-15">
            <div className="card mb-4">
              <div
                className="card-header stunotice"
                style={{
                  backgroundColor: "#263159",
                  color: "#f8f9fa",
                  textAlign: "center",
                }}
              >
                All students{" "}
              </div>
              <div className="card-body">
                <div className="tbldetails">
                  <div className="row table-responsive mt-4">

                  <table class="table" >
                          <tr class="table-header">
                            <th class="cell">SID</th>
                            <th class="cell">Name</th>
                            <th class="cell">Course</th>
                            <th class="cell">Semester</th>
                            <th class="cell">Division</th>
                            <th class="cell">Percentage</th>
                          </tr>
                          <tr class="active">
                            <td>20410145</td>
                            <td>Smith</td>
                            <td>BCA</td>
                            <td>Semester-1</td>
                            <td>Division-1</td>
                            <td>+60%</td>
                          </tr>
                          <tr>
                          <td>20410145</td>
                            <td>Smith</td>
                            <td>BCA</td>
                            <td>Semester-1</td>
                            <td>Division-1</td>
                            <td>+60%</td>
                          </tr>
                          <tr class="active">
                          <td>20410145</td>
                            <td>Smith</td>
                            <td>BCA</td>
                            <td>Semester-1</td>
                            <td>Division-1</td>
                            <td>+60%</td>
                          </tr>
                          <tr>
                          <td>20410145</td>
                            <td>Smith</td>
                            <td>BCA</td>
                            <td>Semester-1</td>
                            <td>Division-1</td>
                            <td>+60%</td>
                          </tr>
                          <tr class="active">
                          <td>20410145</td>
                            <td>Smith</td>
                            <td>BCA</td>
                            <td>Semester-1</td>
                            <td>Division-1</td>
                            <td>+60%</td>
                          </tr>
                        </table>
                    {/* <table
                      className="table"
                      style={{ border: "1px solid black" }}
                    >
                      <thead>
                        <tr className="tbl">
                          <th scope="col">Roll No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Semester</th>
                          <th scope="col">Email</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="tbldetails" style={{ height: "2px" }}>
                          <td>11</td>
                          <td>purvi</td>
                          <td>2</td>
                          <td>purvi@123</td>
                          <td>
                            <button className="studentdetailview">view</button>
                          </td>
                        </tr>
                        <tr style={{ height: "2px" }}>
                          <td>11</td>
                          <td>purvi</td>
                          <td>2</td>
                          <td>purvi@123</td>
                          <td>
                            <button className="studentdetailview">view</button>
                          </td>
                        </tr>
                        <tr >
                          <td>11</td>
                          <td>purvi</td>
                          <td>2</td>
                          <td>purvi@123</td>
                          <td>
                            <button className="studentdetailview">view</button>
                          </td>
                        </tr>{" "}
                        <tr>
                          <td>11</td>
                          <td>purvi</td>
                          <td>2</td>
                          <td>purvi@123</td>
                          <td>
                            <button className="studentdetailview">view</button>
                          </td>
                        </tr>
                      </tbody>
                    </table> */}
                  </div>
                  {/* <table class="table table-bordered" aria-label="TABLE">
                                        <thead role="rowgroup">
                                            <tr role="row">
                                                <th role="columnheader" scope="col" tabindex="0">Select Day</th>
                                                <th role="columnheader" scope="col" tabindex="0">Article Name</th>
                                                <th role="columnheader" scope="col" tabindex="0">Author</th>
                                                <th role="columnheader" scope="col" tabindex="0">Words</th>
                                            </tr>
                                        </thead>
                                        <tbody role="rowgroup">
                                            <tr role="row">
                                                <td>Bootstrap 4 CDN and Starter Template</td>
                                                <td>Cristina</td>
                                                <td>913</td>
                                                <td>2.846</td>
                                            </tr>
                                            <tr role="row">
                                                <td>Bootstrap Grid 4 Tutorial and Examples</td>
                                                <td>Cristina</td>
                                                <td>1.434</td>
                                                <td>3.417</td>
                                            </tr>
                                            <tr role="row">
                                                <td>Bootstrap Flexbox Tutorial and Examples</td>
                                                <td>Cristina</td>
                                                <td>1.877</td>
                                                <td>1.234</td>
                                            </tr>
                                        </tbody>
                                    </table> */}
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
