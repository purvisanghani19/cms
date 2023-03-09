import React, { useEffect, useState } from "react";
import WithLayout from "../../../components/common/comfaculty/Sidebar/SideBar";
import "./subnotice.css";

const Subnotice = () => {
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/use/student/studentLeaveNotice/get").then(
      (result) => {
        result.json().then((resp) => {
          // console.warn("result", resp)
          setNotice(resp);
        });
      }
    );
  }, []);
  console.log(notice);

  return (
    <>
      {notice.map((item) => (
        <div className="subnotice mt-5" style={{ marginLeft: "268px" }}>
          <div className="col-xl-8" style={{ textAlign: "start" }}>
            <div className="card mb-4">
              <div
                className="card-header "
                style={{ backgroundColor: " #263159", color: "white" }}
              >
                Leave notice date:
              </div>

              <div className="card-body">
                <div className="col-md-6">
                  <label className="small mb-1">Student Name:</label>
                  <p> {item.name}</p>
                </div>

                <div className="subnoticepart d-flex">
                  <div className="col-md-6">
                    <label className="small mb-1">Course:</label>
                    <p> {item.course}</p>
                  </div>

                  <div className="col-md-6">
                    <label className="small mb-1">semester:</label>
                    <p> {item.semester}</p>
                  </div>
                </div>

                <div className="subnoticepart d-flex    ">
                  <div className="col-md-6">
                    <label className="small mb-1">division : </label>
                    <p> {item.division}</p>
                  </div>

                  <div className="col-md-6">
                    <label className="small mb-1">rollNo :</label>
                    <p> {item.rollNo}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="small mb-1">email :</label>
                  <p> {item.email}</p>
                </div>

                <div className="col-md-6">
                  <label className="small mb-1">subject:</label>
                  <p> {item.subject}</p>
                </div>

                <div className="col-md-6">
                  <label className="small mb-1">message :</label>
                  <p> {item.message}</p>
                </div>

                <div className="btnsubnotice">
                  <a href="#" class="btn btn-info ">
                    Leave approve
                  </a>
                  <a href="#" class="btn btn-danger ">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WithLayout(Subnotice);
