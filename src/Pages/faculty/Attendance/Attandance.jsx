import React, { useState } from "react";
import WithLayout from "../../../components/common/comfaculty/Sidebar/SideBar";
import './facatt.css';



const Attandance = () => {
  const [btnColor, setBtnColor] = useState("green");
  return (
    <>
      <div
        className="container-xl px-4 mt-5 "
        style={{ marginLeft: "268px", textAlign: " start" }}
      >
        <div className="row">
          <div className="col-xl-14">
            <div className="card mb-3">
              <div
                className="card-header stunotice"
                style={{
                  backgroundColor: "#263159",
                  color: "#f8f9fa",
                  textAlign: "center",
                }}
              >
                Student attandance{" "}
              </div>
              <div className="card-body d-flex">
                <div className="col-md-3">
                  <label className="small mb-1">course :</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="" disabled selected>
                      Select your course
                    </option>
                    <option value="1">BBA</option>
                    <option value="2">BCA</option>
                    <option value="3">BCOM</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <label className="small mb-1">Semester :</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="" disabled selected>
                      Select your semester
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="1">4</option>
                    <option value="2">5</option>
                    <option value="3">6</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="small mb-1">Division :</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="" disabled selected>
                      Select your Division
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div
                  className="searchbtn"
                  style={{ margin: "18px", textAlign: "start" }}
                >
                  <a href="" class="btn btn-danger" style={{ width: "138px" }}>
                    Search
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="attandancebox" >
        <div className="card" style={{ width: "10rem" }}>
        <button
            className="card-body info"
            onClick={() => {
              btnColor === "red" ? setBtnColor("green") : setBtnColor("red");
            }}
            style={{
              backgroundColor: btnColor,
              color: "white",
              borderRadius: "7px",
            }}
          >
            <h5 className="attno">no</h5>
            <p className="card-text">101</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default WithLayout(Attandance);
