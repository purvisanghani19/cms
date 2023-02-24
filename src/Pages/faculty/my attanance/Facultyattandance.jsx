import React from 'react'
import { BiRupee } from 'react-icons/bi';
import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';





const Facultyattandance = () => {
  return (
    <>
         <div className="fee">
        <div className="card" style={{ width: "18rem" ,marginLeft:"20px"}}>
          <div className="card-body">
            <h5 className="fee1-title">Total Amount</h5>
            <p className="fee-text"><BiRupee/>
             30000
            </p>
            {/* <a href="#" className="btn btn-primary fee-btn" onClick={handlerecipt}>
             View
            </a> */}
          </div>
        </div>
        <div className="card" style={{ width: "18rem",marginLeft:"20px" }}>
          <div className="card-body">
            <h5 className="fee1-title">Paid Amount</h5>
            <p className="fee-text1"><BiRupee/>
             30000
            </p>
            {/* <a href="#" className="btn btn-primary fee-btn" onClick={handleclick}>
             View
            </a> */}
          </div>
        </div>
        <div className="card" style={{ width: "18rem",marginLeft:"20px" }}>
          <div className="card-body">
            <h5 className="fee-title">Remaining Amount</h5>
            <p className="fee-text2"><BiRupee/>
             30000
            </p>
            <a href="#" className="btn btn-primary fee-btn" >
             View
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default WithLayout(Facultyattandance);