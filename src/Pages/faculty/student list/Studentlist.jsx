import React from 'react';
import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';




const Studentlist = () => {
    return (
        <>

            {/* <div className="container-xl px-4 mt-5 " style={{ marginLeft: "268px", textAlign: " start" }}>
             
                <div className="row">
                    <div className="col-xl-14">
                        <div className="card mb-3">
                            <div className="card-header stunotice" style={{ backgroundColor: "#263159", color: "#f8f9fa", textAlign: "center" }}>Student List </div>
                            <div className="card-body d-flex"  >

                               

                                <div className="col-md-3">
                                    <label className="small mb-1" >Semester :</label>
                                    <select class="form-select" aria-label="Default select example" >
                                        <option value="" disabled selected>Select your semester</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="1">4</option>
                                        <option value="2">5</option>
                                        <option value="3">6</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label className="small mb-1">Division :</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option value="" disabled selected>Select your Division</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>

                                <div className="searchbtn" style={{ margin: "18px", textAlign: "start" }}>
                                    <a href="" class="btn btn-danger" style={{ width: "138px" }} >
                                        Search
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}






            <div id="content" >
                <div className="container-fluid" style={{ width: "100%", marginLeft: "268px" }}>
                    <div className="studentlist" style={{ overflow: "hidden" }}>
                        <div className="col-xl-6">
                            <div className="card mb-3">
                                <div className="card-header stunotice" style={{ backgroundColor: "#263159", color: "#f8f9fa", textAlign: "center" }}>Student List </div>
                                <div className="card-body d-flex"  >
                                    <div className="col-md-4">
                                        <label className="small mb-1" >Semester :</label>
                                        <select class="form-select" aria-label="Default select example" >
                                            <option value="" disabled selected>Select your semester</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="1">4</option>
                                            <option value="2">5</option>
                                            <option value="3">6</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="small mb-1">Division :</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option value="" disabled selected>Select your Division</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <div className="searchbtn" style={{ margin: "18px", textAlign: "start" }}>
                                        <a href="" class="btn btn-danger" style={{ width: "138px" }} >
                                            Search
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xl px-6 mt-5" style={{ marginLeft: "268px", textAlign: " start" }}>
                <div className="row">
                    <div className="col-xl-15">
                        <div className="card mb-4">
                            <div className="card-header stunotice" style={{ backgroundColor: "#263159", color: "#f8f9fa", textAlign: "center" }}>All students </div>
                            <div className="card-body">
                                <div className="tbldetails">
                                    <div className="row table-responsive mt-4">
                                            <table className="table" style={{border:"1px solid black"}}>
                                                <thead>
                                                    <tr className='tbl'>
                                                        <th scope="col">Roll No</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Semester</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='tbldetails' style={{height:"2px"}}>
                                                        <td>11</td>
                                                        <td>purvi</td>
                                                        <td>2</td>
                                                        <td>purvi@123</td>
                                                        <td>
                                                        <button className='studentdetailview'>view</button>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height:"2px"}}>
                                                        <td>11</td>
                                                        <td>purvi</td>
                                                        <td>2</td>
                                                        <td>purvi@123</td>
                                                        <td>
                                                        <button className='studentdetailview'>view</button>
                                                        </td>
                                                    </tr>
                                                    <tr style={{height:"2px"}}>
                                                        <td>11</td>
                                                        <td>purvi</td>
                                                        <td>2</td>
                                                        <td>purvi@123</td>
                                                        <td>
                                                        <button className='studentdetailview'>view</button>
                                                        </td>
                                                    </tr>   <tr>
                                                        <td>11</td>
                                                        <td>purvi</td>
                                                        <td>2</td>
                                                        <td>purvi@123</td>
                                                        <td>
                                                        <button className='studentdetailview'>view</button>
                                                        </td>
                                                    </tr>
                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    {/* <table class="table table-bordered" aria-label="TABLE">
                                        <thead role="rowgroup">
                                            <tr role="row">
                                                <th role="columnheader" scope="col" tabindex="0">Select Day</th>
                                                <th role="columnheader" scope="col" tabindex="0">Article Name</th>
                                                <th role="columnheader" scope="col" tabindex="0">Author</th>
                                                <th role="columnheader" scope="col" tabindex="0">Words</th>
                                            </tr>
                                        </thead>
                                        <tbody role="rowgroup">
                                            <tr role="row">
                                                <td>Bootstrap 4 CDN and Starter Template</td>
                                                <td>Cristina</td>
                                                <td>913</td>
                                                <td>2.846</td>
                                            </tr>
                                            <tr role="row">
                                                <td>Bootstrap Grid 4 Tutorial and Examples</td>
                                                <td>Cristina</td>
                                                <td>1.434</td>
                                                <td>3.417</td>
                                            </tr>
                                            <tr role="row">
                                                <td>Bootstrap Flexbox Tutorial and Examples</td>
                                                <td>Cristina</td>
                                                <td>1.877</td>
                                                <td>1.234</td>
                                            </tr>
                                        </tbody>
                                    </table> */}
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default WithLayout(Studentlist);