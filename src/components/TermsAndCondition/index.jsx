import React, { useEffect, useState } from "react";
import ButtonTab from "../ButtonTab";
import Button from "../Button";
import {
  threeButtonData,
  addToCartOrBuyNow,
} from "../../utils/constants/constants";
import "./TermsAndCondition.css";

const TermsAndCondition = () => {
  const [selected, setSelected] = useState();
  const [selected1, setSelected1] = useState();
  useEffect(() => {
    setSelected(threeButtonData[0]?.id);
    setSelected1(addToCartOrBuyNow[1]?.id);
  }, []);

  return (
    <div className="tcContainer">
      <div className="tc">
        <div className="productDetailTab">
          <ButtonTab
            data={threeButtonData}
            selected={(data) => {
              setSelected(data);
            }}
            defaultSelected={threeButtonData[0]?.id}
          />
        </div>
        {selected === 1 && (
          <div>
            <div className="description">Description</div>
            <p className="description-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="description">How to Use</div>
            <ol>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </li>
              <li>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type.
              </li>
              <li>Scrambled it to make a type specimen book.</li>
            </ol>
          </div>
        )}
        <div className="addToCartOrBuyNow">
          <Button className="addToCart">Add To Cart</Button>
          <Button className="buyNow text-white">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
