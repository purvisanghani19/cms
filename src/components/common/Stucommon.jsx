import React from "react";
import Header from "./Header/Header";
import SideBar from "./Sidebar/SideBar";

const Stucommon = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <SideBar />
    </>
  );
};

export default Stucommon;
