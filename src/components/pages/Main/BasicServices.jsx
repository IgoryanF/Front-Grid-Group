import React from 'react';
import styles from "./MainPage.module.scss";
import designImage from "../../../assets/mainPage/3d_design.jpg";
import renovationImage from "../../../assets/mainPage/renovation.jpg";
import constructionImage from "../../../assets/mainPage/construction.jpg";
import landscapeDesignImage from "../../../assets/mainPage/landscape-design.jpg";


const BasicServices = () => {
    return (
        <section className={styles.services}>
            <div>
                <h3 className={styles.services__title}>ОСНОВНЫЕ УСЛУГИ</h3>
            </div>
            <div className={styles.services__container}>
                <div className={styles.services__wrapper}>
                    <div className={styles.services__content}>
                        <div className={styles.services__item}>
                            <div className={styles.services__wrapperImage}>
                                <div>
                                    <picture>
                                        <img className={styles.services__itemImage} src={designImage} alt={''}/>
                                    </picture>
                                </div>
                            </div>
                            <h4 className={styles.services__itemTitle}>3D-дизайн</h4>
                            <p className={styles.services__itemInfo}>
                                Идейные соображения высшего порядка, а также внедрение современных
                                методик обеспечивает актуальность глубокомысленных рассуждений.
                            </p>
                        </div>
                        <div className={styles.services__item}>
                            <div className={styles.services__wrapperImage}>
                                <div>
                                    <picture>
                                        <img className={styles.services__itemImage} src={renovationImage} alt={''}/>
                                    </picture>
                                </div>
                            </div>
                            <h4 className={styles.services__itemTitle}>Ремонт</h4>
                            <p className={styles.services__itemInfo}>
                                Мы вынуждены отталкиваться от того, что глубокий уровень погружения
                                допускает внедрение своевременного выполнения сверхзадачи.
                            </p>
                        </div>
                        <div className={styles.services__item}>
                            <div className={styles.services__wrapperImage}>
                                <div>
                                    <picture>
                                        <img className={styles.services__itemImage} src={constructionImage} alt={''}/>
                                    </picture>
                                </div>
                            </div>
                            <h4 className={styles.services__itemTitle}>Строительство</h4>
                            <p className={styles.services__itemInfo}>
                                Мы вынуждены отталкиваться от того, что глубокий уровень погружения
                                допускает внедрение своевременного выполнения сверхзадачи.
                            </p>
                        </div>
                        <div className={styles.services__item}>
                            <div className={styles.services__wrapperImage}>
                                <div>
                                    <picture>
                                        <img className={styles.services__itemImage} src={landscapeDesignImage} alt={''}/>
                                    </picture>
                                </div>
                            </div>
                            <h4 className={styles.services__itemTitle}>Ландшафтный дизайн</h4>
                            <p className={styles.services__itemInfo}>
                                Идейные соображения высшего порядка обеспечивает актуальность
                                глубокомысленных рассуждений.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.line}/>
        </section>

    );
};

export default BasicServices;