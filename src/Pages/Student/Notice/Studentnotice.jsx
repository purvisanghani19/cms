import React from "react";
import WithLayout from "../../../components/common/comstudent/Stusidebar";
// import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Viewnotice = (props) => {
  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Date
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Subjct</h4>
        <p>
         Notice contant
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};




const Notifications = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <div class="container mainnotice ">
      <h3 class="mt-5 heading-line notice-heading" style={{ textAlign: "start" }}>
        Notice <i class="fa fa-bell text-muted"></i>
      </h3>

      <div class="card card-notice">
        <div class="card-header">Date</div>
        <div class="card-body">
          <h5 class="card-title">
            <b>Notice title</b>
          </h5>
          <a onClick={() => setModalShow(true)} class="btn btn-notice " style={{backgroundColor:"#17a2b8",marginLeft:"504px",marginTop:"0px"}}>
            view Notice
          </a>
        </div>
      </div>
    </div>
  <Viewnotice
    show={modalShow}
    onHide={() => setModalShow(false)}
  />
</>
  );
};

export default WithLayout(Notifications);
