import * as yup from 'yup'

export const schema = yup.object().shape({
  email: yup.string()
  .required('O campo de email precisa ser preenchido')
  .email('E-mail precisa ser válido')
})
