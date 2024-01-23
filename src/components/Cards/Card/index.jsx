import React from "react";
import styles from "./Card.module.css";

export const Card = ({ data, className, validity }) => {
  return (
    <div
      className={`${styles.cardContainer} ${
        className?.product ? className.product : styles.cardContainer
      }`}
    >
      <div
        className={`${styles.card} ${
          className?.card ? className.card : styles.card
        }`}
      >
        <img
          src={data?.imageShow}
          alt="nature"
          className={`${styles.cardImage} ${
            className?.cardImage ? className.cardImage : styles.cardImage
          }`}
        />
        <div
          className={`${styles.cardBadge} ${
            className?.cardBadge ? className.cardBadge : styles.cardBadge
          }`}
        >
          <div>10%</div>
          <div>off</div>
        </div>
      </div>
      <h2
        className={`${styles.cardHeader} ${
          className?.cardHeader ? className.cardHeader : styles.cardHeader
        }`}
      >
        {data?.header}
      </h2>
      {validity ? (
        <div className={className?.validityText && className.validityText}>
          Validity: 1 year from the date of issue
        </div>
      ) : (
        <div
          className={`${styles.cardContent} ${
            className?.cardContent ? className.cardContent : styles.cardContent
          }`}
        >
          <p className={`${styles.cardParagraph}`}>{`${data?.paragraph} | `}</p>
          <p className={`${styles.cardLink}`}>{data?.link}</p>
        </div>
      )}
    </div>
  );
};
