import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, EffectFade} from 'swiper';
import 'swiper/swiper.scss';
import "swiper/components/effect-fade/effect-fade.scss";
import './swiper.scss';

SwiperCore.use([Autoplay, EffectFade]);

const Carousel = ({ images }) => {
    return (
        <Swiper
            spaceBetween={0}
            effect={'fade'}
            loop={true}
            autoplay={{
                "delay": 3000,
                "disableOnInteraction": false
            }}
            className="swiper-container"
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