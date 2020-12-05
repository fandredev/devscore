import * as yup from "yup"

export const schema = yup.object().shape({
  candidate_name: yup
    .string()
    .required("O campo de nome precisa ser preenchido")
    .min(3, "O campo pode ter no mínino 3 caracteres")
    .trim(),

  candidate_email: yup
    .string()
    .required("O campo de email precisa ser preenchido")
    .email("O e-mail precisa ser válido")
    .trim(),
})
