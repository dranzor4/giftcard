import React from 'react'
import Style from "./DownBar.module.css"
import Button  from '../Button/Button'

const DownBar = () => {
  return (
    <div className={Style.downbar}>
        <div className={Style.DownBarheader}>
            <img src="./Images/rectangle-bar.svg" alt="" />
        </div>
        <div className={Style.DownBarContent}>
            <p>Are you sure you want to log out?</p>
            <div>
            <Button>Cancel</Button>
            <Button>Logout</Button>
            </div>
        </div>
    </div>
  )
}

export default DownBar