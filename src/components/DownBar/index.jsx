import React from 'react'
import "./DownBar.css"
import TransparentOverlay from  "../TransparentOverlay/index"

const DownBar = ({toggleDownbar, state=true,customClass,  children }) => {
    return (
        <>
            <div className={`${customClass} ${"downbar"} ${state ? "active" : ""} `}>
                <div className={"DownBarheader"} onClick={toggleDownbar}>
                    <img src="/Images/rectangle-bar.svg" alt="" />
                </div>
                <div className={"DownBarContent"}>
                   {
                    children
                   }
                </div>
            </div>
            <TransparentOverlay handleClick={toggleDownbar} customeClass={"downbarLoginOverlay"} isOpen={state} />
        </>
    )
}

export default DownBar