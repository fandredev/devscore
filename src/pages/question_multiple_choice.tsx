import Footer from "../components/Footer";
import Header from "../components/Header/Auth";
import Title from "../components/Title";
import colors from "../constants/colors";

import _Button from '../components/Button'

import menEyeTheCode from '../../public/images/menEyeTheCode.svg'

import { Container } from '../styles/QuestionMultipleChoices'
import OptionChoice from "../components/OptionChoice";
import Head from "next/head";

import { mappedMultiChoices } from '../helpers/Screens'

export default function QuestionMultipleChoice() : JSX.Element{
  return (
    <>
    <Head>
      <title>Pergunta Múltipla Escolha</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
      <Container>
        <section>
          <Title id="time-resting">Tempo restante: 1min32s</Title>
          <div></div>
        </section>
        <section>
          <Title id="question_now">2. <abbr title="Hyper Text Markup Language">HTML</abbr> é uma linguagem de programação. Essa afirmação é:</Title>
          {mappedMultiChoices.map(({ value }, index: number) =>
          <OptionChoice key={index}>{value === true ? 'Verdadeira': 'Falsa'}</OptionChoice>)}
          <_Button bg={colors.green} id="confirm_question">Confirmar</_Button>
        </section>
        <section>
          <Title id="number_of_questions">1 de 15 questões</Title>
          <figure>
            <img src={menEyeTheCode} alt="Homem olhando uma tela de perguntas" />
          </figure>
        </section>
      </Container>
    <Footer />
    </>
  )
}
