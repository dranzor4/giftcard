import React from "react";
import styles from "./Card.module.css"
export const Card = ({data,additionalCss}) => {
  return (
    <div className={styles.cardContainer} style={additionalCss}>
      <div className={styles.card} >
       <img src="/images/test.jpg" alt="nature" className={styles.cardImage}/>
        <div className={styles.cardBatch}>{data?.batch}</div>
      </div>
      <h2 className={styles.cardHeader}>{data?.header}</h2>
      <div className={styles.cardContent}>
      <p className={styles.cardParagraph}>{data?.paragraph} | </p>
      <p className={styles.cardLink}>{data?.link}</p>
      </div>
    </div>
  );
};
