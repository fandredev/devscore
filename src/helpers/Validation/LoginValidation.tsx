import * as yup from 'yup'

export const schema = yup.object().shape({
  email: yup.string()
  .required('O campo de email precisa ser preenchido')
  .email('E-mail precisa ser válido'),

  password: yup.string()
  .required('O campo de senha precisa ser preenchido')
  .min(8, 'O campo de senha precisa ter no mínino 8 caracteres')
})
