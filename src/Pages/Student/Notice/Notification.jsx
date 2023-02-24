import React from "react";
import "./noti.css";
import WithLayout from "../../../components/common/comstudent/Stusidebar";
import { Link, useNavigate } from "react-router-dom";



const Notifications = () => {
   

    
    const navigate = useNavigate();
    const view=()=>{
        navigate("/viewnotice");
    }
  return (
    <>
      <div class="container mainnotice ">
        <h3 class="mt-5 heading-line" style={{ textAlign: "start" }}>
          Notice <i class="fa fa-bell text-muted"></i>
        </h3>

        <div class="card card-notice">
          <div class="card-header">Date</div>
          <div class="card-body">
            <h5 class="card-title">
              <b>Notice title</b>
            </h5>
            <p class="card-text" style={{ textAlign: "start" }}>
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy 
            </p>
            <a href="" onClick={view} class="btn btn-info btn-notice">
              view more
            </a>
            <a href="" class="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
        <div class="card card-notice">
          <div class="card-header">Date</div>
          <div class="card-body">
            <h5 class="card-title">
              <b>Notice title</b>
            </h5>
            <p class="card-text" style={{ textAlign: "start" }}>
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy 
            </p>
            <a href="#" class="btn btn-info btn-notice">
              view more
            </a>
            <a href="#"  class="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
        <div class="card card-notice">
          <div class="card-header">Date</div>
          <div class="card-body">
            <h5 class="card-title">
              <b>Notice title</b>
            </h5>
            <p class="card-text" style={{ textAlign: "start" }}>
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy 
            </p>
            <a href="#" class="btn btn-info btn-notice">
              view more
            </a>
            <a href="#" class="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
        <div class="card card-notice">
          <div class="card-header">Date</div>
          <div class="card-body">
            <h5 class="card-title">
              <b>Notice title</b>
            </h5>
            <p class="card-text" style={{ textAlign: "start" }}>
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy 
            </p>
            <a href="#" class="btn btn-info btn-notice">
              view more
            </a>
            <a href="#" class="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
    
};

export default WithLayout(Notifications);
