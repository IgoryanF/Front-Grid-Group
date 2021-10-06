import React from 'react';
import {
    Container,
    Flex,
    Image,
    ImageWrapper,
    Section,
    SectionTitle,
    TitleH4,
    TitleH5
} from "../../UI/styledComponents/Styled";
import styled from "styled-components";
import image from "../../../assets/mainPage/getCatalogImg.jpg"
import EmailForm from "./EmailForm";


const LeftPart = styled.div`
  width: 55%;
  margin-top: 25px;
  margin-right: 100px;
`;

const RightPart = styled.div`
  width: calc(100% - 55% - 100px);
`;

const GetCatalogToEmail = React.memo(() => {
    return (
        <Section marginBottom="80px">
            <SectionTitle top={"127%"} style={{margin: "80px 0 30px"}}>
                ПОЛУЧИТЕ КАТАЛОГ <br/> НАШИХ ПРОЕКТОВ
            </SectionTitle>
            <Container styles={{maxWidth: "93.75%"}}>
                <Flex styles={{width: "100%"}}>
                    <LeftPart>
                        <ImageWrapper paddingBottom="66.7%">
                            <Image src={image}/>
                        </ImageWrapper>
                    </LeftPart>
                    <RightPart>
                        <Flex styles={{width: "100%", direction: "column"}}>
                            <TitleH4>
                                Оставьте ваш E-mail, чтобы <br/> получить каталог наших <br/> проектов
                            </TitleH4>
                            <TitleH5 styles={{color: "#4F4F4F", margin: "40px 0 calc(100vh / 12.56)"}}>
                                Каталог поможет вам выбрать стиль <br/> и продумать планировку квартиры
                            </TitleH5>
                            <EmailForm/>
                        </Flex>
                    </RightPart>
                </Flex>
            </Container>
        </Section>
    );
});


// const EmailInput = styled.input`
//   width: 92%;
//   height: calc(100vh / 12.3);
//   font-size: 24px;
//   padding-left: 30px;
//   line-height: calc(100vh / 12.3 - 2px);
//   border: 1px solid #000000;
//   outline: none;
//   transition: all .4s ease;
//
//   ${props => props.isVisitedWithError && css`
//     border: 2px solid rgb(244, 67, 54);
//   `}
//   &::placeholder {
//     font-weight: 200;
//     font-size: 24px;
//     color: #4F4F4F;
//   }
//
//   &:focus {
//     border: ${props => props.isVisitedWithError ? "2px solid rgb(244, 67, 54)" : "2px solid #000000"};
//   }
// `;
//
// const StyledErrorMessage = styled.span`
//   font-size: 0.85rem;
//   margin-left: 32px;
//   color: rgb(244, 67, 54);
// `;
//
// const StyledEmailInput = ({field, form, ...props}) => {
//     return (
//         <div style={{paddingBottom: "15px"}}>
//             <EmailInput
//                 type="email"
//                 {...field}
//                 {...props}
//                 isVisitedWithError={form.touched && form.errors[field.name]}
//             />
//             <ErrorMessage name={field.name} component={StyledErrorMessage}/>
//         </div>
//     )
// }
//
//
// const StyledCheckbox = styled(Checkbox).attrs({
//     size: "22.67px"
// })`
//   width: ${props => props.size};
//   height: ${props => props.size};
//   margin-right: 6px;
//   color: #333333;
//   border: 0;
//
//   * {
//     width: inherit;
//     height: inherit;
//     margin: 0;
//     padding: 0;
//   }
//
//   svg {
//     path {
//       color: #333333;
//     }
//   }
// `;
//
//
// const StyledCheckboxComponent = ({field, form, ...props}) => {
//     return (
//         <>
//             <label style={{
//                 display: "flex", color: "#333333", fontWeight: 300, fontSize: "14px", alignItems: "center"
//             }}>
//                 <StyledCheckbox id={field.name} {...field} {...props}/>
//                 Я согласен на&nbsp;
//                 <span style={{textDecoration: "underline"}}>
//                     обработку персональных данных
//                 </span>
//             </label>
//         </>
//     )
// }
//
//
// const EmailForm = () => {
//
//     const submitEmail = (values) => {
//         console.log(values);
//     }
//     return (
//         <Formik
//             initialValues={{
//                 email: '',
//                 acceptedTerms: false
//             }}
//             onSubmit={(values, {setSubmitting}) => {
//                 setSubmitting(true);
//                 setTimeout(() => {
//                     submitEmail(values);
//                     setSubmitting(false);
//                 }, 3000)
//             }}
//             validationSchema={validationSchema.emailSchema}
//         >
//             {({isSubmitting}) => (
//                 <Form>
//                     <Flex styles={{width: "100%", direction: "column"}} withLoadingButton>
//                         <Field
//                             name="email"
//                             placeholder="Введите ваш E-mail"
//                             component={StyledEmailInput}
//                         />
//                         <Field
//                             name="acceptedTerms"
//                             component={StyledCheckboxComponent}
//                         />
//                         <LoadingButton
//                             style={{
//                                 width: "92%", fontWeight: 300, fontSize: "36px", lineHeight: "42px",
//                                 marginTop: "50px", padding: "20px 0", color: "#F2F2F2", background: "#000000",
//                                 border: "1px solid #000000", borderRadius: 0,
//                             }}
//                             loading={isSubmitting}
//                             startIcon={isSubmitting ? <CircularProgress color="inherit" size={32}/> : null}
//                             variant="outlined"
//                             type="submit"
//                         >
//                             Получить каталог
//                         </LoadingButton>
//                     </Flex>
//                 </Form>
//             )}
//         </Formik>
//     )
// }

export default GetCatalogToEmail;