import React from "react";
import "./ProductDetailCard.css"
const ProductDetailCard = (props) => {
  const{cardData}=props
  return (
    <div className="productDetailCardContainer">
      <div className="cardText">
      <div className="header">How to Use Amazon e-Vouchers</div>
      <div className="instruction">{cardData.instruction}</div>
      </div>
      <img src="/Images/gift.svg" alt="gift"/>
    </div>
  );
};

export default ProductDetailCard;
