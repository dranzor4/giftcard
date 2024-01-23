import React from 'react'
import Style from "./TransparentOverlay.module.css"
const index = ({handleClick, isOpen,customeClass}) => {
  return (
    <div onClick={() => handleClick()} className={`${Style.transparentOverlay} ${isOpen ? Style.active : ""}  ${customeClass}`}></div>
  )
}

export default index