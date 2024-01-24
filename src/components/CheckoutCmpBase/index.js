import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import "./CheckoutCmpBase.css";
import CustomMobNoInput from "../CustomMobNoInput";

const CheckoutCmpBase = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const handleTermsChange = () => {
    setAcceptTerms(!acceptTerms);
  };

  const handlePrivacyChange = () => {
    setAcceptPrivacy(!acceptPrivacy);
  };

  const handleSubmit = () => {
    // Perform actions when the form is submitted
    if (acceptTerms && acceptPrivacy) {
      // Form is valid, proceed with submission
      console.log("Form submitted successfully!");
    } else {
      // Display an error message or take appropriate action
      console.log("Please accept both terms and privacy policies.");
    }
  };

  return (
    <>
      <div className="checkout-checkbox">
        <div className="checkout-checkbox-inside-div">
          <div>
            {" "}
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={handleTermsChange}
            />
          </div>
          <div className="checkout-page-typography">
            I have read the important instructions of brands before proceeding
            to BUY.
          </div>
        </div>
        <div className="checkout-checkbox-inside-div">
          <div>
            {" "}
            <input
              type="checkbox"
              checked={acceptPrivacy}
              onChange={handlePrivacyChange}
            />
          </div>
          <div className="checkout-page-typography">
            I agree to the{" "}
            <a href="#" style={{ color: "var(--Gray-Gray-500, #1D86FF)" }}>
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>

      <div className="checkout-place-order-tab">
        <div className="checkout-place-order">
          <div style={{width:"50%"}}>
            <div id="text1">Total Payable</div>
            <div id="text2">₹2015</div>
          </div>
          <div style={{width:"50%"}}>
            <Button style={{width:"-webkit-fill-available"}}>Place Order</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCmpBase;
