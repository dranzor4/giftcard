import React, { useState } from "react";
import Sidebar from "../Sidebar";

// import "./header.css"
import "./Header.css";
import ProfileIcon from "../ProfileIcon";
import SearchBar1 from "../HeaderCompnents/HeaderSearchBar/Index";
import CartIcon from "../CartIcon";
import { Link } from "react-router-dom";
import NavSignInSignUp from "../NavSignInSignUp";
import CalculatorModal from "../Calculator";
import BackWithText from "../HeaderCompnents/BackWithText";
import HeaderCommonCompoenents from "../HeaderCompnents/HeaderCommonCompoenents";

const Header = ({ toggleSidebar }) => {
  const [state, setState] = useState(false);
  const [showModal, setshowModal] = useState(false);

  const handleShow = () => {
    setshowModal(true);
  };
  const handleClose = () => {
    setshowModal(false);
  };

  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <div className="mobileMenuWrap">
            <ProfileIcon hamburger={true} profileClick={toggleSidebar} />
          </div>
          <div className="logoWrap">
            <img src="/Images/Logo.svg" alt="" />
          </div>
          <div className="searchBarWrap">
            {/* <SearchBar1 /> */}
            {/* <BackWithText /> */}
            <HeaderCommonCompoenents />
          </div>
          <ul className="headerNavwrap">
            <li className="calculator">
              <img
                src="/Images/calculator.png"
                alt="calculator"
                onClick={handleShow}
              />
            </li>
            <li className="NabLoginBox">
              <Link to="#">
                <NavSignInSignUp />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <CartIcon />
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <></>
      <Sidebar toggleDrawer={toggleSidebar} state={state} />
      <CalculatorModal show={showModal} handleClose={handleClose} />
    </>
  );
};

export default Header;
