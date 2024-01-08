import React from 'react'
import Style from "./Sidebar.module.css"
import ProfileIcon from '../ProfileIcon'

const Sidebar = ({ state, toggleDrawer }) => {

    return (
        <>
            <div className={` ${Style.sidebar} ${state ? Style.open : ""}`}>
                <div className={Style.sidebarProfContainer}>
                        <ProfileIcon hamburger={false} />
                    <h3>Hello, aminesh</h3>
                    {/* <Button>Login</Button> */}
                </div>
                <ul>
                    <li><span><img src="./Images/profile-icon.svg" alt="" /></span> My Account</li>
                    <li><span><img src="./Images/giftcard-Icon.svg" alt="" /></span> My Gift Cards</li>
                    <li><span><img src="./Images/order-bag.svg" alt="" /></span> Orders</li>
                    <li><span><img src="./Images/logout-icon.svg" alt="" /></span> Logout</li>
                </ul>
            </div>
            <div onClick={() => toggleDrawer()} className={`${Style.sidebarOverlay} ${state ? Style.active : ""}`}></div>
        </>
    )
}

export default Sidebar