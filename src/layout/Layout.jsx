import React, { useState } from "react";

import Routers from "../routes/Routes";
import LoginModalComp from "../components/loginModal/LoginModalComp";
import Header from "../components/header";


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
