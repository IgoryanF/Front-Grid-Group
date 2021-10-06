import styled, {css} from "styled-components";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Checkbox, CircularProgress} from "@material-ui/core";
import validationSchema from "../../../utils/validators";
import {Flex} from "../../UI/styledComponents/Styled";
import {LoadingButton} from "@material-ui/lab";
import React, {useEffect, useState} from "react";
import {emailFormApi} from "../../../api/emailFormApi";
import axios from "axios";

const EmailInput = styled.input`
  width: 92%;
  height: calc(100vh / 12.3);
  font-size: 24px;
  padding-left: 30px;
  line-height: calc(100vh / 12.3 - 2px);
  border: 1px solid #000000;
  outline: none;
  transition: all .4s ease;

  ${props => props.isVisitedWithError && css`
    border: 2px solid rgb(244, 67, 54);
  `}
  &::placeholder {
    font-weight: 200;
    font-size: 24px;
    color: #4F4F4F;
  }

  &:focus {
    border: ${props => props.isVisitedWithError ? "2px solid rgb(244, 67, 54)" : "2px solid #000000"};
  }
`;

const StyledErrorMessage = styled.span`
  font-size: 0.85rem;
  margin-left: 32px;
  color: rgb(244, 67, 54);
`;

const StyledEmailInput = ({field, form, ...props}) => {
    return (
        <div style={{paddingBottom: "15px"}}>
            <EmailInput
                type="email"
                {...field}
                {...props}
                isVisitedWithError={form.touched && form.errors[field.name]}
            />
            <ErrorMessage name={field.name} component={StyledErrorMessage}/>
        </div>
    )
}


const StyledCheckbox = styled(Checkbox).attrs({
    size: "22.67px"
})`
  padding: 0 !important;
  margin-right: 6px !important;
  color: #333333;
  border: 0;

  * {
    width: inherit;
    height: inherit;
    margin: 0;
    padding: 0;
  }

  svg {
    width: ${props => props.size};
    height: ${props => props.size};
    path {
      color: #333333;
    }
  }
`;


const StyledCheckboxComponent = ({field, form, ...props}) => {
    return (
        <>
            <label style={{
                display: "flex", color: "#333333", fontWeight: 300, fontSize: "14px", alignItems: "center"
            }}>
                <StyledCheckbox id={field.name} {...field} {...props}/>
                Я согласен на&nbsp;
                <span style={{textDecoration: "underline"}}>
                    обработку персональных данных
                </span>
            </label>
        </>
    )
}


const EmailForm = React.memo(() => {

    const [error, setError] = useState(null);

    const source = axios.CancelToken.source();

    useEffect(() => {
        return () => {
            source.cancel();
        }
    }, [source]);

    return (
        <Formik
            initialValues={{
                email: '',
                acceptedTerms: false
            }}
            onSubmit={ async (values, {setSubmitting}) => {
                setSubmitting(true);
                try {
                    await emailFormApi.sendMessage({email: values.email}, source.token);
                    setSubmitting(false);
                } catch (error) {
                    setError(error)
                }
            }}
            validationSchema={validationSchema.emailSchema}
        >
            {({isSubmitting}) => (
                <Form>
                    <Flex styles={{width: "100%", direction: "column"}} withLoadingButton>
                        <Field
                            name="email"
                            placeholder="Введите ваш E-mail"
                            component={StyledEmailInput}
                        />
                        <Field
                            name="acceptedTerms"
                            component={StyledCheckboxComponent}
                        />
                        <LoadingButton
                            style={{
                                width: "92%", fontWeight: 300, fontSize: "36px", lineHeight: "42px",
                                marginTop: "50px", padding: "20px 0", color: "#F2F2F2", background: "#000000",
                                border: "1px solid #000000", borderRadius: 0,
                            }}
                            loading={isSubmitting}
                            startIcon={isSubmitting ? <CircularProgress color="inherit" size={32}/> : null}
                            variant="outlined"
                            type="submit"
                        >
                            Получить каталог
                        </LoadingButton>
                    </Flex>
                </Form>
            )}
        </Formik>
    )
});

export default EmailForm;