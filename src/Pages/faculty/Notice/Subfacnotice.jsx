import React, { useState } from 'react';
import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';
import '../Leave notice/facultynotice.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Subfacnotice = (props) => {





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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>

    </>
  )
}
const Facnotice = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div class="container mainnotice ">
        <h3 class="mt-5 heading-line" style={{ textAlign: "start" }}>
          Notice <i class="fa fa-bell text-muted"></i>
        </h3>

        <div class="card card-notice">
          <div class="card-header">Date</div>
          <div class="card-body">
            <h5 class="card-title">
              <b>Notice title</b>
            </h5>
         
            <a onClick={() => setModalShow(true)} class="btn btn-notice">
              view more
            </a>
       
          </div>
        </div>
        
       
  
      </div>
      <Subfacnotice
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default WithLayout(Facnotice);