import React from "react";
import { useNavigate } from "react-router";
import "./attan.css";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Result = () => {
  
  return (
    <div>
      <div className="fee">
        <div className="card"   style={{ width: "18rem" }}>
          <a href="/stufee" className="card-body btn-attan">
            <h5 className="fee1-title">Date:11/10</h5>
            <p className="fee-text">CG</p>
          </a>
        </div>
        <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
          <a className="card-body btn-attan">
            <h5 className="fee1-title">Date:11/10</h5>
            <p className="fee-text">E-COMM</p>
          </a>
        </div>
        <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
          <a className="card-body btn-attan" >
            <h5 className="fee1-title">Date:11/10</h5>
            <p className="fee-text">SEMINAR</p>
          </a>
        </div>
        <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
          <a className="card-body btn-attan">
            <h5 className="fee1-title">Date:11/10</h5>
            <p className="fee-text">PROJECT</p>
          </a>
        </div>
      </div>
      
     

      {/* <div className="row row-cols-1 row-cols-md-2 g-4 mt-5" style={{marginLeft:"500px",width:"700px"}}>
        <div className="col">
          <div className="card">
            <div className="card-body">
            <div>
              
              <h5 className="card-title">Date:11/10</h5>
              <p className="card-text">
              SEMINAR
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WithLayout(Result);
