// import React, { useState } from 'react'
import "./DownBarLogin.css";
import Button from "../Button";
import TransparentOverlay from "../TransparentOverlay/index";
import DownBar from "../DownBar";
const DownBarLogin = ({ toggleDownbar, state }) => {
  return (
    <>
      <DownBar toggleDownbar={toggleDownbar} state={state}>
      <p>Are you sure you want to log out?</p>
          <div className="LogoutBtnGrp">
            <Button handleClick={toggleDownbar} className="logoutCancelBtn">
              Cancel
            </Button>
            <Button className="logoutBtn">Logout</Button>
          </div>
      </DownBar>
    </>
  );
};

export default DownBarLogin;
