import Header from "../components/Header/Landing";
import Footer from '../components/Footer';
import { Formik, Field } from 'formik'
import { schema } from '../helpers/Validation/RegisterValidation'
import { _Button } from '../components/Button/styled';
import colors from '../constants/colors'
import Head from 'next/head'
import Link from 'next/link'

import { Container, Col, Error, Navigate } from '../styles/Form'

interface FormikValues {
  name: string
  company_name: string
  email: string
  password: string
  confirm_password: string
  terms: boolean
}

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
                validateOnChange
                onSubmit={(values: FormikValues) => console.log(values)}
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
                        <label htmlFor="password_confirmation">Confirmar senha</label>
                        <Field name="password_confirmation" placeholder="*******" type="password" />
                        <Error name="password_confirmation" component="span" />
                      </Col>
                      <Col id="checkbox-register">
                        <span>concordo com os termos de uso e políticas de privacidade</span>
                        <input type="checkbox"
                          name="terms"
                          id="terms"
                          onClick={() => setFieldValue('terms', !values.terms)}
                          defaultChecked={values.terms}
                          onChange={handleChange}
                          />
                        <Error name="terms" component="span" />
                      </Col>
                    </form>
                    <aside>
                      <_Button bg={colors.green} disabled={!(dirty && errors)} type="submit">Cadastrar</_Button>
                      <_Button bg={colors.blue_hard}>
                        <Link href="/login">
                          <Navigate>Voltar para o login</Navigate>
                        </Link>
                      </_Button>
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
