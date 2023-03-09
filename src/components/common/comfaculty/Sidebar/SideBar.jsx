import React, { useState } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { SiShopware } from "react-icons/si";
import { NavItem } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaBell } from "react-icons/fa";
import { faculty } from "../../../../Routes/route";
import "./sidebar.css";
import axios from "axios";



const WithLayout = (Sidebar) => {

  const logout=()=>{
    console.log("hieeeeeee");
  }


  return function WithPage() {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    const activeLink = "nav-link active";
    const normalLink = "nav-link";
    const profile = async()=>{
  debugger
     await axios.get("http://127.0.0.1:4000/api/use/get-staff-profile/getallstafflist").then((result) => {
        console.log(result.data);
     }).catch((err)=>{
       console.log(err);
     })
    }
    return (
      <>
        <aside
          className="main-sidebar sidebar-light-maroon navbar-light elevation-4 sidebar-no-expand"
          style={{ width: isOpen ? "250px" : "70px", position: "fixed" }}
        >
          <>
            <div className="brand-link text-sm">
              {isOpen ? (
                <Link
                  to="/"
                  className="brand-link text-sm"
                  style={{ textDecoration: "none" }}
                >
                  <SiShopware
                    className={"brand-image img-circle elevation-3"}
                    style={{
                      opacity: ".8",
                      width: "1.5rem",
                      height: "1.5rem",
                      maxHeight: "unset",
                    }}
                  />
                  <span className="brand-text font-weight-light">College</span>
                </Link>
              ) : (
                <Link
                  to="/"
                  className="brand-link text-sm"
                  style={{ textDecoration: "none", paddingBottom: "1.3rem" }}
                >
                  <SiShopware
                    className={"brand-image img-circle elevation-3"}
                    style={{
                      opacity: ".8",
                      width: "1.5rem",
                      // height: "1.5rem",
                      // maxHeight: "unset",
                    }}
                  />
                </Link>
              )}
            </div>
            <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-transition os-host-scrollbar-horizontal-hidden">
              <div className="os-resize-observer-host observed">
                <div
                  className="os-resize-observer"
                  style={{ left: "0px", right: "auto" }}
                ></div>
              </div>
              <div
                className="os-size-auto-observer observed"
                style={{ height: "calc(100% + 1px)", float: "left" }}
              >
                <div className="os-resize-observer"></div>
              </div>
              <div
                className="os-content-glue"
                style={{ margin: "0px -8px", width: "249px" }}
              ></div>
              <div className="os-padding">
                <div className="os-viewport os-viewport-native-scrollbars-invisible">
                  <div
                    className="os-content"
                    style={{
                      padding: "0px 8px",
                      height: "100%",
                      width: "100%",
                    }}
                  ></div>
                  <div className="mt-4 ">
                    <ul
                      className="nav-pills nav-sidebar flex-column text-sm nav-compact nav-flat nav-child-indent nav-collapse-hide-child"
                      role="menu"
                      style={{ paddingLeft: "0px" }}
                    >
                      {faculty.map((link) =>
                        (link.name !== "view notice" && link.name !== "faculty profile" && link.name !== "add leave" && link.name !== "add material"  && link.name !== "stulist profile"  && link.name !== "add facfeedbackform"&& link.name !== "view student feedback") ?
                         (<NavItem
                          className="nav-item"
                          style={{ textAlign: "left" }}
                        >
                          <NavLink
                            to={`${link.path}`}
                            key={link.name}
                            className={({ isActive }) =>
                              isActive ? activeLink : normalLink
                            }
                          >
                            <span className="icon"> {link.icon}</span>
                            {isOpen ? (
                              <span className="capitalize" style={{ padding: "10px" }}>{link.name}</span>
                            ) : (
                              ""
                            )}
                          </NavLink>
                        </NavItem>) : ""
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        </aside>
        <nav
          className="main-header navbar navbar-expand navbar-light shadow text-sm"
          style={{
            marginLeft: isOpen ? "250px" : "70px",
            position: "sticky",
            top: "0",
            height: "50px",
          }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" role="button">
                <FaBars onClick={toggle} style={{ marginLeft: "10px" }} />
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="btn-group nav-link d-flex">
                <span>
                  <div className="dropdown">
                    <div
                      className="notificationbell"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ "font-size": "30px" }}
                    >
                      <FaBell style={{ marginBottom: "21px", marginLeft: "10px", color: "#263159" }} />
                    </div>

                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          password change
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Log out
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </li>
            <li className="nav-item">
              <div className="btn-group nav-link d-flex" data-bs-toggle="dropdown"
                aria-expanded="false" style={{ marginLeft: "-20px" }}>
                <span>
                  <div className="dropdown show">
                    <img
                      data-toggle="dropdown"
                      aria-expanded="false"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
                      className="img-circle elevation-2 user-img dropdown-toggle"
                      alt="User Image"
                      style={{ height: "27px", width: "27px" }}
                    />
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/facultyprofile"
                          onClick={profile}
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to=""
                        onClick={logout}
                        >
                          Log out
                        </Link>
                      </li>
                    </ul>
                    <span className="ml-3" data-toggle="dropdown"
                      aria-expanded="false">Avni Zalavadiya</span>
                  </div>
                </span>
              </div>
            </li>
          </ul>
        </nav>
        <Sidebar />
      </>
    );
  };
};

export default WithLayout;
