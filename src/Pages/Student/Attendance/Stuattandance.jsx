import React from "react";
import "./attan.css";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Result = () => {
  return (
    <>
      <div className="card-body d-flex" style={{ marginLeft: "300px", marginTop: "20px" }}>
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





      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>

    </>
  );
};

export default WithLayout(Result);
