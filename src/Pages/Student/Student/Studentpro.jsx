import React, { useEffect, useState } from "react";
import "./stu.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Studentpro = () => {
  // const [student, setStudent] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4000/api/use/admin/studentProfile/getall").then(
  //     (result) => {
  //       result.json().then((resp) => {
  //         console.warn("result", resp);
  //         setStudent(resp);
  //       });
  //     }
  //   );
  // }, []);
  // console.log("result");
  return (
    <>
      {/* {
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
                  {" "}
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
                    <label className="small mb-1"> Student FName :</label>
                    <p> {item.fName}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">Student FatherName :</label>
                    <p> {item.fatherName}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">Student Lname :</label>
                    <p> {item.lName}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">email : </label>
                    <p> {item.email}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">gender :</label>
                    <p> {item.gender}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">dateOfBirth :</label>
                    <p> {item.dateOfBirth}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">studentContactNo :</label>
                    <p> {item.studentContactNo}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">fatherContactNo :</label>
                    <p> {item.fatherContactNo}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">address :</label>
                    <p> {item.address}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">bloodGroup :</label>
                    <p> {item.bloodGroup}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1">cast :</label>
                    <p> {item.cast}</p>
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
                  </div>{" "}
                  <div className="col-md-6">
                    <label className="small mb-1">class :</label>
                    <p> {item.class}</p>
                  </div>{" "}
                  <div className="col-md-6">
                    <label className="small mb-1">SPID :</label>
                    <p> {item.SPID}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))} */}
      xcvbnm
    </>
  );
};

export default WithLayout(Studentpro);
