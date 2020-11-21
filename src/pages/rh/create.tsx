import { Field, Formik } from "formik";
import { _Button } from "../../components/Button/styled";
import Footer from "../../components/Footer";
import Header from "../../components/Header/DashRh";
import { Col,Error } from "../../styles/Form";
import { FormikCreateVacancyProps } from '../../interfaces'

import { schema } from '../../helpers/Validation/CreateVacancyValidation'
import Title from "../../components/Title";
import TechnologiesVacancy from "../../components/TechnologiesVacancy";
import colors from "../../constants/colors";

export default function CreateVacancy(): JSX.Element{
  return (
    <>
      <Header />
     <Formik
          initialValues={{ vacancy_name: '', level: '', date: '' }}
          validationSchema={schema}
          validateOnBlur
          onSubmit={(values: FormikCreateVacancyProps) => {
          }}
              >
                {({ handleSubmit }) => (
                  <>
                  <main>
                      <form onSubmit={handleSubmit}>
                        <Title>Dados Gerais</Title>
                        <Col>
                          <label htmlFor="vacancy_name">Nome da vaga</label>
                          <Field name="vacancy_name" placeholder="Desenvolvedor Back-End Júnior" type="text" />
                          <Error name="vacancy_name" component="span" />
                        </Col>
                      <Col>
                          <label htmlFor="level">Selecione a senioridade</label>
                          <Field name="level" type="text" />
                          <Error name="level" component="span" />
                        </Col>
                      <Col>
                          <label htmlFor="date">Data máxima para realizar o teste</label>
                          <Field name="date" placeholder="20/10/2020" type="date" />
                          <Error name="date" component="span" />
                        </Col>
                      </form>
                  </main>
                  <section>
                    <Title>Linguagem</Title>
                    <span>Selecione até 4</span>

                    <Title>Front-End</Title>
                    <TechnologiesVacancy image={''} tech='HTML5' />
                    <Title>Back-End</Title>
                    <TechnologiesVacancy image='' tech='HTML5'/>
                  </section>
                  <section>
                    <_Button bg={colors.green}>Cadastrar</_Button>
                  </section>
                  </>
                )}
            </Formik>
            <Footer />
    </>
  )
}
