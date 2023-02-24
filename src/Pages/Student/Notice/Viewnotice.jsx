import React from "react";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Viewnotice = () => {
  return (
    <>
       <div class="container mt-5 stuviewnotice">
        <div class="card">
          <div class="card-header">Date</div>
          <div class="card-body">
            <h5 style={{ textAlign: "center" }}>
              <b>Notice title</b>
            </h5>
            <p class="card-text" style={{ textAlign: "start" }}>
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy 
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy 
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy 
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy 
            </p>
            <a href="" class="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithLayout(Viewnotice);
