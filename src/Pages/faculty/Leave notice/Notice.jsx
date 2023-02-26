import React from 'react';
import { useNavigate } from 'react-router-dom';
import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';
import './facultynotice.css';

const Notice = () => {
  const navigate = useNavigate();

const addnotice=()=>{
  navigate("/facleaveform");
}

  const view = () => {
    console.log("hieeeeeeee")
    navigate("/facleaveform");
  }
  return (
    <>  
      <div class="container mainnotice ">
        <div className='notice-icon'>
          <h4 class=" mt-5 heading-line facnotice-icon " style={{ textAlign: "start"  }}>
            Notice <i class="fa fa-bell text-muted"></i>
          </h4>
          <a onClick={addnotice} class=" mt-5 btn btn-info add-notice-icon">
              Add notice
            </a>
        </div>


        <div className='row-notice'>
        <div class="card card-notice">
          <div class="card-header">Date</div>
          <div class="card-body">
            <h5 class="card-title">
              <b>Notice title</b>
              <b>Notice</b>
            </h5>
            <p class="card-text" style={{ textAlign: "start" }}>
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy
            </p>
            <a href="" onClick={view} class="btn btn-info btn-notice">
              Edit
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
            <a href="#" class="btn btn-info">
              Edit
            </a>
            <a href="#" class="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default WithLayout(Notice);