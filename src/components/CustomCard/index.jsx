import React from 'react'
import style from "./CustomCard.module.css"

const CustomCard = ({ label, tag=false }) => {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <img src="/Images/amazon-card.png" alt="card" />
        {tag && <div className={style.cardtag}><p>3%</p><p>OFF</p></div>}
      </div>
      {
        label && <div className={style.cardBody}>
          <p className={style.cardBoldText}>Amazon Shopping Voucher</p>
          <p className={style.cardLightText}>Validity: 1 year from the date of issue</p>
        </div>
      }
    </div>
  )
}

export default CustomCard