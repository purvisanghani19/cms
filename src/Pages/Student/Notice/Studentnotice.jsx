import React, { useEffect, useState } from "react";
import WithLayout from "../../../components/common/comstudent/Stusidebar";
// import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

// const Viewnotice = (props) => {
//   return (
//     <>
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//            date
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>title</h4>
//           <p>message</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

const Notifications = () => {
  const [adminnotice, setAdminnotice] = useState([]);
  // const [modalShow, setModalShow] = useState(false);

  const getnotice = async () => {
    // var data=JSON.parse(localStorage.getItem("info"));
    // console.log("id",data.response.tokendata.userId)
    let notice = await axios.get(`http://localhost:5000/api/use/admin/notice`);

    console.log("notice", notice);
    setAdminnotice(notice);
    // console.log("student:::::::::", res);
  };
  useEffect(() => {
    getnotice();
  }, []);

  return (
    <>

    {
      adminnotice.map((item)=>{


      <div class="container mainnotice ">
        <h3
          class="mt-5 heading-line notice-heading"
          style={{ textAlign: "start" }}
        >
          Notice <i class="fa fa-bell text-muted"></i>
        </h3>

        <div class="card card-notice">
          <div class="card-header">{item.date}</div>
          <div class="card-body">
            <h5 class="card-title">
              <b> {item.Title}</b>
                <b> {item.message}</b>
                <b> {item.send}</b>
            </h5>
            <a
              // onClick={() => setModalShow(true)}
              class="btn btn-notice "
              style={{
                backgroundColor: "#17a2b8",
                marginLeft: "504px",
                marginTop: "0px",
              }}
            >
              view Notice
            </a>
          </div>
        </div>
      </div>
      })
    }

      {/* <Viewnotice show={modalShow} onHide={() => setModalShow(false)} /> */}
    </>
  );
};

export default WithLayout(Notifications);
