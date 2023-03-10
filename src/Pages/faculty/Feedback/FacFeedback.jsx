import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
// import './feedback.css';
import WithLayout from "../../../components/common/comfaculty/Sidebar/SideBar";

const FacFeedback = () => {
  
  const [facfeed, setFacfeed] = useState([]);

  const getfacfeed = async () => {
    // var data = JSON.parse(localStorage.getItem("user")).response.data.usrId;
    // console.log("data", data)
    let facultyfeed = await axios.get(
      `http://localhost:5000/api/use/staff/staff-feedback/640abf278721e6222af370bf`,
      // {
      //   headers: {
      //     Authorization: ""
      //   }
      // }
    );

    console.log("facfeed", facultyfeed);
    // setFacfeed(facultyfeed.data.feedback);
  };

  useEffect(() => {
    getfacfeed();
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
                <h3 class="page-title" style={{textAlign:"start"}}>Feedback</h3>
              </div>
              <div class="col-auto text-right float-right ml-auto">
                <a href="/addfacfeedback">
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

          <div class="row" style={{marginBottom:"5px"}}>
            <div class="col-sm-12">
              <div className="shadow">
                <Table striped bordered hover>
                  <thead>
                    <tr style={{ backgroundColor: "#263159",color:"#fff" }}>
                      <th class="text-center">ID</th>
                      <th class="text-center">Name</th>
                      <th class="text-center">Course</th>
                      {/* <th class="text-center">Semester</th>
                      <th class="text-center">Division</th> */}
                      <th class="text-center">Title</th>
                      <th class="text-center">Date</th>
                      <th class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      facfeed.map((item)=>{
                    <tr>
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
                              {/* {item.fName +" "+lName} */}
                            </a>
                          </h2>
                        </td>
                      <td class="text-center">{item.course}</td>
                      <td class="text-center">{item.date}</td>
                      <td class="text-center">{item.title}</td>
                      {/* <td class="text-center">For college campus</td>
                      <td class="text-center">21-12-2002</td> */}
                      <td class="text-center">
                        <div class="actions">
                          <MdDelete style={{ color: "#db3d3d" }} />
                        </div>
                      </td>
                    </tr>
                      })
                    }
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

export default WithLayout(FacFeedback);
