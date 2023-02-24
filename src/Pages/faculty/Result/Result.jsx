import React from "react";
import WithLayout from "../../../components/common/comfaculty/Sidebar/SideBar";


const Result = () => {
  return (
    <>
      <div className="container-xl px-4 mt-5 " style={{ marginLeft: "268px", textAlign: " start" }}>
        <div className="row">
          <div className="col-xl-14">
            <div className="card mb-3">
              <div className="card-header stunotice" style={{ backgroundColor: "#263159", color: "#f8f9fa", textAlign: "center" }}>Student result </div>
              <div className="card-body d-flex "  >
                <div className="col-md-3">
                  <label className="small mb-1">course :</label>
                  <select class="form-select" aria-label="Default select example">
                    <option value="" disabled selected>Select your course</option>
                    <option value="1">BBA</option>
                    <option value="2">BCA</option>
                    <option value="3">BCOM</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="small mb-1" >Semester :</label>
                  <select class="form-select" aria-label="Default select example" >
                    <option value="" disabled selected>Select your semester</option>
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
                  <select class="form-select" aria-label="Default select example">
                    <option value="" disabled selected>Select your Division</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="searchbtn" style={{ margin: "18px", textAlign: "start" }}>
                  <a href="" class="btn btn-danger" style={{ width: "138px" }} >
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


      <div class="row" style={{marginLeft:"268px"}}>
        <div class="col-md-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="d-sm-flex align-items-center mb-4">
                <h4 class="card-title mb-sm-0">Manage Students</h4>
                <a href="#" class="text-dark ml-auto mb-3 mb-sm-0"> View all Students</a>
              </div>
              <div class="table-responsive border rounded p-1">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="font-weight-bold">S.No</th>
                      <th class="font-weight-bold">Student ID</th>
                      <th class="font-weight-bold">Student Class</th>
                      <th class="font-weight-bold">Student Name</th>
                      <th class="font-weight-bold">Student Email</th>
                      <th class="font-weight-bold">Admissin Date</th>
                      <th class="font-weight-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>zcxvxv</td>
                      <td>xcvxvxc</td>
                      <td>xcvxv</td>
                      <td>cvxvcv</td>
                      <td>dvxdvxdfgvx</td>
                      <td>dxdvxgfc</td>
                      <td>
                        <div><a href="hggg"><i class="icon-eye"></i></a> || <a href="" > <i class="icon-trash"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>zcxvxv</td>
                      <td>xcvxvxc</td>
                      <td>xcvxv</td>
                      <td>cvxvcv</td>
                      <td>dvxdvxdfgvx</td>
                      <td>dxdvxgfc</td>
                      <td>
                        <div><a href="hggg"><i class="icon-eye"></i></a> || <a href="" > <i class="icon-trash"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>zcxvxv</td>
                      <td>xcvxvxc</td>
                      <td>xcvxv</td>
                      <td>cvxvcv</td>
                      <td>dvxdvxdfgvx</td>
                      <td>dxdvxgfc</td>
                      <td>
                        <div><a href="hggg"><i class="icon-eye"></i></a> || <a href="" > <i class="icon-trash"></i></a>
                        </div>
                      </td>
                    </tr>
                   
                   
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default WithLayout(Result);
