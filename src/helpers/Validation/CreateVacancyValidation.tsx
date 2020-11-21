import * as yup from 'yup'

export const schema = yup.object().shape({
  vacancy_name: yup.string()
  .required('O campo da vaga precisa ser preenchido')
  .min(6, 'O campo deve ter no mínino 6 caracteres')
  .trim(),

  level: yup.string()
    .required('O campo de empresa precisa ser preenchido')
    .trim()
    .oneOf(['Júnior','Pleno','Sênior']),

  date: yup.date()
  .required('O campo de email precisa ser preenchido')

})
