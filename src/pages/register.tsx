import Header from "../components/Header/Landing";
import Footer from '../components/Footer';
import { Formik, Field } from 'formik'
import { schema } from '../helpers/Validation/RegisterValidation'
import { _Button } from '../components/Button/styled';
import colors from '../constants/colors'
import Head from 'next/head'

import { Container, Col, Error } from '../styles/Form'

export default function Register(): JSX.Element {
  return (
    <>
    <Head>
      <title>Register</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Header />
        <Container>
          <section>
              <span>Vamos lá?</span>
              <h2>Digite os seus dados</h2>
              <Formik
                initialValues={{
                  name: '',
                  company_name: '',
                  email: '',
                  password: '',
                  confirm_password: '',
                  terms: false
                }}
                validationSchema={schema}
                validateOnBlur
                onSubmit={(values) => console.log(values)}
              >
                {({ dirty, errors, handleSubmit, setFieldValue, values, handleChange }) => (
                  <>
                    <form onSubmit={handleSubmit}>
                      <Col>
                        <label htmlFor="name">Nome</label>
                        <Field name="name" type="name" />
                        <Error name="name" component="span" />
                      </Col>
                      <Col>
                        <label htmlFor="company_name">Nome da empresa</label>
                        <Field name="company_name" placeholder="*******" type="text" />
                        <Error name="company_name" component="span" />
                      </Col>
                      <Col>
                        <label htmlFor="email">Email</label>
                        <Field name="email" placeholder="John.snow@gmail.com" type="email" />
                        <Error name="email" component="span" />
                      </Col>
                      <Col>
                        <label htmlFor="password">Senha</label>
                        <Field name="password" placeholder="*******" type="password" />
                        <Error name="password" component="span" />
                      </Col>
                      <Col>
                        <label htmlFor="confirm_password">Confirmar senha</label>
                        <Field name="confirm_password" placeholder="*******" type="password" />
                        <Error name="confirm_password" component="span" />
                      </Col>
                      <Col>
                        <span>concordo com os termos de uso e políticas de privacidade</span>
                        <input type="checkbox"
                          name="terms"
                          id="terms"
                          onClick={() => setFieldValue('terms', !values.terms)}
                          defaultChecked={values.terms}
                          onChange={handleChange}
                          />
                        <Error name="confirm_password" component="span" />
                      </Col>
                    </form>
                    <aside>
                      <_Button bg={colors.green} disabled={!(dirty && errors)}>Cadastrar</_Button>
                      <_Button bg={colors.blue_hard}>Voltar para o login</_Button>
                    </aside>
                  </>
                )}
            </Formik>
          </section>
        </Container>
      <Footer />
    </>
  )
}
