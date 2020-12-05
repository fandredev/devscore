import Footer from "../../components/Footer"
import Header from "../../components/Header/Landing"
import { Formik, Field } from "formik"

import { Main, TableSection } from "../../styles/rh/dash_vacancy"

import { FormikInviteVacancy } from "../../interfaces"
import Title from "../../components/Title"
import _Button from "../../components/Button"

import { schema } from "../../helpers/Validation/DashboardVacancyValidation"
import { Col, Error } from "../../styles/Form"
import colors from "../../constants/colors"

export default function Vacancy() {
  return (
    <>
      <Header />
      <Main>
        <Title id="title-vacancy-dash">Convidar</Title>
        <Formik
          initialValues={{ candidate_name: "", candidate_email: "" }}
          validationSchema={schema}
          validateOnBlur
          onSubmit={(values: FormikInviteVacancy) => {}}
        >
          {({ handleSubmit }) => (
            <>
              <Col id="dash-vacancy-rh">
                <label htmlFor="candidate_name">Nome do candidato</label>
                <Field name="candidate_name" type="text" />
                <Error name="candidate_name" component="span" />
              </Col>
              <Col id="dash-vacancy-rh">
                <label htmlFor="candidate_email">E-mail do candidato</label>
                <Field name="candidate_email" type="email" />
                <Error name="candidate_email" component="span" />
              </Col>
              <aside id="center-button">
                <_Button bg={colors.green}>Convidar</_Button>
              </aside>
              <section id="details-vacancy-dash">
                <Title id="title-vacancy-dash">Detalhes da vaga</Title>
                <div>
                  <h5>Nome</h5>
                  <span>
                    Desenvolvedor Java <abbr title="Júnior">JR</abbr>
                  </span>
                </div>
                <div>
                  <h5>Nível de senioridade</h5>
                  <span>Júnior</span>
                </div>
                <div>
                  <h5>Data máxima para realizar o teste</h5>
                  <span>20/10/2020</span>
                </div>
                <div>
                  <h5>Linguagens</h5>
                  <aside>
                    <p>Java</p>
                    <p>
                      <abbr title="Hyper Text Markup Language">html</abbr>5
                    </p>
                    <p>
                      <abbr title="Cascading Style Sheet">css</abbr>3
                    </p>
                  </aside>
                </div>
                <div>
                  <h5>Score mais alto</h5>
                  <span>Felipe Oliveira - 932/1000</span>
                </div>
                <div>
                  <h5>Usuários que ainda não realizaram o teste</h5>
                  <span>Felipe Oliveira - felipe@gmail.com</span>
                  <span>Felipe Oliveira - felipe@gmail.com</span>
                </div>
              </section>
            </>
          )}
        </Formik>
      </Main>
      <TableSection>
        <Title>Convites Enviados</Title>
        <table>
          <tr>
            <td>
              <span>Gustavo Britto</span>
              <p>gustavo.britto@gmail.com</p>
            </td>
            <td>
              <span>Data de realização</span>
              <p>17/10/2020</p>
            </td>
            <td>
              <span>Status</span>
              <p>Realizado</p>
            </td>
            <td>
              <span>Score</span>
              <p>920/1000</p>
            </td>
            <td>
              <span>Fotos: </span>
              <p>Ver</p>
            </td>
          </tr>
        </table>
      </TableSection>
      <Footer />
    </>
  )
}
