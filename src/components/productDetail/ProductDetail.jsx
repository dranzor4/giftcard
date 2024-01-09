import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Card } from "../card/Card";
import { cardData } from "../../utils/constants/constants";
import styles from "./ProductDetail.module.css";
import CustomCard from "../CustomCard/index";

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
  return (
    <>
     <div className={styles.mainConatiner}>
      <div className={styles.backBtn}>
        <img src="/Images/left-arrow.svg" alt="" />
        <img src="/Images/search-light-icon.svg" alt="" />
      </div>
      <div className={styles.prductDetailPage}>
        <div className={styles.cardDetails}>
          <CustomCard />
        </div>
        <div className={styles.cardForm}>
          card forms
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;
