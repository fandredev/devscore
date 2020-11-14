import { Formik, Form, Field } from 'formik'
import { schema } from '../../helpers/Validation/InviteDashRhValidation'
import Button from '../../components/Button'
import colors from '../../constants/colors'

export default function FormBox(){

  return (
    <>
      <h3>Convidar</h3>
      <span>Selecione a vaga</span>
      <hr />
      <span>3 vagas</span>
      <Formik initialValues={{
        candidate_name: '',
        candidate_email: ''
      }}
      validationSchema={schema}
      onSubmit={values => console.log(values)}
      >
        <Form translate>
          <Field name="candidate_name" />
          <Field name="candidate_email" />
          <Button bg={colors.green}>Convidar</Button>
        </Form>

      </Formik>
    </>
  )
}