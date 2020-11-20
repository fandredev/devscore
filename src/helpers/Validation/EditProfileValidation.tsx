import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup.string()
  .required('O campo de nome precisa ser preenchido')
  .min(3, 'O campo pode ter no mínino 3 caracteres')
  .trim(),

  company_name: yup.string()
  .required('O campo de empresa precisa ser preenchido')
  .trim(),

  email: yup.string()
  .required('O campo de email precisa ser preenchido')
  .email('E-mail precisa ser válido'),

  phone: yup.string().required('O campo de telefone precisa ser preenchido')
})