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

  password: yup.string()
  .required('O campo de senha precisa ser preenchido')
  .min(8, 'O campo de senha precisa ter no mínino 8 caracteres'),

  password_confirmation: yup.string()
  .required('O campo de confirmação precisa ser preenchido')
  .oneOf([yup.ref('password')], 'Senhas não se coincidem'),

  terms: yup.boolean().required().oneOf([true], 'Aceite os termos de contrato')
})
