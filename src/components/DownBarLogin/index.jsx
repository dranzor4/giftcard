import React, { useState } from 'react'
import Style from "./DownBarLogin.module.css"
import Button from '../Button'
import TransparentOverlay from "../TransparentOverlay/index"
const DownBarLogin = ({ toggleDownbar, state }) => {
    return (<>
        <div className={`${Style.downbar} ${state ? Style.active : ""} `}>
            <div className={Style.DownBarheader} onClick={toggleDownbar}>
                <img src="/Images/rectangle-bar.svg" alt="" />
            </div>
            <div className={Style.DownBarContent}>
                <p>Are you sure you want to log out?</p>
                <div className={Style.LogoutBtnGrp}>
                    <Button handleClick={toggleDownbar} className={Style.logoutCancelBtn}>Cancel</Button>
                    <Button className={Style.logoutBtn}>Logout</Button>
                </div>
            </div>
        </div>
        <TransparentOverlay handleClick={toggleDownbar} customeClass={Style.downbarLoginOverlay} isOpen={state} />
    </>
    )
}

export default DownBarLogin