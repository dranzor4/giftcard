import React from "react";
import { cardData } from "../../utils/globalvariables/GlobalPath";
import { Card } from "../card/Card";
import styles from "./Carousel.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode} from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css';

const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselHeader}>
        <div className={styles.carouselDeal}>Hot deals</div>
        <div className={styles.carouselViewAll}>View all</div>
      </div>
    <Swiper
      spaceBetween={50}
      slidesPerView={7/2}
      rewind={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      freeMode={true}
      modules={[FreeMode]}
      breakpoints={{
        0:{
          slidesPerView: 3/2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 5/2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 7/2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 7/2,
          spaceBetween: 50,
        },
      }}
    >
      <div className={styles.carousel} >
      {
        cardData.map((data,index) =><SwiperSlide><Card data={data}  key={index}/><SwiperSlide/></SwiperSlide>)
      }
    </div>
      ...
    </Swiper>
 
    
    </div>
  )
}

export default Carousel