import React from "react";
import { cardData } from "../../utils/constants/constants";
import { Card } from "../Cards/Card";
import { Link } from "react-router-dom";
import  "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/effect-fade";

const Carousel = (props) => {
  const { name, animationDelay} = props;
  return (
    <div className="carouselContainer">
      <div className="carouselHeader">
        <div className="carouselDeal">{name}</div>
        <div className="carouselViewAll">View all</div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3.5}
        rewind={true}
        onSlideChange={() => {}}
        // onSwiper={(swiper) => console.log(swiper)}
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
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          960:{
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        <div className="carousel">
          {cardData.map((data, index) => (
            <SwiperSlide key={index}>
              {" "}
              <Link
                to={`/productDetail/${data.id}`}
                className="cardNavigation"
              >
                <div className="cardParentContainer">
                <Card data={data} index={index} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
