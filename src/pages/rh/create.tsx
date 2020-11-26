import { Field, Formik } from "formik"
import { _Button } from "../../components/Button/styled"
import Footer from "../../components/Footer"
import Header from "../../components/Header/DashRh"
import { Col, Error } from "../../styles/Form"
import { FormikCreateVacancyProps } from "../../interfaces"
import {
  Container,
  SectionTechnogies,
  SectionRegister,
  ItemsTitle,
} from "../../styles/rh/CreateVacancy"

import { schema } from "../../helpers/Validation/CreateVacancyValidation"
import Title from "../../components/Title"
import TechnologiesVacancy from "../../components/TechnologiesVacancy"
import colors from "../../constants/colors"
import { populatedTechsFront, populatedTechsBack } from "../../helpers/Screens"

export default function CreateVacancy(): JSX.Element {
  return (
    <>
      <Header />
      <Formik
        initialValues={{ vacancy_name: "", level: "", date: "" }}
        validationSchema={schema}
        validateOnBlur
        onSubmit={(values: FormikCreateVacancyProps) => {}}
      >
        {({ handleSubmit }) => (
          <>
            <Container>
              <form onSubmit={handleSubmit}>
                <Title>Dados Gerais</Title>
                <div>
                  <Col id="input-rh-create">
                    <label htmlFor="vacancy_name">Nome da vaga</label>
                    <Field
                      name="vacancy_name"
                      placeholder="Desenvolvedor Back-End Júnior"
                      type="text"
                    />
                    <Error name="vacancy_name" component="span" />
                  </Col>
                  <Col id="input-rh-create">
                    <label htmlFor="level">Selecione a senioridade</label>
                    <Field name="level" type="text" />
                    <Error name="level" component="span" />
                  </Col>
                  <Col id="input-rh-create">
                    <label htmlFor="date">Data máxima</label>
                    <Field name="date" placeholder="20/10/2020" type="date" />
                    <Error name="date" component="span" />
                  </Col>
                </div>
              </form>
            </Container>
            <ItemsTitle>
              <Title>Linguagem</Title>
              <span>Selecione até 4</span>
              <h2 id="rh-register-title">Front-End</h2>
            </ItemsTitle>
            <SectionTechnogies>
              {populatedTechsFront.map(({ image, tech }, index: number) => (
                <TechnologiesVacancy key={index} image={image} tech={tech} />
              ))}
            </SectionTechnogies>
            <ItemsTitle>
              <h2 id="rh-register-title">Back-End</h2>
            </ItemsTitle>
            <SectionTechnogies>
              {populatedTechsBack.map(({ image, tech }, index: number) => (
                <TechnologiesVacancy key={index} image={image} tech={tech} />
              ))}
            </SectionTechnogies>
            <SectionRegister>
              <_Button bg={colors.green}>Cadastrar</_Button>
            </SectionRegister>
          </>
        )}
      </Formik>
      <Footer />
    </>
  )
}
