import Header from "../../components/Header/Landing"
import Footer from "../../components/Footer"
import { Formik, Field } from "formik"
import {
  schemaEditProfile,
  schemaAlterPassword,
} from "../../helpers/Validation/EditProfileValidation"
import { _Button } from "../../components/Button/styled"
import Title from "../../components/Title"
import colors from "../../constants/colors"
import Head from "next/head"

import { Col, Error } from "../../styles/Form"
import { Container } from "../../styles/EditProfile"
import { FormikEditProfile, FormikForgotPasswordValues } from "../../interfaces"

import InputMask from "react-input-mask"

import Image from "next/image"

export default function EditProfile(): JSX.Element {
  return (
    <>
      <Head>
        <title>Editar Perfil</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Container>
        <Formik
          initialValues={{ name: "", company_name: "", email: "", phone: "" }}
          validationSchema={schemaEditProfile}
          validateOnBlur
          onSubmit={(values: FormikForgotPasswordValues<string>) => {}}
        >
          {({ handleSubmit, values, handleChange }) => (
            <>
              <form id="edit-profile" onSubmit={handleSubmit}>
                <Title id="edit-profile-title">Editar Perfil</Title>
                <section>
                  <Col>
                    <label htmlFor="name">Seu nome</label>
                    <Field name="name" type="text" autoComplete="hidden" />
                    <Error name="name" component="span" />
                  </Col>
                  <Col>
                    <label htmlFor="company_name">Nome da empresa</label>
                    <Field
                      name="company_name"
                      type="text"
                      autoComplete="hidden"
                    />
                    <Error name="company_name" component="span" />
                  </Col>
                  <Col>
                    <label htmlFor="email">Email</label>
                    <Field
                      name="email"
                      placeholder="John.snow@gmail.com"
                      type="email"
                      autoComplete="hidden"
                    />
                    <Error name="email" component="span" />
                  </Col>
                  <Col>
                    <label htmlFor="phone">Telefone</label>
                    <InputMask
                      mask="(99) 999999999"
                      maskChar={null}
                      value={values.phone}
                      name="phone"
                      placeholder="(11) 945723696"
                      autoComplete="hidden"
                      onChange={e => handleChange(e)}
                    />
                    <Error name="phone" component="span" />
                  </Col>
                </section>
                <section id="items-edit-profile">
                  <span>Logo da empresa</span>
                  <div>&nbsp;</div>
                  <span>Alterar logo</span>
                  <_Button id="updated-profile-edit-profile" bg={colors.green}>
                    Atualizar Perfil
                  </_Button>
                </section>
              </form>
            </>
          )}
        </Formik>
        <Formik
          initialValues={{
            password_now: "",
            password: "",
            confirm_password: "",
          }}
          validationSchema={schemaAlterPassword}
          validateOnBlur
          onSubmit={(values: FormikEditProfile) => {}}
        >
          {({ handleSubmit }) => (
            <form id="alter-password" onSubmit={handleSubmit}>
              <Title>Alterar senha</Title>
              <Col>
                <label htmlFor="password_now">Senha atual</label>
                <Field
                  name="password_now"
                  type="password"
                  placeholder="******"
                />
                <Error name="password_now" component="span" />
              </Col>
              <Col>
                <label htmlFor="password">Senha</label>
                <Field name="password" type="password" placeholder="******" />
                <Error name="password" component="span" />
              </Col>
              <Col>
                <label htmlFor="confirm_password"> Confirmar senha</label>
                <Field
                  name="confirm_password"
                  type="password"
                  placeholder="******"
                />
                <Error name="confirm_password" component="span" />
              </Col>
              <div id="sec-button">
                <_Button id="updated-profile-edit-profile" bg={colors.green}>
                  Atualizar Senha
                </_Button>
                <Image
                  src="/images/womanAndComputer.svg"
                  alt="Mulher olhando para um computador"
                  height={500}
                  width={500}
                />
              </div>
            </form>
          )}
        </Formik>
      </Container>
      <Footer />
    </>
  )
}
