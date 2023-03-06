import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const Leavestud = () => {
  const [stuleave, setStuleave] = useState([]);

  const leavestu = async () => {
    // var data=JSON.parse(localStorage.getItem("info")).response;
    // console.log("id",data.response.tokendata.userId)
    let studentleave = await axios.get(
      `http://localhost:5000/api/use/staff/student-leave-notice`
    );

    console.log("stuleave", studentleave);
    // setStuleave(studentleave);
  };

  useEffect(() => {
    leavestu();
  }, []);

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="row">
            <div
              class="col-auto text-right float-right ml-auto"
              style={{ textAlign: "start" }}
            >
              <a href="/Leavestud/Stuleaveform">
                <button
                  style={{
                    padding: "3px 25px",
                    borderRadius: "5px",
                    backgroundColor: "rgb(23, 162, 184)",
                    border: "none",
                    color: "#fff",
                    marginBottom: "20px",
                    marginRight: "0px",
                  }}
                >
                  Add Leave
                </button>
              </a>
            </div>
            <Card
              style={{
                paddingRight: "0px",
                paddingLeft: "0px",
                textAlign: "start",
              }}
            >
              <Card.Header
                style={{ backgroundColor: "#263159", color: "#fff" }}
              >
                Notice title
              </Card.Header>
              <Card.Body>
                <Card.Title>Date : 12/10/2022</Card.Title>

                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <a href="/Leavestud/studentviewnotice">
                  <Button
                    style={{
                      padding: "5px",
                      width: "80px",
                      borderRadius: "5px",
                      backgroundColor: "#263159",
                      border: "none",
                      color: "#fff",
                    }}
                  >
                    View
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WithLayout(Leavestud);
