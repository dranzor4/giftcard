import React, { memo, useEffect, useState } from "react";
import { offers } from "../../utils/constants/constants";
import useIsMobile from "../../customHooks/useIsMobile";
import "./Offers.css";
const Offers = () => {
  const [showOffers, setShowOffers] = useState(false);
  const [data, setData] = useState();
  const mobile = useIsMobile();
  useEffect(() => {
    if (mobile) {
      if (showOffers) {
        setData(offers);
      } else {
        setData(offers.slice(0, 1));
      }
    } else {
      setData(offers);
    }
  }, [mobile, showOffers]);

  return (
    <div className="offersContainer">
      <div className="offersHeaderContainer">
        <div className="offersHeader">Offers</div>
        {mobile && offers.length > 1 && showOffers === false && (
          <div
            className="offersCount"
            onClick={() => {
              setShowOffers(!showOffers);
            }}
          >
            <div className="count">+{offers.length - 1} more</div>
            <img src="/Images/right-arrow.svg" alt="rightArrow" />
          </div>
        )}
      </div>
      {data?.map((data) => {
        return (
          <div className="offers" key={data.id}>
            <img src="/Images/offer.svg" alt="offer" />
            <div className="offer-description">
              <span className="offerSummary">{data.summary}</span>
              <span className="code">{` ${data.code}`}</span>
            </div>
            <img
              src="/Images/copy.svg"
              alt="copy"
              onClick={() => {
                navigator.clipboard.writeText(data.code);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default memo(Offers);
