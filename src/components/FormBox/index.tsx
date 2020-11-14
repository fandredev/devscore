import { Formik, Field } from 'formik'
import { schema } from '../../helpers/Validation/InviteDashRhValidation'
import Button from '../../components/Button'
import colors from '../../constants/colors'

import { Container } from './styled'
import { Error, Col } from '../../styles/Form'

export default function FormBox() : JSX.Element {

  return (
    <Container>
      <h2>Convidar</h2>
      <section>
        <span>Selecione a vaga</span>
        <span>3 vagas</span>
      </section>
        <hr />
      <Formik initialValues={{
        candidate_name: '',
        candidate_email: ''
      }}
      validationSchema={schema}
      onSubmit={values => console.log(values)}
      >
          {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Col>
            <label htmlFor="candidate_name">Nome do candidato</label>
             <Field name="candidate_name" type="text" />
             <Error name="candidate_name" component="span" />
          </Col>
          <Col>
            <label htmlFor="candidate_email">Email do candidato</label>
            <Field name="candidate_email" type="text" />
            <Error name="candidate_email" component="span" />
          </Col>
          <Button id="invite" bg={colors.green}>Convidar</Button>
        </form>
          )}
      </Formik>
    </Container>
  )
}