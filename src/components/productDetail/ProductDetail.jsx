import React, { useState } from "react";
import styles from "./ProductDetail.module.css";
import CustomCard from "../CustomCard/index";
import RadioBox from "../RadioBox";
import ByForSelfFrom from "../ByForSelfFrom";
import GiftForSomeoneFrom from "../GiftForSomeoneFrom";
import TermsAndCondition from '../TermsAndCondition/index'
import Offers from "../Offers";
import Redeemable from "../Redeemable";

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

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: 'Buy for Self', label: 'Buy for Self' },
    { value: 'Gift to Someone', label: 'Gift to Someone' },
  ];

  return (
    <>
      <div className={styles.mainConatiner}>
        <div className={styles.backBtn}>
          <img src="/Images/left-arrow.svg" alt="" />
          <img src="/Images/search-light-icon.svg" alt="" />
        </div>
        <div className={styles.prductDetailPage}>
          <div className={styles.cardDetails}>
            <CustomCard label={true} />
            <Redeemable />
            <Offers />
          </div>
          <div className={styles.cardForm}>
            <div className="text-center">
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
