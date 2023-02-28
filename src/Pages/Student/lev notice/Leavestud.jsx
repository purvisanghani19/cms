import React from 'react';
import { Card,Button } from 'react-bootstrap';
import WithLayout from '../../../components/common/comstudent/Stusidebar';

const Leavestud = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <div className="container-fluid">
        <div className="row">
          <div class="col-auto text-right float-right ml-auto" style={{textAlign:"start"}}>
            <a href="/Leavestud/Stuleaveform">
              <button
                style={{
                  padding: "3px 25px",
                  borderRadius: "5px",
                  backgroundColor: "#005d91",
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
          <Card style={{ paddingRight: "0px", paddingLeft: "0px","textAlign":"start" }}>
            <Card.Header
              style={{ backgroundColor: "#005d91", color: "#fff" }}
            >
              Special title treatment
            </Card.Header>
            <Card.Body>
              <Card.Title>Date : 12/10/2022</Card.Title>
            
              <Card.Text>
                With supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
              <a href="/Leavestud/studentviewnotice">
                <Button
                  style={{
                    padding: "5px",
                    width: "80px",
                    borderRadius: "5px",
                    backgroundColor: "#005d91",
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
  )
}

export default WithLayout(Leavestud);
