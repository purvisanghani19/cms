import React, { useEffect, useState } from "react";
import "./stu.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Studentpro = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/use/student/getStudentProfile/get").then((result) => {
      result.json().then((resp) => {
        console.log("result", resp);
        setStudent(resp.stud);
      });
    }
    );
  })

  return (
    <>
      {
        student.map((item) => (
          <div
            className="container-xl px-4 mt-4"
            style={{ marginLeft: "268px", textAlign: " start" }}
          >
            <div className="row">
              <div className="col-xl-4" style={{ marginTop: "90px" }}>
                <div className="card mb-4 mb-xl-0">
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#263159", color: "white" }}
                  >
                    {/*  */}
                    Student Profile Picture
                  </div>
                  <div className="card-body text-center">
                    <img
                      className="img-account-profile rounded-circle mb-2"
                      src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="card mb-4">
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#263159", color: "white" }}
                  >
                    Student Details
                  </div>
                  <div className="card-body">
                    <div className="col-md-6">
                      <label className="small mb-1"> Student Name :</label>
                      <p> {item.name}</p>
                    </div>
                    <div className="stu-details d-flex">
                      <div className="col-md-6">
                        <label className="small mb-1">Student gender :</label>
                        <p> {item.gender}</p>
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1">Student date Of Birth :</label>
                        <p> {item.dateOfBirth}</p>
                      </div>
                    </div>
                    <div className="stu-details d-flex">
                      <div className="col-md-6">
                        <label className="small mb-1">contact No : </label>
                        <p> {item.contactNo}</p>
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1">Email :</label>
                        <p> {item.email}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Father Name :</label>
                      <p> {item.fatherName}</p>
                    </div>
                    <div className="stu-details d-flex">
                    <div className="col-md-6">
                      <label className="small mb-1">Father Ocupation :</label>
                      <p> {item.fatherOcupation}</p>
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Father ContactNo :</label>
                      <p> {item.fatherContactNo}</p>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Father Email :</label>
                      <p> {item.fatherEmail}</p>
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Mother Name :</label>
                      <p> {item.motherName}</p>
                    </div>
                    <div className="stu-details d-flex">
                    <div className="col-md-6">
                      <label className="small mb-1">Mother Ocupation :</label>
                      <p> {item.motherOcupation}</p>
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Mother ContactNo :</label>
                      <p> {item.motherContactNo}</p>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Mother Email :</label>
                      <p> {item.motherEmail}</p>
                    </div>
                    <div className="stu-details d-flex">
                    <div className="col-md-6">
                      <label className="small mb-1">Address :</label>
                      <p> {item.address}</p>
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">City :</label>
                      <p> {item.city}</p>
                    </div>
                    </div>
                    <div className="stu-details d-flex">
                    <div className="col-md-6">
                      <label className="small mb-1">State :</label>
                      <p> {item.state}</p>
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Country :</label>
                      <p> {item.country}</p>
                    </div>
                    </div>
                    <div className="stu-details d-flex">
                    <div className="col-md-6">
                      <label className="small mb-1">Course :</label>
                      <p> {item.course}</p>
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Year :</label>
                      <p> {item.year}</p>
                    </div>
                    </div>
                    <div className="stu-details d-flex">
                    <div className="col-md-6">
                      <label className="small mb-1">Semester :</label>
                      <p> {item.semester}</p>
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Division :</label>
                      <p> {item.division}</p>
                    </div>
                   </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Spid :</label>
                      <p> {item.spid}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }


    </>
  );
};

export default WithLayout(Studentpro);
