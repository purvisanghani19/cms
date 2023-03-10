import React, { useEffect, useState } from "react";
import "./faculty.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WithLayout from "../../../components/common/comfaculty/Sidebar/SideBar";
import axios from "axios";

const Faculty = () => {
  const [faculty, setfaculty] = useState([]);

  const getFaculty = async () => {
    var data = JSON.parse(localStorage.getItem("user")).response.data.userId;
    // console.log(data);
    let res = await axios.get(
      `http://localhost:5000/api/use/staff/staff/${data}`
    );

    // console.log("res", res);
    setfaculty(res.data.staff);
  };

  useEffect(() => {
    getFaculty();
  }, []);

  return (
    <>
      <div
        className="container-xl px-4 mt-4"
        style={{ marginLeft: "268px", textAlign: "start" }}
      >
        <div className="row">
          <div className="col-xl-4" style={{ marginTop: "90px" }}>
            <div className="card mb-4 mb-xl-0">
              <div
                className="card-header"
                style={{ backgroundColor: " #263159", color: "white" }}
              >
                Profile Picture
                {faculty.ProfileImage}
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
          <div className="col-xl-8" style={{ textAlign: "start" }}>
            <div className="card mb-4">
              <div
                className="card-header "
                style={{ backgroundColor: " #263159", color: "white" }}
              >
                Faculty Details
              </div>
              <div className="card-body">
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Faculty FName :</label>
                  <p> {faculty.fName}</p>
                </div>

                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Faculty Lname :</label>
                  <p> {faculty.lName}</p>
                </div>

                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Gender :</label>
                  <p>{faculty.gender}</p>
                </div>

                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Date Of Birth : </label>
                  <p> {faculty.dateOfBirth}</p>
                </div>

                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Contact No :</label>
                  <p> {faculty.contactNo}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Date Of Joining :</label>
                  <p> {faculty.dateOfJoining}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Qualification :</label>
                  <p> {faculty.qualification}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Experiance :</label>
                  <p> {faculty.experiance}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Course :</label>
                  <p> {faculty.course}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Semester :</label>
                  <p> {faculty.sem}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Division :</label>
                  <p> {faculty.div}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Subject :</label>
                  <p> {faculty.Subject}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Username :</label>
                  <p> {faculty.userName}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Email :</label>
                  <p> {faculty.email}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Password :</label>
                  <p> {faculty.password}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Address :</label>
                  <p> {faculty.address}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">City :</label>
                  <p> {faculty.city}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">State :</label>
                  <p> {faculty.state}</p>
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Country :</label>
                  <p> {faculty.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithLayout(Faculty);
