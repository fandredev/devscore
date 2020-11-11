import Header from "../components/Header/Landing";
import Footer from '../components/Footer';
import { Formik, Form, Field } from 'formik'
import { schema } from '../helpers/Validation/LoginValidation'
import { _Button } from '../components/Button/styled';
import colors from '../constants/colors'
import Head from 'next/head'

import { Container, Col, Error } from '../styles/Login'

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
                validateOnBlur
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }, 1000);
                }}
              >
                {({ dirty, errors, handleSubmit }) => (
                  <>
                    <form onSubmit={handleSubmit}>
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
                    </form>
                    <aside>
                      <_Button bg={colors.green}>Entrar</_Button>
                      <_Button bg={colors.blue_hard} disabled={!(dirty && errors)}>Cadastre-se</_Button>
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
