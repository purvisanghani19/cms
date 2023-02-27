import React, { useState } from 'react';
import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';
import '../Leave notice/facultynotice.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './stuleaveview.css';
import { useEffect } from 'react';




const Stuleavnotiview = (props) => {
  const [leaveview, setLeaveview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/use/student/studentLeaveNotice/get").then(
      (result) => {
        result.json().then((resp) => {
          // console.warn("result", resp);
          setLeaveview(resp);
        });
      }
    );
  }, []);
  // console.log("result");





  return (
    <>

    {
      leaveview.map((item)=>(
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Date : {item.date}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row className='leave-popup'>
              <Col xs={12} md={8}>
                Name :
                <b> {item.Name}</b>
              </Col>

            </Row>

            <Row className='leave-popup'>
              <Col xs={3} md={6}>
                Course :
                <b> {item.course}</b>
              </Col>
              <Col xs={3} md={6}>
                Semester :
                <b> {item.semester}</b> 
              </Col>
            </Row>


            <Row className='leave-popup'>
              <Col xs={3} md={6}>
                Division :
                <b> {item.division}</b> 
              </Col>
              <Col xs={3} md={6}>
                Roll No :
              <b> {item.rollNo}</b>
              </Col>
            </Row>



            <Row className='leave-popup'>
              <Col xs={12} md={8}>
                Email :
              <b> {item.email}@23</b>
              </Col>
            </Row>


            <Row className='leave-popup'>
              <Col xs={12} md={8}>
                Subject :
                <p><b>{item.subject}</b></p>  
              </Col>
            </Row>


            <Row className='leave-popup'>
              <Col xs={12} md={8} className="leave-mess">
                Message :
              <p><b>{item.message}</b></p>  
              </Col>
            </Row>


          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      ))
    }
    </>
  )
}



const Studentleavnotice = () => {
  const [modalShow, setModalShow] = useState(false);


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
            <p class="card-text" style={{ textAlign: "start" }}>
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy
            </p>
            <a onClick={() => setModalShow(true)} class="btn btn-notice">
              view more
            </a>

            <a href="" class="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
        <div class="card card-notice">
          <div class="card-header">Date</div>
          <div class="card-body">
            <h5 class="card-title">
              <b>Notice title</b>
            </h5>
            <p class="card-text" style={{ textAlign: "start" }}>
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy
            </p>
            <a href="#" class="btn btn-info btn-notice">
              view more
            </a>
            <a href="#" class="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
        <div class="card card-notice">
          <div class="card-header">Date</div>
          <div class="card-body">
            <h5 class="card-title">
              <b>Notice title</b>
            </h5>
            <p class="card-text" style={{ textAlign: "start" }}>
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy
            </p>
            <a href="#" class="btn btn-info btn-notice">
              view more
            </a>
            <a href="#" class="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
        <div class="card card-notice">
          <div class="card-header">Date</div>
          <div class="card-body">
            <h5 class="card-title">
              <b>Notice title</b>
            </h5>
            <p class="card-text" style={{ textAlign: "start" }}>
              notice description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy
            </p>
            <a href="#" class="btn btn-info btn-notice">
              view more
            </a>
            <a href="#" class="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
      </div>

      <Stuleavnotiview show={modalShow} onHide={() => setModalShow(false)} />

    </>
  );
};

export default WithLayout(Studentleavnotice);