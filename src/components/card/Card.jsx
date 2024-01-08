import React from "react";
import styles from "./Card.module.css"
import {Link} from "react-router-dom"
export const Card = ({data,index}) => {
  return (
    <Link to={`/productDetail/${index}`} className={styles.cardNavigation}>
    <div className={styles.cardContainer}>
      <div className={styles.card} >
       <img src={data?.imageShow} alt="nature" className={styles.cardImage}/>
        <div className={styles.cardBatch}>{data?.batch}</div>
      </div>
      <h2 className={styles.cardHeader}>{data?.header}</h2>
      <div className={styles.cardContent}>
      <p className={styles.cardParagraph}>{`${data?.paragraph} | `}</p>
      <p className={styles.cardLink}>{data?.link}</p>
      </div>
    </div>
    </Link>
  );
};
