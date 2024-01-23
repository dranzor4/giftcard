import React from "react";
import "./Card.css";

export const Card = ({ data, className, validity }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img src={data?.imageShow} alt="nature" className="cardImage" />
        <div className="cardBadge">
          <div>10%</div>
          <div>off</div>
        </div>
      </div>
      <h2 className="cardHeader">{data?.header}</h2>
      {validity ? (
        <div className="validityText">
          Validity: 1 year from the date of issue
        </div>
      ) : (
        <div className="cardContent">
          <p className="cardParagraph">{`${data?.paragraph} | `}</p>
          <p className="cardLink">{data?.link}</p>
        </div>
      )}
    </div>
  );
};
