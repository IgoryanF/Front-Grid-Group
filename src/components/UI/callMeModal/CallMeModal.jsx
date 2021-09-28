import React, {useEffect, useRef, useState} from 'react';
import styles from './callMeModal.module.scss';
import {TextField} from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'

const CallMeModal = (props) => {

    const ref = useRef();
    const [inputClassContainer, setInputClassContainer] = useState('');

    useEffect(() => {
        if (props.active) {
            setTimeout(() => ref.current.focus(), 10)
        }
    }, [props.active])

    const changeField = (e) => {
        props.changeCallMeName(e.target.value);
    }

    return (
        <div
            className={props.active ? styles.modal + ' ' + styles.active : styles.modal}
            onClick={() => props.changeCallModalStatus()}
        >
            <div
                className={styles.modal__content}
                onClick={(e) => e.stopPropagation()}
            >
                <button type="button" className={styles.modal__closeButton}
                        onClick={() => props.changeCallModalStatus()}
                />
                <h5 className={styles.modal__title}>Обратный звонок</h5>
                <form className={styles.modal__form}>
                    <TextField
                        label={"Ваше имя"}
                        inputRef={ref}
                        variant="outlined"
                        value={props.name}
                        onChange={changeField}
                    />
                    <PhoneInput
                        country={"ua"}
                        value={props.telephoneNumber}
                        onChange={value => { props.changeCallMePhoneNumber(value) }}
                        inputClass={styles.modal__inputPhone}
                        specialLabel={"Номер телефона"}
                        containerClass={inputClassContainer === 'focusedInput'
                            ? styles.modal__focusedInputContainer : ''}
                        onFocus={() => setInputClassContainer('focusedInput')}
                        onBlur={() => setInputClassContainer('')}
                    />
                    <button
                        className={styles.modal__button}
                    >Позвонить мне
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CallMeModal;