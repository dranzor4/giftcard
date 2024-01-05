import React from 'react'
import Style from "./Sidebar.module.css"
import ProfileIcon from '../ProfileIcon'

const Sidebar = ({ state, toggleDrawer }) => {

    return (
        <>
            <div className={` ${Style.sidebar} ${state ? Style.open : ""}`}>
                <div className={Style.sidebarProfContainer}>
                    <div className={Style.profileImageConatiner}>
                        <ProfileIcon hamburger={false}/>
                    </div>
                    <h3>Hello, aminesh</h3>
                    {/* <Button>Login</Button> */}
                </div>
                <ul>
                    <li>My Account</li>
                    <li>My Gift Cards</li>
                    <li>Orders</li>
                    <li>Logout</li>
                </ul>
            </div>
            <div onClick={() => toggleDrawer()} className={`${Style.sidebarOverlay} ${state ? Style.active : ""}`}></div>
        </>
    )
}

export default Sidebar