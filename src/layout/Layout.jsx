import React, { useState } from "react";
// import Header from "../components/Header";
import Routers from "../routes/Routes";
import DownBarLogin from "../components/DownBarLogin";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import LoginModalComp from "../components/loginModal/LoginModalComp";

const Layout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isLogoutbarOpen, setIsLogoutbarOpen] = useState(false)
  const [showModal, setShowModal] = useState(true);
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }
  const toggleDownbar = () => {
    setIsLogoutbarOpen(!isLogoutbarOpen)
  }
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
    <LoginModalComp show={showModal} handleClose={handleCloseModal} />
      <Header toggleSidebar={toggleSidebar}/>
      <Routers />
      <Sidebar toggleSidebar={toggleSidebar} toggleDownbar={toggleDownbar} state={isSideBarOpen} />
      <DownBarLogin toggleDownbar={toggleDownbar} state={isLogoutbarOpen}/>
    </>
  );
};

export default Layout;
