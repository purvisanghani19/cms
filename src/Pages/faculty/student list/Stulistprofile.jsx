import React from 'react';
import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';
import "./stulistprofile.css";






const Stulistprofile = () => {
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
              >Profile Picture
                {/* {item.ProfileImage} */}
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
                student Details
              </div>
              <div className="card-body">
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">student FName :</label>
                  {/* <p> {item.fName}</p> */}
                </div>

                <div className="col-md-6 d-flex">
                  <label className="small mb-1">student Lname :</label>
                  {/* <p> {item.lName}</p> */}
                </div>

                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Gender :</label>
                  {/* <p>{item.gender}</p> */}
                </div>

                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Date Of Birth : </label>
                  {/* <p> {item.dateOfBirth}</p> */}
                </div>

                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Contact No :</label>
                  {/* <p> {item.contactNo}</p> */}
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Date Of Joining :</label>
                  {/* <p> {item.dateOfJoining}</p> */}
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Qualification :</label>
                  {/* <p> {item.qualification}</p> */}
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Experiance :</label>
                  {/* <p> {item.experiance}</p> */}
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Course :</label>
                  {/* <p> {item.course}</p> */}
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Username :</label>
                  {/* <p> {item.userName}</p> */}
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Email :</label>
                  {/* <p> {item.email}</p> */}
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Password :</label>
                  {/* <p> {item.password}</p> */}
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Repeat Password :</label>
                  {/* <p> {item.rePassword}</p> */}
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Address :</label>
                  {/* <p> {item.address}</p> */}
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">City :</label>
                  {/* <p> {item.city}</p> */}
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">State :</label>
                  {/* <p> {item.state}</p> */}
                </div>
                <div className="col-md-6 d-flex">
                  <label className="small mb-1">Country :</label>
                  {/* <p> {item.country}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        </>
    )
}

export default WithLayout(Stulistprofile);