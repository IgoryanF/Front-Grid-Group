import React from 'react';
import styles from './MainPage.module.scss';
import bigImage from '../../../assets/mainPage/Rectangle56.png';
import smallImage from '../../../assets/mainPage/Rectangle165.png';



const CostAndServices = () => {
    return (
        <section className={styles.projectCost}>
            <h3 className={styles.projectCost__title}>СТОИМОСТЬ ПРОЕКТА</h3>
            <div className={styles.projectCost__container}>
                <div className={styles.projectCost__content}>
                    <div className={styles.projectCost__leftBlock}>
                        <h4>Узнайте стоимость дизайн-проекта, ответив на 3 вопроса</h4>
                        <h5>Пройдите короткий тест, узнайте цену, получите консультацию по будущему проекту</h5>
                        <button>Узнать стоимость</button>
                    </div>
                    <div className={styles.projectCost__rightBlock}>
                        <div className={styles.imageWrapper}>
                            <div>
                                <picture>
                                    <img className={styles.bigImage} src={bigImage} alt={''}/>
                                    <img className={styles.smallImage} src={smallImage} alt={''}/>
                                </picture>
                            </div>
                        </div>
                        <span>Бонусы:</span>
                        <p className={styles.projectCost__text}>чек листы на 5 ошибок в строительстве</p>
                        <p className={styles.projectCost__text}>5 трендов 2021 года на дизайн интерьеров</p>
                    </div>
                </div>
            </div>
            <div className={styles.line}/>

        </section>
    );
};

export default CostAndServices;