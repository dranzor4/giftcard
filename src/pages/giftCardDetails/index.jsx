// GiftCardDetails.js
import React from "react";
import GiftCard from "../../components/GiftCard";
import style from "./giftCardDetails.module.css";

const GiftCardDetails = () => {
  const data = [
    {
      key: "Reference ID",
      value: "6014850010000001",
    },
    {
      key: "Status",
      value: "Active",
    },
    {
      key: "Available Balance",
      value: "₹1000.00",
    },
    {
      key: "Issued Date",
      value: "14 April 2023",
    },
    {
      key: "Expiry Date",
      value: "14 April 2024",
    },
  ];
  const data1 = [
    {
      key: "Voucher code",
      value: "6987009245612367",
      icon:"copy.svg",
    },
    {
      key: "PIN",
      value: "XXXXXX",
      icon:"eye.svg",
    },
  ];
  return (
    <>
      <main className="container ">
        <div className={`row ${style.first} mb-2 mx-0`}>
          <div className={`col-2 ${style.logo}`}>
            <img src="Images/myntra_img.png" alt="" />
          </div>
          <div className="col-10">
            <p className="h-16">Myntra</p>
            <p className="h-18">10000</p>
          </div>
        </div>
        <GiftCard title={"Gift card details"} data={data} />
        <GiftCard title={"Redeem Online"} data={data1}/>
        <div className="row">
          <div className="col">
            <button className={`${style.giftcard_btn}`}>Add To Myntra</button>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default GiftCardDetails;
