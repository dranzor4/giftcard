import React, { useState } from "react";
import styles from "./ProductDetail.module.css";
import CustomCard from "../CustomCard/index";
import RadioBox from "../RadioBox";
import GiftForSomeoneFrom from "../GiftForSomeoneFrom";
import Offers from "../Offers";
import Redeemable from "../Redeemable";
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
      <div className={styles.mainConatiner}>
        <div className={styles.backBtn}>
          <img src="/Images/left-arrow.svg" onClick={() => navigate(-1)} alt="" />
          <img  src="/Images/search-icon.svg" alt="" />
        </div>
        <div className={styles.prductDetailPage}>
          <div className={styles.cardDetails}>
            <CustomCard label={true} tag={true}/>
            <Redeemable />
            <Offers />
          </div>
          <div className={styles.cardForm}>
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
