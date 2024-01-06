import React from "react";
import styles from "./Carousel.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const FadeCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      rewind={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect={'fade'}
      modules={[Autoplay,EffectFade]}
      autoplay={{
        delay: 2500,
        // disableOnInteraction: false,
      }}
      loop={true}
    >
      <div className={styles.carousel} >
      <SwiperSlide><img src="./images/nature1.jpg" alt="tree" className={styles.imageSize}/></SwiperSlide>
      <SwiperSlide><img src="./images/tree.jpg" alt="test" className={styles.imageSize}/></SwiperSlide>
      <SwiperSlide><img src="./images/nature2.jpg" alt="tree" className={styles.imageSize}/></SwiperSlide>
    </div>
      ...
    </Swiper>
 
    
    </div>
  )
}

export default FadeCarousel