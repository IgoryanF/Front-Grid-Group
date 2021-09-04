import React from 'react';
import imgOne from '../../../assets/mainPage/1corusel.jpg'
import imgTwo from '../../../assets/mainPage/2corusel.jpg'
import imgThree from '../../../assets/mainPage/3corusel.jpg'
import Carousel from "./Carousel";

const CarouselContainer = () => {

    const images = [imgOne, imgTwo, imgThree];

    return (
        <Carousel images={images}/>
    );
};

export default CarouselContainer;