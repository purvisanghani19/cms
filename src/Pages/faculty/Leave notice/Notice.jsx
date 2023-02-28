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
    <div className='faclevnotice-icon'>
          <h4 class=" mt-5 heading-line facnotice-icon " style={{ textAlign: "start"  }}>
           Leave Notice <i class="fa fa-bell text-muted"></i>
          </h4>
          <a onClick={addnotice} class=" mt-5 btn btn-info add-notice-icon">
              Add leave notice
            </a>
        </div>

        <div class="card card-notice">
          <div class="card-header">Date</div>
          <div class="card-body">
            <h5 class="card-title">
              <b>Notice title</b>
            </h5>
            <a href="" onClick={view} class="btn btn-info btn-facnotice">
              Edit Leave notice
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default WithLayout(Notice);


          