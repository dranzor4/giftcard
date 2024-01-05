import React from 'react'
import Sidebar from '../Sidebar';

// import "./header.css"
import Style from "./Header.module.css"
import ProfileIcon from '../ProfileIcon';



const Header = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };
  return (
    <>
      <header className={Style.header}>
        <div className={Style.headerContainer}>
          <div>
            <ProfileIcon hamburger={true} profileClick={toggleDrawer} />
          </div>
          <div>
            <h2>woohoo</h2>
          </div>
          <div className={Style.headerNav}>
            <ul>
              <li>calc</li>
              <li>cart</li>
            </ul>
          </div>
        </div>
      </header>
      <Sidebar toggleDrawer={toggleDrawer} state={state} />
    </>
  )
}

export default Header