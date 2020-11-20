import Header from "../components/Header/Landing";
import Footer from '../components/Footer';
import { Formik, Field } from 'formik'
import { schema } from '../helpers/Validation/ForgotPasswordValidation'
import { _Button } from '../components/Button/styled';
import colors from '../constants/colors'
import Head from 'next/head'

import { Col, Error } from '../styles/Form'
import { Container } from '../styles/EditProfile'
import { FormikForgotPassword } from '../interfaces' 
import FormBox from "../components/FormBox";

export default function ForgotPassword(): JSX.Element {
  return (
    <>
    <Head>
      <title>Editar Perfil</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>

      <Header />
          <span id="edit-profile-span">Editar Perfil</span>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={schema}
            validateOnBlur
            onSubmit={(values: FormikForgotPassword<string>) => {
            }}
          >
            {({ handleSubmit }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <Col>
                    <label htmlFor="name">Seu nome</label>
                    <Field name="name" type="text" />
                    <Error name="name" component="span" />
                  </Col>
                   <Col>
                    <label htmlFor="company_name">Nome da empresa</label>
                    <Field name="company_name" type="text" />
                    <Error name="company_name" component="span" />
                  </Col>
                   <Col>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <Error name="email" component="span" />
                  </Col>
                   <Col>
                    <label htmlFor="phone">Telefone</label>
                    <Field name="phone" type="text" />
                    <Error name="phone" component="span" />
                  </Col>
                <section id="items-edit-profile">
                  <span>Logo da empresa</span>
                  <div>&nbsp;</div>
                  <span>Alterar logo</span>
                  <_Button bg={colors.green}>Atualizar Perfil</_Button>
                </section>
                </form>
              </>
            )}
        </Formik>
      <Footer id='forgot_password'/>
    </Container>
    </>
  )
}
