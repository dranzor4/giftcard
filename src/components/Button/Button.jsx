import React from 'react'
import styles from "./Button.module.css"
const Button = ({children,customeClass,handleClick}) => {
  return (
    <button className={`${styles.defaultButton} ${customeClass}`} onClick={handleClick}>{children}</button>
  )
}

export default Button