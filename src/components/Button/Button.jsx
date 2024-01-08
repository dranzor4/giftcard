import React from 'react'
import styles from "./Button.module.css"
const Button = ({children,className,handleClick}) => {
  return (
    <button className={`${styles.defaultButton} ${className}`} onClick={handleClick}>{children}</button>
  )
}

export default Button