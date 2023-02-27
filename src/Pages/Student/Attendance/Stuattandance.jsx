import React from "react";
import './attan.css';
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Result = () => {
  return (
    <>
    <div className="stuatt mt-5 ">
        <div className="card stuatt-card"   style={{ width: "18rem" }}>
          <a href="/stufee" className="card-body btn-attan">
          <div className="stuattdetail">
            <h5 className="stuatt-title">Date:11/10</h5>
            <p className="stuatt-text">CG</p>
            </div>
          </a>
        </div>
        <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
          <a className="card-body ">
          <div className="stuattdetail">
            <h5 className="stuatt-title">Date:11/10</h5>
            <p className="stuatt-text">E-COMM</p>
            </div>
          </a>
        </div>
        <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
          <a className="card-body" >
          <div className="stuattdetail">
            <h5 className="stuatt-title">Date:11/10</h5>
            <p className="stuatt-text">SEMINAR</p>
            </div>
          </a>
        </div>
        <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
          <a className="card-body ">
          <div className="stuattdetail">
            <h5 className="stuatt-title">Date:11/10</h5>
            <p className="stuatt-text">PROJECT</p>
            </div>
          </a>
        </div>
      </div>
   
    </>
  )
};

export default WithLayout(Result);