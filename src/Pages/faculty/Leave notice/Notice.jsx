import React from 'react';
import { HiPlusSm } from 'react-icons/hi';
import { useNavigate } from 'react-router';
import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';
import './facultynotice.css';

const Notice = () => {
  const navigate = useNavigate();
  const view = () => {
    navigate("/facleaveform");
  }
  return (
    <>  
      <div class="container mainnotice ">
        <div className='notice-icon'>
          <h3 class="mt-5 heading-line" style={{ textAlign: "start" }}>
            Notice <i class="fa fa-bell text-muted"></i>
          </h3>
          <a href="" class=" mt-5 btn btn-info add-notice-icon">
              Add notice
            </a>
        </div>

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
    </>
  )
}

export default WithLayout(Notice);