import React, { useEffect,useState } from "react";
import { cardData } from "../../utils/globalvariables/GlobalPath";
import { Card } from "../card/Card";
import styles from "./Carousel.module.css"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next item cyclically
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [cardData.length]);
  return (
    <div>
      <div className={styles.carouselHeader}>
        <div className={styles.carouselDeal}>Hot deals</div>
        <div className={styles.carouselViewAll}>View all</div>
      </div>
    <div className={styles.carousel} >
      {
        cardData.map((data,index) =><Card data={data}  key={index} currentIndex={currentIndex}/>)
      }
    </div>
    </div>
  )
}

export default Carousel