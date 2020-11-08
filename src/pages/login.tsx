import Header from "../components/Header/Landing";
import Footer from '../components/Footer';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { schema } from '../helpers/Validation/LoginValidation'
import { _Button } from '../components/Button/styled';
import colors from '../constants/colors'
import Head from 'next/head'

import { Container, Col } from '../styles/Login'

export default function Login(): JSX.Element {
  return (
    <>
    <Head>
      <title>Login</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Header />
        <Container>
          <section>
              <span>Bem vindo!</span>
              <h2>Entrar na sua conta</h2>
              <Formik
                initialValues={{ email: '', password: ''}}
                validationSchema={schema}
                onSubmit={values => console.log(values)}
              >
                {({  }) => (
                  <>
                    <Form translate>
                      <Col>
                        <label htmlFor="email">Email</label>
                        <Field name="email" placeholder="John.snow@gmail.com" type="email" />
                        <ErrorMessage name="email" component="span" style={{color: colors.red}} />
                      </Col>
                      <Col>
                        <label htmlFor="password">Senha</label>
                        <Field name="password" placeholder="*******" type="password" />
                        <ErrorMessage name="password" component="span" style={{color: colors.red}} />
                      </Col>
                    </Form>
                    <aside>
                      <_Button bg={colors.green} type="submit">Entrar</_Button>
                      <_Button bg={colors.blue_hard}>Cadastre-se</_Button>
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
