// import React, { useState } from 'react'
import "./DownBarLogin.css";
import Button from "../Button";
import TransparentOverlay from "../TransparentOverlay/index";
const DownBarLogin = ({ toggleDownbar, state }) => {
  return (
    <>
      <div className={`downbar ${state ? "active" : ""} `}>
        <div className="DownBarheader" onClick={toggleDownbar}>
          <img src="/Images/rectangle-bar.svg" alt="" />
        </div>
        <div className="DownBarContent">
          <p>Are you sure you want to log out?</p>
          <div className="LogoutBtnGrp">
            <Button handleClick={toggleDownbar} className="logoutCancelBtn">
              Cancel
            </Button>
            <Button className="logoutBtn">Logout</Button>
          </div>
        </div>
      </div>
      <TransparentOverlay
        handleClick={toggleDownbar}
        customeClass="downbarLoginOverlay"
        isOpen={state}
      />
    </>
  );
};

export default DownBarLogin;
