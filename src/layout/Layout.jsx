import React, { useState } from "react";
// import Header from "../components/Header";
import Routers from "../routes/Routes";
import DownBarLogin from "../components/DownBarLogin";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import LoginModalComp from "../components/loginModal/LoginModalComp";
import SignModalComp from "../components/loginModal/SignModalComp";

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
      <Header toggleSidebar={toggleSidebar} />
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
