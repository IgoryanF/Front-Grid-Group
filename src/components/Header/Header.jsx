import React, {useEffect, useRef} from 'react';
import NavBar from "../UI/navbar/NavBar";
import styles from './header.module.scss'
import {useLocation} from "react-router-dom";

const Header = () => {

    const location = useLocation();

    return (
        <header className={location.pathname === "/main"
            ? styles.header + ' ' + styles.transparent : styles.header}>
            <div className={styles.header__container}>
                <NavBar/>
            </div>
        </header>
    );
};

export default Header;