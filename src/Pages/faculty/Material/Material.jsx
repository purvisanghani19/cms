import React from 'react';
import { Table } from 'react-bootstrap';
import { MdEdit, MdDelete } from "react-icons/md"

import WithLayout from '../../../components/common/comfaculty/Sidebar/SideBar';
import "./material.css";



const Material = () => {
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div class="page-header">
                <div class="row align-items-center">
                  <div class="col">
                    <h3 class="page-title">Material</h3>
                  </div>
                  <div class="col-auto text-right float-right ml-auto">
                    <a href="/material/addmaterial">
                      <button
                        style={{
                          padding: "3px 25px",
                          marginRight: "25px",
                          borderRadius: "5px",
                          backgroundColor: "#005d91",
                          border: "none",
                          color: "#fff",
                        }}
                      >
                        Add
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div className="shadow">
                    <Table striped bordered hover>
                      <thead>
                        <tr style={{ backgroundColor: "#005d91", color: "black" }}>
                          <th class="text-center">ID</th>
                          <th class="text-center">Name</th>
                          <th class="text-center">Date</th>
                          <th class="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-center">1</td>
                          <td class="text-center">
                            <h2 class="table-avatar">
                              <a
                                href="teacher-details.html"
                                class="avatar avatar-sm mr-2"
                              >
                                <img
                                  class="img-circle elevation-2 user-img"
                                  src="data:image/png;base64,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"
                                />
                              </a>
                              <a
                                href="teacher-details.html"
                                style={{
                                  textDecoration: "none",
                                  color: "#212529",
                                }}
                              >
                                Aaliyah
                              </a>
                            </h2>
                          </td>
                          <td class="text-center">12/10/1979</td>
                          <div class="material-actions">
                            <MdEdit
                              style={{
                                marginRight: "5px",
                                color: "#0094ff",
                              }}
                            />|
                            <MdDelete style={{ color: "#db3d3d" }} />
                          </div>
                        </tr>
                        <tr>
                          <td class="text-center">2</td>
                          <td class="text-center">
                            <h2 class="table-avatar">
                              <a
                                href="teacher-details.html"
                                class="avatar avatar-sm mr-2"
                              >
                                <img
                                  class="img-circle elevation-2 user-img"
                                  src="data:image/png;base64,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"
                                />
                              </a>
                              <a
                                href="teacher-details.html"
                                style={{
                                  textDecoration: "none",
                                  color: "#212529",
                                }}
                              >
                                Jhon
                              </a>
                            </h2>
                          </td>
                          <td class="text-center">12/10/1979</td>
                          <div class="material-actions">
                            <MdEdit
                              style={{
                                marginRight: "5px",
                                color: "#0094ff",
                              }}
                            />|
                            <MdDelete style={{ color: "#db3d3d" }} />
                          </div>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WithLayout(Material);