import React, { useEffect, useState } from "react";
import "./stu.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Studentpro = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/use/student/getStudentProfile/get").then((result) => {
        result.json().then((resp) => {
          console.warn("result", resp);
          // setStudent(resp.stud);
        });
      }
    );
  })

  return (
    <>
      {
        student.map((item)=>(
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
                  Student Profile Picture
                </div>
                <div className="card-body text-center">
                {/* {item.profileImage} */}
                  {/* <img src={`data:image/jpeg;base64,${base64String(item)}`} width="300"/> */}
                 
                  fggfgh
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
                <div className="card-body ">
                  <div className="col-md-6 ">
                    <label className="small mb-1"> Student Name :</label>
                    <p> {item.name}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">Student gender :</label>
                    <p> {item.gender}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">Student dateOfBirth :</label>
                    <p> {item.dateOfBirth}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">contactNo : </label>
                    <p> {item.contactNo}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">email :</label>
                    <p> {item.email}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">fatherName :</label>
                    <p> {item.fatherName}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">fatherOcupation :</label>
                    <p> {item.fatherOcupation}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">fatherContactNo :</label>
                    <p> {item.fatherContactNo}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">fatherEmail :</label>
                    <p> {item.fatherEmail}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">mother Name :</label>
                    <p> {item.motherName}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">mother Ocupation :</label>
                    <p> {item.motherOcupation}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">mother ContactNo :</label>
                    <p> {item.motherContactNo}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">mother Email :</label>
                    <p> {item.motherEmail}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">address :</label>
                    <p> {item.address}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">city :</label>
                    <p> {item.city}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">state :</label>
                    <p> {item.state}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">country :</label>
                    <p> {item.country}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">course :</label>
                    <p> {item.course}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">year :</label>
                    <p> {item.year}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">semester :</label>
                    <p> {item.semester}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">division :</label>
                    <p> {item.division}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">spid :</label>
                    <p> {item.spid}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        )
        )}



    </>
  );
};

export default WithLayout(Studentpro);
