import React, { useEffect, useState } from 'react';
import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './facleave.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const View = () => {

  const [facleaveview, setFacleaveview] = useState();

  const getfacleaveview = async () => {
    var data = JSON.parse(localStorage.getItem("user")).response.data.userId;
    // console.log("facleave", data);

    let facleaveview = await axios.get(
      ` http://localhost:5000/api/use/admin/staff-leave-notice/${data}`);

    console.log("facleave", facleaveview);
    setFacleaveview(facleaveview.data.leavenotice);
  };

  useEffect(() => {
    getfacleaveview();
  }, []);




  return (
    <>
        <div id="content-wrapper" className="d-flex flex-column" >
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div class="col-auto text-right float-left ml-auto" style={{textAlign:"start"}}>
                <Link to="/facleavenotice">
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
                </Link>
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
           
                {/* <Card.Body>
                  <Card.Title style={{ float: "right" , fontWeight :" bold"}}>
                    Date : {facleaveview.date}
                  </Card.Title>
                <div className='view-field'>
                    <h5>Name : {facleaveview.name} </h5>
                    <h5>Course : </h5>
                   <h5>Email :</h5>
                   <h5>subject :</h5>
                </div>

                  <Card.Text style={{ marginTop: "50px" }}>
                  <h5>Message :</h5>
                  {facleaveview.reason}
                  </Card.Text>
                  <a href="/facleavenotice/addleave">
                    <Button
                      style={{
                        padding: "5px",
                        width: "80px",
                        borderRadius: "5px",
                        backgroundColor: "#17a2b8",
                        border: "none",
                        color: "#fff",
                      }}
                    >
                      Edit
                    </Button>
                  </a>
                  <Button
                    style={{
                      padding: "5px",
                      width: "80px",
                      borderRadius: "5px",
                      backgroundColor: "#e35260",
                      border: "none",
                      color: "#fff",
                      marginLeft: "10px",
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body> */}
                
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WithLayout(View);