import React from 'react';
import styles from '../pages/MainPage.module.scss';
import {NavLink} from 'react-router-dom';
import CarouselContainer from "./UI/swiper/CarouselContainer";

const MainTitle = ({images}) => {

    return (
        <div className={styles.mainTitle}>
            {/*<div>*/}
            {/*    <span className={styles.mainTitle__title}>Лучшее для лучших</span>*/}
            {/*</div>*/}
            {/*<div className={styles.mainTitle__links}>*/}
            {/*    <NavLink to="/projects">Проекты</NavLink>*/}
            {/*    <NavLink to="/calculator">Рассчитать стоимость</NavLink>*/}
            {/*</div>*/}
            <CarouselContainer/>
        </div>
    );
};

export default MainTitle;