import yup from 'yup'


export const schema = yup.object().shape({
  candidate_name: 
  yup.string().required('O nome do candidato é requirido')
  .min(5, 'O campo precisa ter no mínino 5 caracteres'),

  candidate_email: yup.string().required('O email do candicato é requirido')
  .min(5, 'O campo precisa ter no mínino 5 caracteres')
  .email('O email precisa ser válido')

})