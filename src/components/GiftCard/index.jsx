// import React, { useState , useEffect} from "react";
import style from "./GiftCard.module.css";

const GiftCard = ({ title, data }) => {
  // console.log(data);
  return (
    <>
      <div className="mb-2"> 
        {title}
        <div className={`row ${style.first} mx-0`}>
          <div className="col">
            {data?.map((item, index) => {
              return (
                <div key={index} className={`row ${style.gift_card_item}`}>
                  <div className="h12 col-6 p-0">{item?.key}
                  </div>
                  <div className="h12 col-6 p-0">{item?.value}
                  { item.icon && <img src={`Images/${item?.icon}`} className="mx-1" alt="" /> }
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCard;
