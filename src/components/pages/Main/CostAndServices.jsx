import React from 'react';
import styles from './MainPage.module.scss'

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
                        <span>Бонусы:</span>
                        <p>чек листы на 5 ошибок в строительстве</p>
                        <p>5 трендов 2021 года на дизайн интерьеров</p>
                    </div>
                </div>
            </div>
            <div className={styles.line}/>
        </section>
    );
};

export default CostAndServices;