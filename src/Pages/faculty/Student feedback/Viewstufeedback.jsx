import React from 'react';
import { Button, Card } from 'react-bootstrap';
import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';




const Viewstufeedback = () => {
  return (
  <>
    <div id="content-wrapper" className="d-flex flex-column" >
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div class="col-auto text-right float-left ml-auto" style={{textAlign:"start"}}>
                <a href="/stufacfeedback">
                  <button
                    style={{
                      padding: "3px 25px",
                      borderRadius: "5px",
                      backgroundColor: "#17a2b8",
                      border: "none",
                      color: "#fff",
                      marginBottom: "20px",
                      marginRight: "0px",
                    }}
                  >
                    Back
                  </button>
                </a>
              </div>
              <Card
                style={{
                  paddingRight: "0px",
                  paddingLeft: "0px",
                  textAlign:"start"
                }}
              >
                <Card.Header
                  style={{
                    backgroundColor: "#263159",
                    color: "#fff",
                    paddingLeft: "450px",
                  }}
                >
                  Special title treatment
                </Card.Header>
                <Card.Body>
                  <Card.Title style={{ float: "right" , fontWeight :" bold"}}>
                    Date : 12/10/2022
                  </Card.Title>
            

                  <Card.Text style={{ marginTop: "50px" }}>
                  <h5>Message :</h5>
                    With supporting text below as a natural lead-in to
                    additional content. With supporting text below as a natural
                    lead-in to additional content. With supporting text below as
                    With supporting text below as a natural lead-in to
                    additional content. With supporting text below as a natural
                    lead-in to additional content. With supporting text below as
                    With supporting text below as a natural lead-in to
                    additional content. With supporting text below as a natural
                    lead-in to additional content. With supporting text below as
                    With supporting text below as a natural lead-in to
                    additional content. With supporting text below as a natural
                    lead-in to additional content. With supporting text below as
                    With supporting text below as a natural lead-in to
                    additional content. With supporting text below as a natural
                    lead-in to additional content. With supporting text below as
                    With supporting text below as a natural lead-in to
                    additional content. With supporting text below as a natural
                  </Card.Text>
                 
                 
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default WithLayout(Viewstufeedback);