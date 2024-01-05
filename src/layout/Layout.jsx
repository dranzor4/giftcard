import React, { useState } from "react";
import Header from "../components/header/Header";
import Routers from "../routes/Routes";
import LoginModalComp from "../components/loginModal/LoginModalComp";

const Layout = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
    <LoginModalComp show={showModal} handleClose={handleCloseModal} />
      <Header />
      <Routers />
    </>
  );
};

export default Layout;
