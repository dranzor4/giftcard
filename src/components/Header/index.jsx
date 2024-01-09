import React, { useState } from 'react'
import Sidebar from '../Sidebar';

// import "./header.css"
import Style from "./Header.module.css"
import ProfileIcon from '../ProfileIcon';
import SearchBar1 from '../SearchBar1/Index';
import CartIcon from '../CartIcon';
import { Link } from 'react-router-dom';
import NavSignInSignUp from '../NavSignInSignUp';
import CalculatorModal from '../Calculator';



const Header = ({toggleSidebar}) => {
const [state, setState] = useState(false);
const [showModal, setshowModal] = useState(false);
  
const handleShow = ()=>{setshowModal(true)}
const handleClose = ()=>{setshowModal(false)}

  return (
    <>
      <header className={Style.header}>
        <div className={Style.headerContainer}>
          <div className={Style.mobileMenuWrap}>
            <ProfileIcon hamburger={true} profileClick={toggleSidebar} />
          </div>
          <div className={Style.logoWrap}>

            <img src="/Images/Logo.svg" alt="" />

          </div>
          <div className={Style.searchBarWrap}>
            <SearchBar1 />
          </div>
          <ul className={Style.headerNavwrap}>
            <li className={Style.calculator}>
                <img src="/Images/calculator.png" alt="calculator" onClick={handleShow}/>
            </li>
            <li className={Style.NabLoginBox}>
              <Link to="/login">
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
      <CalculatorModal show={showModal} handleClose={handleClose}/>
    </>
  )
}

export default Header