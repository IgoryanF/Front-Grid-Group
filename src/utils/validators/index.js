import * as Yup from 'yup'

const validationSchema = {
    emailSchema: Yup.object({
        email: Yup.string().email('Некорректный адрес электронной почты').required('Не должно быть пустым')
    }),
    callMeSchema: Yup.object({
        firstName: Yup.string()
            .matches(/^[A-Za-zА-ЯЁа-яё]+$/, "Только буквы")
            .required('Не должно быть пустым')
            .min(2, "Имя должно содержать не менее 2 символов")
            .max(15, "Имя не должно превышать 15 символов")
    })
}

export default validationSchema;