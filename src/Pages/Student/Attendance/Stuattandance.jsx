import React from "react";
import "./attan.css";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Result = () => {
  return (
    <>
    <div style={{backgroundColor:"#ECF2FF"}}>
      <div
        className="card-body d-flex"
        style={{ marginLeft: "300px", marginTop: "20px" }}
      >
        <div className="col-md-4">
          <label for="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Enter  date"
            required
          />
        </div>
        <div
          className="searchbtn"
          style={{ margin: "18px", textAlign: "start" }}
        >
          <a
            href=""
            className="btn btn-danger"
            style={{ width: "138px", marginTop: "21px" }}
          >
            Search
          </a>
        </div>
      </div>








      <div
        className="card-attan shadow"
        style={{ width: "18rem", marginLeft: "320px" }}
      >
        <ul className="list-group list-group-flush">
          <li className="list-group-item">PHP</li>
          <div className="attan d-flex">
            <li className="list-group-item">Date:11/12/2009</li>
            <li
              className="list-group-item"
              style={{ backgroundColor: "red", width: "300px" }}
            >
              Absent
            </li>
          </div>
        </ul>
      </div>
      <br></br>

      <div
        className="card-attan shadow"
        style={{ width: "18rem", marginLeft: "320px" }}
      >
        <ul className="list-group list-group-flush">
          <li className="list-group-item">.NET</li>
          <div className="attan d-flex">
            <li className="list-group-item">Date:11/12/2009</li>
            <li
              className="list-group-item"
              style={{ backgroundColor: "green", width: "300px" }}
            >
              present
            </li>
          </div>
        </ul>
      </div>
      <br></br>

      <div
        className="card-attan shadow"
        style={{ width: "18rem", marginLeft: "320px" }}
      >
        <ul className="list-group list-group-flush">
          <li className="list-group-item">JAVA</li>
          <div className="attan d-flex">
            <li className="list-group-item">Date:11/12/2009</li>
            <li
              className="list-group-item"
              style={{ backgroundColor: "green", width: "300px" }}
            >
              present
            </li>
          </div>
        </ul>
      </div>

      <br></br>

      <div
        className="card-attan shadow"
        style={{ width: "18rem", marginLeft: "320px" }}
      >
        <ul className="list-group list-group-flush">
          <li className="list-group-item">CG</li>
          <div className="attan d-flex">
            <li className="list-group-item">Date:11/12/2009</li>
            <li
              className="list-group-item"
              style={{ backgroundColor: "red", width: "300px" }}
            >
              Absent
            </li>
          </div>
        </ul>
      </div>
      </div>
    </>
  );
};

export default WithLayout(Result);
