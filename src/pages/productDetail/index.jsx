import React, { useState } from "react";
import "./ProductDetail.css";
import CustomCard from "../../components/CustomCard/index";
import RadioBox from "../../components/RadioBox";
import GiftForSomeoneFrom from "../../components/GiftForSomeoneFrom";
import Offers from "../../components/Offers";
import Redeemable from "../../components/Redeemable"
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  // const { productIndex } = useParams();
  // const navigate=useNavigate();
  // const data = cardData[productIndex];
  // let customClass = {
  //   product: styles.product,
  //   card: styles.card,
  //   cardHeader: styles.cardHeader,
  //   cardContent: styles.cardContent,
  //   cardImage: styles.cardImage,
  //   cardBadge: styles.cardBadge,
  //   validityText: styles.validityText,
  // };

  const navigate = useNavigate()

  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const options = [
    { value: 'Buy for Self', label: 'Buy for Self'  },
    { value: 'Gift to Someone', label: 'Gift to Someone' },
  ];

  return (
    <>
      <div className="mainConatiner">
        <div className="backBtn">
          <img src="/Images/left-arrow.svg" onClick={() => navigate(-1)} alt="" />
          <img  src="/Images/search-icon.svg" alt="" />
        </div>
        <div className="prductDetailPage">
          <div className="cardDetails">
            <CustomCard label={true} tag={true}/>
            <Redeemable />
            <Offers />
          </div>
          <div className="cardForm">
            <div className="text-center line-height-0">
              <RadioBox options={options} selectedOption={selectedOption} onOptionChange={handleOptionChange} className="product-selforgift-btn" />
            </div>
            {/* <ByForSelfFrom /> */}
            <GiftForSomeoneFrom />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;