import React from "react";
import CheckoutCmp from "../../components/CheckoutCmp";
import "./checkout.css";
import CheckoutCmpBase from "../../components/CheckoutCmpBase";
const Checkout = () => {
  return (
    <div className="checkoutPage">
      <CheckoutCmp />
      {/* <CheckoutCmpBase /> */}
    </div>
  );
};

export default Checkout;
