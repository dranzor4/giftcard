import React from "react";
import { cardData } from "../../../utils/globalvariables/GlobalPath";
import { Card } from "../../card/Card";
import styles from "./Carousel.module.css"

const Carousel = () => {
  return (
    <div>
      <div className={styles.carouselHeader}>
        <div className={styles.carouselDeal}>Hot deals</div>
        <div className={styles.carouselViewAll}>View all</div>
      </div>
    <div className={styles.carousel}>
      {
        cardData.map((data,index) => <Card data={data}  key={index}/>)
      }
    </div>
    </div>
  )
}

export default Carousel