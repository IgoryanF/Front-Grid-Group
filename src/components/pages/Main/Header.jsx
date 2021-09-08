import React from 'react';
import NavBar from "../../UI/navbar/NavBar";
import styles from './header.module.scss'

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <NavBar/>
            </div>
        </header>
    );
};

export default Header;