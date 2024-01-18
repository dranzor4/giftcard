import React from "react";
import "./CustomCard.css";

const CustomCard = ({ label, tag = false }) => {
  return (
    <div className="card1">
      <div className="cardHeader1">
        <img src="/Images/amazon-card.png" alt="card" />
        {tag && (
          <div className="cardtag">
            <p>3%</p>
            <p>OFF</p>
          </div>
        )}
      </div>
      {label && (
        <div className="cardBody">
          <p className="cardBoldText">Amazon Shopping Voucher</p>
          <p className="cardLightText">
            Validity: 1 year from the date of issue
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomCard;
