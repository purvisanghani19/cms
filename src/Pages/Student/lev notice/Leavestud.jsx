import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Leavestud = () => {
  const [studleave, setStudleave] = useState("");

  const getleavestud = async () => {
    // var data = JSON.parse(localStorage.getItem("info"));
    let abc = "64048040b38ee5a85a63223b";
    let studentleave = await axios.get(
      `http://localhost:5000/api/use/staff/student-leave-notice${abc}`
    );

    // setStudleave(feedres.data.feedback);
    console.log("studentleave", studentleave);
  };

  useEffect(() => {
    getleavestud();
    // console.log("feed", feedstudent);
  }, []);
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="row">
            <div class="page-header">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="page-title">Student Leave notice</h3>
                </div>
                <div class="col-auto text-right float-right ml-auto">
                  <a href="/Leavestud/Stuleaveform">
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
                  </a>
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
                          {/* {
                          studleave.map((item)=>(

                          <tr>
                            <td>{item.date}</td>
                            <td>{item.reason}</td>
                            <td>
                              <a href="/Leavestud/studentviewnotice">
                                <BsFillEyeFill style={{ color: "#263159" }} />
                              </a>
                            </td>
                          </tr>
                          ))
                        } */}
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
  );
};
export default WithLayout(Leavestud);
