import React from "react";
import { cardData } from "../../utils/globalvariables/GlobalPath";
import { Card } from "../card/Card";
import styles from "./Carousel.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay ,FreeMode} from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Carousel = (props) => {
  const{name,delay}=props;
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselHeader}>
        <div className={styles.carouselDeal}>{name}</div>
        <div className={styles.carouselViewAll}>View all</div>
      </div>
    <Swiper
      spaceBetween={50}
      slidesPerView={3.5}
      rewind={true}
      onSlideChange={() => {}}
      onSwiper={(swiper) => console.log(swiper)}
      freeMode={true}
      effect={'fade'}
      modules={[Autoplay,FreeMode]}
      speed={800}
      autoplay={{
        delay: delay,
        // disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        0:{
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 10,
        },
      }}
    >
      <div className={styles.carousel} >
      {
        cardData.map((data,index) =><SwiperSlide key={index}><Card data={data} /><SwiperSlide/></SwiperSlide>)
      }
    </div>
      ...
    </Swiper>
 
    
    </div>
  )
}

export default Carousel