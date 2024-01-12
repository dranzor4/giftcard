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
    { value: 'Buy for Self', label: 'Buy for Self' },
    { value: 'Gift to Someone', label: 'Gift to Someone' },
  ];

  return (
    <>
      <div className={styles.mainConatiner}>
        <div className={styles.backBtn}>
          <img src="/Images/left-arrow.svg" onClick={() => navigate(-1)} alt="" />
          <img src="/Images/search-icon.svg" alt="" />
        </div>
        <div className={""}>
          {/* <div className={styles.cardDetails}>
            <CustomCard label={true} tag={true}/>
            <Redeemable />
            <Offers />
          </div>
          <div className={styles.cardForm}>
            <div className="text-center line-height-0">
              <RadioBox options={options} selectedOption={selectedOption} onOptionChange={handleOptionChange} className="product-selforgift-btn" />
            </div>
            <ByForSelfFrom />
            <GiftForSomeoneFrom />
          </div> */}
          <div className="row">
            <div className="col-md-3 bg-primary">1</div>
            <div className="col-md-9 bg-warning">
              <div className={`row`}>
                <div className={`${styles.gridForm} row`}>
                  <div className="form-toggle p-5">buttons</div>
                  <div className="fomr-1 p-5">Form 1</div>
                  <div className={styles.form2}>FOrm 2</div>
                </div>
                <div className="row bg bg-danger p-5">
                  form 3
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-success float-right p-5">form 2</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
