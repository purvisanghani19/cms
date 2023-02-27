import React from "react";
import './attan.css';
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Result = () => {
  return (
    <>
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
   
    </>
  )
};

export default WithLayout(Result);