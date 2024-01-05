import React from 'react'
import Style from "./ProfileIcon.module.css"
const ProfileIcon = ({ hamburger, profileClick }) => {
    return (
        <div className={Style.profileIconContainer}>
            <div onClick={() => profileClick()} className={`${Style.profileIcon} ${hamburger ? Style.sidebar : ""} `}>
                <img src="https://picsum.photos/id/237/200/300" alt="abc" />
                {
                    hamburger && <div className={Style.hamburger}>
                            <img src="./Images/ham.png" alt="ham" />
                        </div>
                }
            </div>
        </div>

    )
}

export default ProfileIcon