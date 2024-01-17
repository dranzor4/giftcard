import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import ProductDetailCard from "../Cards/ProductDetailCard";
import { cardData1 } from "../../utils/constants/constants";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/effect-fade";

const ImageCarousel = (props) => {
  const { cardData, animationDelay } = props;
  return (
    <div className="carouselContainer">
      <Swiper
        spaceBetween={50}
        slidesPerView={3.5}
        rewind={true}
        onSlideChange={() => {}}
        freeMode={true}
        effect={"fade"}
        modules={[FreeMode]}
        speed={800}
        // autoplay={{
        //   delay: animationDelay,
        //   // disableOnInteraction: false,
        // }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        <div className="carousel">
          {cardData1.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="cardParentContainer">
                  <div className="imageContainer">
                    <ProductDetailCard cardData={data} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
