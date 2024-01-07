import React from 'react'
import Style from "./ProfileIcon.module.css"
const ProfileIcon = ({ hamburger, profileClick }) => {
    return (

        // <div onClick={() => profileClick()} className={`${Style.profileIcon} ${hamburger ? Style.sidebar : ""} `}>
        //     <img className={Style.avatar} src="https://picsum.photos/id/237/200/300" alt="abc" />
        //     {
        //         hamburger && <div className={Style.hamburger}>
        //                 <img src="./Images/Menu.svg" alt="ham" />
        //             </div>
        //     }
        // </div>
        <div className={Style.avatar} onClick={() => profileClick()}>
            <div className={`${Style.avatarCircle} ${!hamburger ?  Style.sidebar : ""}`}>
                {/* <img className={Style.avatarImg} src="https://picsum.photos/id/237/200/300" alt="" /> */}
                <span className={Style.avatarText}> A</span>
            </div>
               {
                hamburger &&  <img className={Style.hamburger} src="./Images/Menu.svg" alt="" />
               }
        </div>

    )
}

export default ProfileIcon