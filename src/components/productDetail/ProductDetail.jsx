import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Card } from "../card/Card";
import { cardData } from "../../utils/constants/constants";
import styles from "./ProductDetail.module.css";
const ProductDetail = () => {
  const { productIndex } = useParams();
  const navigate=useNavigate();
  const data = cardData[productIndex];
  let customClass = {
    product: styles.product,
    card: styles.card,
    cardHeader: styles.cardHeader,
    cardContent: styles.cardContent,
    cardImage: styles.cardImage,
    cardBadge: styles.cardBadge,
    validityText: styles.validityText,
  };
  return (
    <>
      <div className={styles.backButton} onClick={()=>{ navigate(-1)}}><img src="/Images/left-arrow.svg" alt="left-arrow"/><div>Back</div></div>
      <Card data={data} className={customClass} validity={true} />
    </>
  );
};

export default ProductDetail;
