import React from "react";
import "./attan.css";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Stuattandance = () => {
  return (
    <>
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
            class="btn btn-danger"
            style={{ width: "138px", marginTop: "21px" }}
          >
            Search
          </a>
        </div>
      </div>

      <div class="card shadow" style={{ width: "18rem", marginLeft: "320px" }}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">PHP</li>
          <div className="attan d-flex">
            <li class="list-group-item">Date:10-12-2022</li>
            <li
              class="list-group-item"
              style={{ backgroundColor: "green", width: "126px" }}
            >
              present
            </li>
          </div>
        </ul>
      </div>

      <div class="card shadow" style={{ width: "18rem", marginLeft: "320px" }}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">PHP</li>
          <div className="attan d-flex">
            <li class="list-group-item">Date:10-12-2022</li>
            <li
              class="list-group-item"
              style={{ backgroundColor: "red", width: "126px" }}
            >
              Absent
            </li>
          </div>
        </ul>
      </div>

      <div class="card shadow" style={{ width: "18rem", marginLeft: "320px" }}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">PHP</li>
          <div className="attan d-flex">
            <li class="list-group-item">Date:10-12-2022</li>
            <li
              class="list-group-item"
              style={{ backgroundColor: "green", width: "126px" }}
            >
              present
            </li>
          </div>
        </ul>
      </div>

      <div class="card shadow" style={{ width: "18rem", marginLeft: "320px" }}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">PHP</li>
          <div className="attan d-flex">
            <li class="list-group-item">Date:10-12-2022</li>
            <li
              class="list-group-item"
              style={{ backgroundColor: "red", width: "126px" }}
            >
              Absent
            </li>
          </div>
        </ul>
      </div>

      <div class="card shadow" style={{ width: "18rem", marginLeft: "320px" }}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">PHP</li>
          <div className="attan d-flex">
            <li class="list-group-item">Date:10-12-2022</li>
            <li
              class="list-group-item"
              style={{ backgroundColor: "green", width: "126px" }}
            >
              present
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default WithLayout(Stuattandance);
