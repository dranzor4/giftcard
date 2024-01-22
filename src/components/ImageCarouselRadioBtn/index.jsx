import React, { useState } from 'react'
import "./ImageCarouselRadioBtn.css"
import { Swiper, SwiperSlide } from "swiper/react";

const ImageCarouselRadioBtn = ({selectedImage, onChange}) => {

    const images = [
        "/Images/amazon-card.png",
        "/Images/amazon-card.png",
        "/Images/amazon-card.png",
        "/Images/amazon-card.png",
        "/Images/amazon-card.png",
        "/Images/amazon-card.png",
        "/Images/amazon-card.png",
        // Add more image URLs as needed
    ];


    return (
        <Swiper
        slidesPerGroupSkip={2.5}
            spaceBetween={10}
            loop={true}
        >

            {
                images.map((image, index) => {
                    return (
                            <SwiperSlide key={image + "_"+ index}>
                                <label className={` img-carousel-btn ${selectedImage === index ? "selected" : ""}`}>
                                    <input
                                        type="radio"
                                        name="imageSelector"
                                        value={index}
                                        checked={selectedImage === index}
                                        onChange={() => onChange(index)}
                                        id={image}
                                    />
                                    <img className='d-n' src={images[selectedImage]} alt={""} />
                                </label>
                            </SwiperSlide>

                    )
                })
            }

        </Swiper>
    );
}

export default ImageCarouselRadioBtn