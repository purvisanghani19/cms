import React, { useEffect, useState } from "react";
import "./stu.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WithLayout from "../../../components/common/comstudent/Stusidebar";
import axios from "axios";

const Studentpro = () => {
  const [student, setStudent] = useState([]);


  const getStudent = async () => {
    var id=JSON.parse(localStorage.getItem("student")).id;
    let  res  = await axios.get(
      `http://localhost:5000/api/use/student/student/${id}`
    );
    console.log("res",res);
    // setStudent(res);
    // console.log("student:::::::::", res);

  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <>
    {
      student.map((item)=>(
         
      <div
      key ={item.id}
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
               <img src="" alt="profile image" />
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
                  <label className="small mb-1"> Student First Name :</label>
                  <p> {item.fName}</p>
                </div>
                <div className="col-md-6 ">
                  <label className="small mb-1"> Student Last Name :</label>
                  <p> {item.lName}</p>
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
                  <label className="small mb-1">Username : </label>
                  <p> {item.userName}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">email :</label>
                  <p> {item.email}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">Password : </label>
                  <p> {item.password}</p>
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
                  <label className="small mb-1">fatherName :</label>
                  <p> {item.fatherName}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">fatherOcupation :</label>
                  <p> {item.fatherOccupation}</p>
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
                  <p> {item.motherOccupation}</p>
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
                  <label className="small mb-1">course :</label>
                  <p> {item.course}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">year :</label>
                  <p> {item.year}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">semester :</label>
                  <p> {item.sem}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">division :</label>
                  <p> {item.div}</p>
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
      ))
    }
    </>
  );
};

export default WithLayout(Studentpro);
