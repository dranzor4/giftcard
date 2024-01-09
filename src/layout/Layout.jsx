import React, { useState } from "react";
import Header from "../components/Header";
import Routers from "../routes/Routes";
import DownBarLogin from "../components/DownBarLogin";
import Sidebar from "../components/Sidebar";

const Layout = () => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isLogoutbarOpen, setIsLogoutbarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }
  const toggleDownbar = () => {
    setIsLogoutbarOpen(!isLogoutbarOpen)
  }


  return (
    <>
      <Header toggleSidebar={toggleSidebar}/>
      <Routers />
      <Sidebar toggleSidebar={toggleSidebar} toggleDownbar={toggleDownbar} state={isSideBarOpen} />
      <DownBarLogin toggleDownbar={toggleDownbar} state={isLogoutbarOpen}/>
    </>
  );
};

export default Layout;
