import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, EffectFade} from 'swiper';
import 'swiper/swiper.min.css';
import "swiper/components/effect-fade/effect-fade.min.css";

SwiperCore.use([Autoplay, EffectFade]);

const Carousel = ({ images }) => {
    return (
        <Swiper
            effect={'fade'}
            loop={true}
            centeredSlides={true}
            autoplay={{
                "delay": 3000,
                "disableOnInteraction": false
            }}
            className="mySwiper"
        >
            {images.map(image =>
                <SwiperSlide key={image}>
                    <img src={image} alt=""/>
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default Carousel;