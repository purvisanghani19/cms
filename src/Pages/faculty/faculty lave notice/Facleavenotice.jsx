import React from "react";
import WithLayout from "../../../components/common/comfaculty/Sidebar/SideBar";
import "./facleave.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";

const Facleavenotice = () => {

  const [facultyleavenoti, setFacleave] = useState();

  const getfacleave = async () => {
    var data = JSON.parse(localStorage.getItem("user")).response.data.userId;
    // console.log("facleave", data);

    let facleaveget = await axios.get(
      ` http://localhost:5000/api/use/admin/staff-leave-notice/${data}`);

    // console.log("facleave", facleaveget);
    setFacleave(facleaveget.data.leavenotice);
  };

  useEffect(() => {
    getfacleave();
    // console.log("feed", feedstudent);
  }, []);
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div class="page-header">
                <div class="row align-items-center">
                  <div class="col">
                    <h3 class="page-title">Faculty Leave notice</h3>
                  </div>
                  <div class="col-auto text-right float-right ml-auto">
                    <Link to="/facleavenotice/addleave">
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
                        Add leave
                      </button>
                    </Link>
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
                              <th>Date</th>
                              <th>Reason</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>

                            {
                              facultyleavenoti && facultyleavenoti.map((item) => (
                                <tr>
                                {item.id}
                                  <td>{item.date}</td>
                                  <td>{item.reason}</td>
                                  <td>
                                    <Link to="/facleavenotice/viewnotice">
                                      <BsFillEyeFill style={{ color: "#263159" }} />
                                    </Link>
                                  </td>
                                </tr>
                              ))
                            }
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

export default WithLayout(Facleavenotice);