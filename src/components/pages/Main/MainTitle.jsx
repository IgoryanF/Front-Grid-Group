import React, {useContext} from 'react';
import styles from './MainPage.module.scss';
import {NavLink} from 'react-router-dom';
import CarouselContainer from "../../UI/swiper/CarouselContainer";
import {NavbarActiveContext} from "../../../context/navbarActiveContext";

const MainTitle = () => {

    const { isModalActive, setIsModalActive } = useContext(NavbarActiveContext);

    return (
        <>
            <section className={styles.mainTop}>
                <div className={styles.mainTop__titleContent}>
                    <div>
                        <span className={isModalActive
                            ? styles.mainTop__title + ' ' + styles.hidden : styles.mainTop__title}
                        >
                            Лучшее для лучших
                        </span>
                    </div>
                    <div className={styles.mainTop__links}>
                        <NavLink to="/projects" className={isModalActive
                            ? styles.linkHidden : null}
                        >
                            Проекты
                        </NavLink>
                        <NavLink to="/calculator" className={isModalActive
                            ? styles.linkHidden : null}
                        >
                            Рассчитать стоимость
                        </NavLink>
                    </div>
                </div>
                <CarouselContainer/>
            </section>

            <section className={styles.description}>
                <div className={styles.container}>
                    <div className={styles.description__content}>
                        <div className={styles.description__item}>
                            <span className={styles.description__title}>100+</span>
                            <span className={styles.description__subtitle}>Реализованные проекты</span>
                            <p className={styles.description__info}>
                                Работаем с любой недвижимостью – от дворцов до квартир
                            </p>
                        </div>
                        <div className={styles.description__item}>
                            <span className={styles.description__title}>10 лет</span>
                            <span className={styles.description__subtitle}>Безупречная репутация</span>
                            <p className={styles.description__info}>
                                Наши специалисты постоянно стажируются у лидеров строительных работ
                            </p>
                        </div>
                        <div className={styles.description__item}>
                            <span className={styles.description__title}>3 года</span>
                            <span className={styles.description__subtitle}>Гарантии на все работы</span>
                            <p className={styles.description__info}>
                                Мы внимательно изучаем рынок отделочных материалов и инновационной техники

                            </p>
                        </div>
                        <div className={styles.description__item}>
                            <span className={styles.description__title}>Сроки</span>
                            <span className={styles.description__subtitle}>Процесс</span>
                            <p className={styles.description__info}>
                                Нужно лучшее – закажи это у лучших!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainTitle;