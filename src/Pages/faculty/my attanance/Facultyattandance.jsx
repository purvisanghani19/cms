import React from 'react'
import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';
import './facultyatt.css';







const Facultyattandance = () => {
  return (
    <>
         <div className="my-attandance mt-5">
        <div className="card" style={{ width: "18rem" ,marginLeft:"20px"}}>
          <div className="card-body">
            <h5 className="att1-title">Date</h5>
            <input
            className='att-text1'
            type="date"
            id="date"
            name="date"
            placeholder="Enter date"
            // value={date}
            // onChange={(e) => setDate(e.target.value)}
            required
          />
            <a href="#" className="btn btn-primary facultyatt-btn" >
             View
            </a>
            {/* <a href="#" className="btn btn-primary fee-btn" onClick={handlerecipt}>
             View
            </a> */}
          </div>
        </div>
        <div className="card" style={{ width: "18rem",marginLeft:"20px" }}>
          <div className="card-body">
            <h5 className="att1-title">Subject</h5>
            <select 
          // value={course}
          //  onChange={(e) => setCourse(e.target.value)} 
            id="course" name="course" classNameName="course att-text1">
            <option value="select" >Select</option>
            <option value="bcom" >
              BCOM
            </option>
            <option value="bba">
              BBA
            </option>
            <option value="mba" >
              BCA
            </option>
          </select>
            <a href="#" className="btn btn-primary facultyatt-btn" >
             View
            </a>
            {/* <a href="#" className="btn btn-primary fee-btn" onClick={handleclick}>
             View
            </a> */}
          </div>
        </div>
        <div className="card" style={{ width: "18rem",marginLeft:"20px" }}>
          <div className="card-body">
            <h5 className="att1-title">Subject</h5>
            <p className="att-text1">
             sdds
            </p>
            <a href="#" className="btn btn-primary facultyatt-btn" >
             View
            </a>
            {/* <a href="#" className="btn btn-primary fee-btn" onClick={handleclick}>
             View
            </a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default WithLayout(Facultyattandance);