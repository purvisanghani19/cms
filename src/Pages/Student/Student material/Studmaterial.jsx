import React from "react";
import "./studmaterial.css";

import WithLayout from "../../../components/common/comstudent/Stusidebar";
import { BsFillEyeFill } from "react-icons/bs";

const Studmaterial = () => {
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div class="page-header">
                <div class="row align-items-center">
                  <div class="col">
                    <h3 class="page-title">Student Material</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="card card-table">
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-hover table-center mb-0 datatable">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Course</th>
                              <th>Title</th>
                              <th>Date</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Avni Zalavadiya</td>
                              <td>BCA</td>
                              <td>Theory assignment</td>
                              <td>12/10/2022</td>
                              <td>
                                <a href="/Viewstudmaterial">
                                  <BsFillEyeFill style={{ color: "#263159" }} />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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

export default WithLayout(Studmaterial);
