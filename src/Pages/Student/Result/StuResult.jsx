import React from "react";
import "./result.css";
import WithLayout from "../../../components/common/comstudent/Stusidebar";

const StuResult = () => {
  return (
    <>
      {/* <div class="student-container">
        <h2>Exam Result</h2>
        
        <table>
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Name</th>
              <th>.NET</th>
              <th>PHP</th>
              <th>JAVA</th>
              <th>WEB DESIGN-2 </th>
              <th>PRACTICAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Ali</td>
              <td>86</td>
              <td>77</td>
              <td>87</td>
              <td>92</td>
              <td>95</td>
            </tr>
            <tr>
              <td>02</td>
              <td>Salman</td>
              <td>86</td>
              <td>77</td>
              <td>87</td>
              <td>92</td>
              <td>95</td>
            </tr>
            <tr>
              <td>03</td>
              <td>Shan</td>
              <td>86</td>
              <td>77</td>
              <td>87</td>
              <td>92</td>
              <td>95</td>
            </tr>
            <tr>
              <td>04</td>
              <td>Aliyan</td>
              <td>86</td>
              <td>77</td>
              <td>87</td>
              <td>92</td>
              <td>95</td>
            </tr>
            <tr>
              <td>05</td>
              <td>Zeeshan</td>
              <td>86</td>
              <td>77</td>
              <td>87</td>
              <td>92</td>
              <td>95</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colspan="3">Maximum Marks: </td>
              <td colspan="3">Marks Obtained: </td>
              <td colspan="2">Grade: </td>
            </tr>
          </tfoot>
        </table>
      </div> */}
      <div
        className="container-xl px-6 mt-5"
        style={{ marginLeft: "268px", textAlign: " start" }}
      >
        <div className="row">
          <div className="col-xl-15">
            <div className="card mb-4">
              <div
                className="card-header stunotice"
                style={{
                  backgroundColor: "#263159",
                  color: "#f8f9fa",
                  textAlign: "center",
                }}
              >
                Student result{" "}
              </div>
              <div className="card-body">
                <div>
                  <div className="container mt-3">
                    <div className="row table-responsive mt-4">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Roll No.</th>
                            <th>Name</th>
                            <th>.NET</th>
                            <th>PHP</th>
                            <th>JAVA</th>
                            <th>WEB DESIGN-2 </th>
                            <th>PRACTICAL</th>
                          </tr>
                        </thead>

                        {/* {data.map((info) => (
                                <tr key={info._id} className='tbltr'>
                                    <td>{info.branchparcelstatus == "Delivered" ? <span style={{ color: 'green', fontWeight: 'bold' }}>{info.referancenumber}</span> : info.referancenumber}</td>
                                    <td>
                                        <button className='staffupdatebtn' onClick={(e) => editstus(e, info._id, info.branchparcelstatus)} >{info.branchparcelstatus == "Received" ? "Delivered" : "UnDelivered"}</button>
                                    </td>
                                    <td>{info.receivername}</td>
                                    <td>{info.receiveraddress}</td>
                                    <td>{info.receivercontactnumber}</td>
                                    <td>{info.receivedate}</td>

                                </tr>
                            ))} */}

                        <tbody>
                          <tr>
                            <td>01</td>
                            <td>Ali</td>
                            <td>86</td>
                            <td>77</td>
                            <td>87</td>
                            <td>92</td>
                            <td>95</td>
                          </tr>
                          <tr>
                            <td>02</td>
                            <td>Salman</td>
                            <td>86</td>
                            <td>77</td>
                            <td>87</td>
                            <td>92</td>
                            <td>95</td>
                          </tr>
                          <tr>
                            <td>03</td>
                            <td>Shan</td>
                            <td>86</td>
                            <td>77</td>
                            <td>87</td>
                            <td>92</td>
                            <td>95</td>
                          </tr>
                          <tr>
                            <td>04</td>
                            <td>Aliyan</td>
                            <td>86</td>
                            <td>77</td>
                            <td>87</td>
                            <td>92</td>
                            <td>95</td>
                          </tr>
                          <tr>
                            <td>05</td>
                            <td>Zeeshan</td>
                            <td>86</td>
                            <td>77</td>
                            <td>87</td>
                            <td>92</td>
                            <td>95</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colspan="3">Maximum Marks: </td>
                            <td colspan="3">Marks Obtained: </td>
                            <td colspan="2">Grade: </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithLayout(StuResult);
