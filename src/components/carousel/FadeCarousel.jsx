import React from "react";
import "./Carousel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,EffectFade,Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const FadeCarousel = () => {
  return (
    <div className="FadeCarouselContainer">
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      rewind={true}
      effect={'fade'}
      pagination={{
        dynamicBullets: true,
      }}
      speed={1000}
      modules={[Autoplay,EffectFade,Pagination]}
      autoplay={{
        delay: 4000,
        // disableOnInteraction: false,
      }}
      loop={true}
    >
      <div className="car" >
      <SwiperSlide><img src="./images/banner1.png" alt="nature" className="imageSize"/></SwiperSlide>
      <SwiperSlide><img src="./images/banner2.png" alt="tree" className="imageSize"/></SwiperSlide>
    </div>
    </Swiper>
 
    
    </div>
  )
}

export default FadeCarousel