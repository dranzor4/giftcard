import React from 'react'
import Style from './NavLoginSignUp.module.css'

const NavSignInSignUp = () => {
    return (
        <div className={Style.NavSignInSignUpBox}>
            <div><img src="/Images/person.svg" alt="" /></div>
            <div className={Style.NavSignInSignUpText}>
                <p className={Style.loginSignupTxt}>Login/Signup</p>
                <p className={Style.myAccountText}>My Account</p>
            </div>
        </div>
    )
}

export default NavSignInSignUp