import React from 'react';
import styles from '../pages/MainPage.module.scss';
import {NavLink} from 'react-router-dom';
import CarouselContainer from "./UI/swiper/CarouselContainer";

const MainTitle = () => {

    return (
        <div className={styles.mainTop}>
            <div className={styles.mainTop__titleContent}>
                <div>
                    <span className={styles.mainTop__title}>Лучшее для лучших</span>
                </div>
                <div className={styles.mainTop__links}>
                    <NavLink to="/projects">Проекты</NavLink>
                    <NavLink to="/calculator">Рассчитать стоимость</NavLink>
                </div>
            </div>
            <CarouselContainer/>
        </div>
    );
};

export default MainTitle;