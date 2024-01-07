import React from 'react'
import Sidebar from '../Sidebar';

// import "./header.css"
import Style from "./Header.module.css"
import ProfileIcon from '../ProfileIcon';
import SearchBar1 from '../SearchBar1/Index';
import CartIcon from '../CartIcon';
import { Link } from 'react-router-dom';
import NavSignInSignUp from '../NavSignInSignUp';



const Header = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };
  return (
    <>
      <header className={Style.header}>
        <div className={Style.headerContainer}>
          <div className={Style.mobileMenuWrap}>
            <ProfileIcon hamburger={true} profileClick={toggleDrawer} />
          </div>
          <div className={Style.logoWrap}>

            <img src="./Images/Logo.svg" alt="" />

          </div>
          <div className={Style.searchBarWrap}>
            <SearchBar1 />
          </div>
          <ul className={Style.headerNavwrap}>
            <li className={Style.calculator}>
              <Link to="/calculator">
                <img src="./Images/calculator.png" alt="" />
              </Link>

            </li>
            <li className={Style.NabLoginBox}>
              <Link to="/login">
                <NavSignInSignUp />
              </Link>
            </li>
            <li>
              <Link>
                <CartIcon />
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <></>
      <Sidebar toggleDrawer={toggleDrawer} state={state} />
    </>
  )
}

export default Header