import React from 'react'
import "./Button.css"
const Button = ({children,className,handleClick}) => {
  return (
    <button className={`defaultButton ${className}`} onClick={handleClick}>{children}</button>
  )
}

export default Button