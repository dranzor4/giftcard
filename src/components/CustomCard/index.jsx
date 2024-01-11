import React from 'react'
import style from "./CustomCard.module.css"

const CustomCard = () => {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <img src="/Images/amazon-card.png" alt="card" />
      </div>
      <div className={style.cardBody}>
        <p className={style.cardBoldText}>Amazon Shopping Voucher</p>
        <p className={style.cardLightText}>Validity: 1 year from the date of issue</p>
        <p></p>
      </div>
    </div>
  )
}

export default CustomCard