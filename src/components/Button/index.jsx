import React from 'react'
import "./Button.css"
const Button = ({children,className,handleClick, type}) => {
  return (
    <button type={type} className={`defaultButton ${className}`} onClick={handleClick}>{children}</button>
  )
}

export default Button