import * as yup from 'yup'

export const schemaEditProfile = yup.object().shape({
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

export const schemaAlterPassword = yup.object().shape({
  password_now: yup.string().notRequired(),
  password: yup.string().required('O campo de senha ser preenchido')
  .min(8, 'O campo de senha ter no mínino 8 caracteres')
  .notOneOf([yup.ref('password_now'), ''], 'A senha precisa ser diferente da senha atual.'),


  confirm_password: yup.string().required('O campo de confirmação ser preenchido')
  .min(8, 'O campo de confirmação ter no mínino 8 caracteres')
  .oneOf([yup.ref('password'), ''], 'As senhas não se coincidem.')
  .notOneOf([yup.ref('password_now'), ''], 'A senha precisa ser diferente da senha atual.')
})
