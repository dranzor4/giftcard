import React from 'react'
import style from "./CustomCard.module.css"

const CustomCard = () => {
  return (
    <div className={style.card}>
      <img src="/Images/amazon-card.png" alt="card" />
      <div></div>
    </div>
  )
}

export default CustomCard