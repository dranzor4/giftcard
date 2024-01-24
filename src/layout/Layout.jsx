import React, { useState } from "react";
import Routers from "../routes/Routes";
import DownBarLogin from "../components/DownBarLogin";
import Sidebar from "../components/Sidebar";
import LoginModalComp from "../components/loginModal/LoginModalComp";
import Header from "../components/Header/index";

const Layout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isLogoutbarOpen, setIsLogoutbarOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  const toggleDownbar = () => {
    setIsLogoutbarOpen(!isLogoutbarOpen);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <LoginModalComp
        show={showLoginModal}
        handleClose={handleCloseLoginModal}
      />
      <Header toggleSidebar={toggleSidebar} isSideBarOpen={isSideBarOpen}/>
      <Routers />
      <Sidebar
        toggleSidebar={toggleSidebar}
        toggleDownbar={toggleDownbar}
        state={isSideBarOpen}
      />
      <DownBarLogin toggleDownbar={toggleDownbar} state={isLogoutbarOpen} />
    </>
  );
};

export default Layout;
