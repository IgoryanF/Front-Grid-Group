import React, {useEffect, useRef, useState} from 'react';
import styles from './callMeModal.module.scss';
import {TextField} from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import {Form, Formik, useField} from 'formik'
import {Flex} from "../styledComponents/Styled";
import styled from "styled-components";
import validationSchema from "../../../utils/validators";


const CallMeModal = React.memo(({active, changeCallModalStatus}) => {

    return (
        <div
            className={active ? styles.modal + ' ' + styles.active : styles.modal}
            onClick={() => changeCallModalStatus()}
        >
            <div
                className={styles.modal__content}
                onClick={(e) => e.stopPropagation()}
            >
                <button type="button" className={styles.modal__closeButton}
                        onClick={() => changeCallModalStatus()}
                />
                <h5 className={styles.modal__title}>Обратный звонок</h5>
                <CallMeForm active={active}/>
            </div>
        </div>
    )
})


const StyledNameField = styled(TextField)`

  label {
    margin-left: 20px;
    font-weight: normal;
    font-size: 24px;
    line-height: ${({inputProps: {value}}) => value !== '' ? "1em" : null};
  }

  > :nth-child(2) {
    background: transparent;

    &.Mui-focused {
      background: white;
    }
  }

  div {
    padding: 5px 0;
  }

  legend {
    width: 92px;
  }

  .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    line-height: 1em;
  }

  fieldset {
    padding: 0 0 0 28px;
  }

  input {
    margin-left: 20px;
    font-weight: normal;
    font-size: 24px;
    height: 1em;
  }

  > p {
    margin-left: 35px !important;
  }
`;

const NameField = React.forwardRef(({label, ...props}, ref) => {

    const [field, meta] = useField(props);

    return (
        <StyledNameField
            fullWidth
            label={label}
            inputProps={{...field, ...props}}
            inputRef={ref}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
        />
    )
})


const PhoneField = React.memo(({specialLabel, country, ...props}) => {

    const [inputClassContainer, setInputClassContainer] = useState('');

    const [value, setValue] = useState('');

    const [field, meta, helpers] = useField(props);

    const [error, setError] = useState();

    const ref = useRef();


    useEffect(() => {
        helpers.setValue(value)
    }, [value]);

    useEffect(() => {
        setError(ref.current)
    }, [ref.current]);


    const validField = (inputNumber, country, countries) => {

        const replaceCountryFormat =country.format.split('')
            .filter(element => element === '.');

        if (meta.touched) {
            if (inputNumber.length !== replaceCountryFormat.length) {
                ref.current = "Некоректный номер телефона"
                return error
            }
            else {
                ref.current = undefined;
            }
        }
    }


    return (
        <>
            <PhoneInput
                value={value}
                onChange={value => setValue(value)}
                specialLabel={specialLabel}
                country={country}
                inputProps={{...props}}
                inputClass={styles.modal__inputPhone}
                containerClass={inputClassContainer === 'focusedInput'
                    ? styles.modal__inputContainer + "  " + styles.modal__focusedInputContainer
                    : styles.modal__inputContainer}
                onFocus={() => setInputClassContainer('focusedInput')}
                onBlur={() => {
                    setInputClassContainer('');
                    helpers.setTouched(true);
                }}
                isValid={validField}
            />
        </>
    )
})

const CallMeForm = React.memo(({active}) => {

    const ref = useRef();

    useEffect(() => {
        if (active) {
            setTimeout(() => ref.current.focus(), 10)
        }
    }, [active])

    return (
        <Formik
            initialValues={{
                firstName: '',
                phoneNumber: ''
            }}
            validationSchema={validationSchema.callMeSchema}
            onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(true);
                setTimeout(() => {
                    console.log(values);
                    setSubmitting(false);
                }, 4000);
            }}>
            {({isSubmitting}) => (
                <Form style={{width: "57%"}}>
                    <Flex styles={{
                        width: "100%", direction: "column", alignItems: "center"
                    }}>
                        <NameField
                            name="firstName"
                            type="text"
                            ref={ref}
                            label={"Ваше имя"}
                            variant="outlined"
                        />
                        <PhoneField
                            name="phoneNumber"
                            specialLabel={"Номер телефона"}
                            country={"ua"}
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={styles.modal__button}
                        >Позвонить мне
                        </button>
                    </Flex>
                </Form>
            )}
        </Formik>
    )
})

export default CallMeModal;