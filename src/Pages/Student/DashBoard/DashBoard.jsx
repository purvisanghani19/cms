import React, { useState } from "react";
import Chart from "react-apexcharts";
import './dashboard.css';
import { GiTeacher, GiWhiteBook, GiBookmarklet } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import WithLayout from "../../../components/common/Sidebar/SideBar";

function DashBoard() {

 


  const options1 = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Students", "Staff"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series1 = [60, 40];

  const series2 = [
    {
      name: "BCA",
      data: [45, 75, 38],
    },
    {
      name: "BBA",
      data: [70, 30, 62],
    },
    {
      name: "B.Com(Guj)",
      data: [80, 40, 74],
    },
    {
      name: "B.Com(Enj)",
      data: [35, 65, 28],
    },
  ];
  const options2 = {
    chart: {
      height: 450,
      type: "line",
      toolbar: "none",
    },
    stroke: {
      width: [5, 5, 5, 5],
      curve: "smooth",
    },

    xaxis: {
      categories: ["First Year", "Second Year", "Third Year"],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
  };

  const options3 = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["BBA", "BCA", "B.Com(Guj)", "B.Com(Eng)"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series3 = [30, 50, 20, 60];

  const series4 = [
    {
      name: "First Year",
      data: [500, 600, 700, 800, 700, 600, 500, 400, 300],
    },
    {
      name: "Second Year",
      data: [300, 400, 500, 500, 550, 600, 400, 700, 750],
    },
    {
      name: "Third Year",
      data: [100, 200, 300, 450, 500, 550, 600, 650, 700],
    },
  ];

  const options4 = {
    chart: {
      height: 350,
      type: "area",
      toolbar: "none",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "Year",
      categories: [
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ],
    },
    tooltip: {
      x: {
        format: "YYYY",
      },
    },
  };

  return (
    <>
      <div id="content-wrapper" 
     
      className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid" style={{width:"100%"}}>
            <div className="row">
              <div className="col-xl-3  col-md-6 mb-4">
                <div className="card border-left-danger shadow h-100 py-2">
                  <a href="/ourstudent" style={{ textDecoration: "none" }}>
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold red text-uppercase mb-1">
                            Our Students
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            4,000
                          </div>
                        </div>
                        <div className="col-auto">
                          <HiUserGroup className="fa-2x text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <a href="/ourstaff" style={{ textDecoration: "none" }}>
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Our Staff
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            100
                          </div>
                        </div>
                        <div className="col-auto">
                          <GiTeacher className="fa-2x text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                  <a href="/courses" style={{ textDecoration: "none" }}>
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Courses
                          </div>
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                            3
                          </div>
                        </div>
                        <div className="col-auto">
                          <GiWhiteBook className="fa-2x text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <a href="/subjects" style={{ textDecoration: "none" }}>
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Subjects
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            300
                          </div>
                        </div>
                        <div className="col-auto">
                          <GiBookmarklet className="fa-2x text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-6 col-md-6"
                style={{
                  width: "500px",
                  height: "450px",
                  paddingLeft: "20px",
                  backgroundColor: "white",
                  border: "1px solid #e3e6f0",
                  backgroundClip: "border-box",
                  borderRadius: "5px",
                  boxShadow: "0 .15rem 1.75rem 0 rgba(58,59,69,.15)",
                  marginTop: "50px",
               
                }}
              >
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Students and Staff
                  </h6>
                </div>
                <div className="pie">
                  <Chart
                    options={options1}
                    series={series1}
                    type="pie"
                    style={{ paddingTop: "30px",width:"500px",height:"500px" }}
                  />
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6"
                style={{
                  justifyContent:"space-between",
                  width: "500px",
                  height: "450px",
                  // paddingLeft: "20px",
                  backgroundColor: "white",
                  border: "1px solid #e3e6f0",
                  backgroundClip: "border-box",
                  borderRadius: "5px",
                  boxShadow: "0 .15rem 1.75rem 0 rgba(58,59,69,.15)",
                  marginTop: "50px",
                  
               
                }}
              >
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Course Wise Subjects
                  </h6>
                </div>
                <div className="line">
                  <Chart
                    options={options2}
                    series={series2}
                    type="line"
                    style={{ paddingTop: "50px" ,width:"500px",height:"500px"}}
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{ marginBottom: "50px" }}>
              <div
                className="col-xl-6 col-lg-6"
                style={{
                  width: "500px",
                  height: "450px",
                  // paddingLeft: "20px",
                  backgroundColor: "white",
                  border: "1px solid #e3e6f0",
                  backgroundClip: "border-box",
                  borderRadius: "5px",
                  boxShadow: "0 .15rem 1.75rem 0 rgba(58,59,69,.15)",
                  marginTop: "50px",
                  // marginLeft: "20px",
                }}
              >
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Couese wise Students
                  </h6>
                </div>
                <div className="pie">
                  <Chart
                    options={options3}
                    series={series3}
                    type="pie"
                    style={{ paddingTop: "20px",width:"500px",height:"500px" }}
                  />
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6"
                style={{
                  width: "500px",
                  height: "450px",
                  // paddingLeft: "20px",
                  backgroundColor: "white",
                  border: "1px solid #e3e6f0",
                  backgroundClip: "border-box",
                  borderRadius: "5px",
                  boxShadow: "0 .15rem 1.75rem 0 rgba(58,59,69,.15)",
                  marginTop: "50px",
                  // marginLeft: "40px",
                }}
              >
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Total Students in Each Year
                  </h6>
                </div>
                <div className="area">
                  <Chart
                    options={options4}
                    series={series4}
                    type="area"
                    style={{ paddingTop: "50px",width:"500px",height:"500px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WithLayout (DashBoard);
