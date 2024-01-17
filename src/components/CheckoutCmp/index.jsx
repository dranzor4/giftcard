import React from "react";
import NormalInput from "../NormalInput";
import Button from "../Button";
import "./CheckoutCmp.css";
import RewardSummaryDesk from "../RewardSummaryDesk";
import CheckoutCmpBase from "../CheckoutCmpBase";

const CheckoutCmp = () => {
  return (
    <div>
      <div className="promoCodeContainer">
        <div className="orderSummaryContainer">
          <img src="/Images/left-arrow.svg" alt="left-arrow" />
          <div className="orderSummary">Order Summary</div>
        </div>
        <div className="promoCodeInput">
          <div className="checkoutNormalInp">
            <NormalInput placeholder="Promo Code" />
          </div>
          <div className="checkoutButton">
            <Button className="checkoutApplyButton">Apply</Button>
          </div>
        </div>
        <div className="orderPayable">
          <div className="orderDetailContainer">
            <div className="orderAmountDetail">
              <div className="totalOrder">Total Order Amount</div>
              <div className="totalOrder">2000</div>
            </div>
            <div className="orderAmountDetail">
              <div className="lightTotalOrder">Total Order Quantity</div>
              <div className="totalOrder">2</div>
            </div>
            <div className="orderAmountDetail">
              <div className="lightTotalOrder">Processing Fee(1.25% + GST)</div>
              <div className="totalOrder">15</div>
            </div>
          </div>


          <div className="totalPayableDetail">
            <div className="totalOrder">Total Payable</div>
            <div className="totalOrder">2015</div>
          </div>
        </div>
        <div className="crps-container">
          <RewardSummaryDesk />
        </div>
        <div>
        <CheckoutCmpBase />
        </div>
      </div>
    </div>
  );
};

export default CheckoutCmp;
