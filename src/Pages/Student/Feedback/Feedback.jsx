import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Feedback = () => {
  const [feedstudent, setsFeedtudent] = useState([]);

  const getfeedstudent = async () => {
    // var data = JSON.parse(localStorage.getItem("info")).response.tokendata
    //   .userId;
    let data = "64048040b38ee5a85a63223b";
    let feedres = await axios.get(
      `http://localhost:5000/api/use/student/student-feedback/${data}`
    );

    setsFeedtudent(feedres.data.feedback);
    console.log("student", feedres);
  };

  useEffect(() => {
    getfeedstudent();
    // console.log("feed", feedstudent);
  }, []);
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        {/* {console.log("ittt", item)} */}
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div class="page-header">
                <div class="row align-items-center">
                  <div class="col">
                    <h3 class="page-title" style={{ textAlign: "start" }}>
                      Feedback
                    </h3>
                  </div>
                  <div class="col-auto text-right float-right ml-auto">
                    <Link to="/studfeedform">
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
                    </Link>
                  </div>
                </div>
              </div>

              <div class="row" style={{ marginBottom: "5px" }}>
                <div class="col-sm-12">
                  <div className="shadow">
                    <Table striped bordered hover>
                      <thead>
                        <tr
                          style={{
                            backgroundColor: "#263159",
                            color: "#fff",
                          }}
                        >
                          <th class="text-center">SPID</th>

                          <th class="text-center">Message</th>
                          <th class="text-center">Date</th>
                          <th class="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feedstudent.map((item) => (
                          <tr>
                            <td class="text-center">{item.spid}</td>

                            <td class="text-center">{item.message}</td>
                            <td class="text-center">{item.date}</td>
                            <td class="text-center">
                              <div class="actions">
                                <MdDelete style={{ color: "#db3d3d" }} />
                              </div>
                            </td>
                          </tr>
                        ))}
                        {/* <tr>
                          <td class="text-center">20410145</td>
                          <td class="text-center">
                            <h2 class="table-avatar">
                              <a
                                href="teacher-details.html"
                                class="avatar avatar-sm mr-2"
                              >
                                <img
                                  class="img-circle elevation-2 user-img"
                                  src="https://imgv3.fotor.com/images/slider-image/a-woman-in-a-suit-with-a-white-background.png"
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
                          <td class="text-center">BCA</td>

                          <td class="text-center">1</td>
                          <td class="text-center">5</td>
                          <td class="text-center">For college campus</td>
                          <td class="text-center">21-12-2002</td>
                          <td class="text-center">
                            <div class="actions">
                              <MdDelete style={{ color: "#db3d3d" }} />
                            </div>
                          </td>
                        </tr> */}
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

export default WithLayout(Feedback);
