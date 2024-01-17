import React from "react";
import "./CartIcon.css";
const CartIcon = ({}) => {
  return (
    <div className="cartIconConatiner">
      <div className="cartImgContainer">
        <img src="/Images/fluent_cart-16-regular.svg" alt="" />
      </div>
      {<span className="cartText"> Cart</span>}
    </div>
  );
};

export default CartIcon;
