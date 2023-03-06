import React, { useEffect, useState } from "react";
import "./stu.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WithLayout from "../../../components/common/comstudent/Stusidebar";
import axios from "axios";


const Studentpro = () => {
  const [student, setStudent] = useState([]);


  const getStudent = async () => {
    var data=JSON.parse(localStorage.getItem("info")).response.tokendata.userId;
    // console.log("id",data.response.tokendata.userId)
    let  res  = await axios.get(`http://localhost:5000/api/use/student/student/${data}`);

    console.log("res",res);  
    setStudent(res.data.data);
    // console.log("student:::::::::", res);

  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <>
    
      <div
      key ={student.id}
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
                  <p> {student.fName}</p>
                </div>
                <div className="col-md-6 ">
                  <label className="small mb-1"> Student Last Name :</label>
                  <p> {student.lName}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">Student gender :</label>
                  <p> {student.gender}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">Student dateOfBirth :</label>
                  <p> {student.dateOfBirth}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">contactNo : </label>
                  <p> {student.contactNo}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">Username : </label>
                  <p> {student.userName}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">email :</label>
                  <p> {student.email}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">Password : </label>
                  <p> {student.password}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">address :</label>
                  <p> {student.address}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">city :</label>
                  <p> {student.city}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">state :</label>
                  <p> {student.state}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">country :</label>
                  <p> {student.country}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">fatherName :</label>
                  <p> {student.fatherName}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">fatherOcupation :</label>
                  <p> {student.fatherOccupation}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">fatherContactNo :</label>
                  <p> {student.fatherContactNo}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">fatherEmail :</label>
                  <p> {student.fatherEmail}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">mother Name :</label>
                  <p> {student.motherName}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">mother Ocupation :</label>
                  <p> {student.motherOccupation}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">mother ContactNo :</label>
                  <p> {student.motherContactNo}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">mother Email :</label>
                  <p> {student.motherEmail}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">course :</label>
                  <p> {student.course}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">year :</label>
                  <p> {student.year}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">semester :</label>
                  <p> {student.sem}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">division :</label>
                  <p> {student.div}</p>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">spid :</label>
                  <p> {student.spid}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
    </>
  );
};

export default WithLayout(Studentpro);
