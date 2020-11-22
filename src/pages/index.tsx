import Header from "../components/Header/Landing"
import Footer from "../components/Footer"
import {
  Main,
  SectionInformations,
  SectionPass,
  SectionStartFree,
  SectionTestAvailable,
  SectionTechs,
} from "../styles/Landing"
import { _Button } from "../components/Button/styled"
import colors from "../constants/colors"
import Card from "../components/Card/Landing"

import Head from "next/head"
import Image from "next/image"

export default function Landing(): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Devscore</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Main>
        <section>
          <h1>
            Avalie os seus candidatos de{" "}
            <abbr title="Tecnologia da informação">T.I</abbr>
          </h1>
          <p>
            Envie testes de diversas competência técnicas em apenas 3 passos e
            contrate os seus candidatos sem saber nada de tecnologia.
          </p>
          <_Button bg={colors.blue_hard}>Avaliar candidatos</_Button>
        </section>
        <figure>
          <Image
            src="/images/menAndClock.svg"
            alt="Imagem ilustrativa de um homem olhando para um relógio"
            width={500}
            height={500}
          />
        </figure>
      </Main>
      <SectionInformations>
        <aside>
          <div>
            <Image
              src="/images/icons/arrow-right.svg"
              alt=""
              width={300}
              height={300}
            />
            <p>Tenha uma forma de medir o conhecimento dos seus candidatos.</p>
          </div>
          <div>
            <Image
              src="/images/icons/arrow-right.svg"
              alt=""
              width={300}
              height={300}
            />
            <p>
              Teste candidatos de back-end e front-end em diversos níveis de
              senioridade.
            </p>
          </div>
          <div>
            <Image
              src="/images/icons/arrow-right.svg"
              alt=""
              width={300}
              height={300}
            />
            <p>Diminua o seu risco na hora de contratar.</p>
          </div>
          <div>
            <Image
              src="/images/icons/arrow-right.svg"
              alt=""
              width={300}
              height={300}
            />
            <p>Sem cadastro dos candidatos, sem burocracia.</p>
          </div>
        </aside>
        <figure>
          <Image
            src="/images/menAndComputer.svg"
            alt="Imagem ilustrativa de um homem olhando para 3 computadores"
            width={430}
            height={430}
          />
        </figure>
      </SectionInformations>
      <SectionPass>
        <h2>Apenas 3 passos</h2>
      </SectionPass>
      <SectionStartFree>
        <aside>
          <Image
            src="/images/control-list.svg"
            alt="Imagem ilustrativa de uma lista de controle"
            width={100}
            height={100}
          />
          <span>Cadastre a sua vaga e requisitos</span>
        </aside>
        <aside>
          <Image
            src="/images/mail.svg"
            alt="Imagem ilustrativa de um caixa de email"
            width={100}
            height={100}
          />
          <span>Convide os seus candidatos por email</span>
        </aside>
        <aside>
          <Image
            src="/images/line-graphic.svg"
            alt="Imagem ilustrativa de um gráfico"
            width={100}
            height={100}
          />
          <span>Avalie os resultados</span>
        </aside>
        <div>
          <_Button bg={colors.blue_hard}>Comece gratuitamente</_Button>
        </div>
      </SectionStartFree>
      <SectionTestAvailable>
        <h3>Testes disponíveis</h3>
        <h6>Suporte as principais linguagens do mercado</h6>
      </SectionTestAvailable>

      <SectionTechs>
        <Card
          text="HTML5"
          alt="Hyper Text Markup Language"
          url="/images/icons/html.svg"
        />
        <Card text="Javascript" alt="" url="/images/js.png" />
        <Card
          text="CSS3"
          alt="Cascading Style Sheet"
          url="/images/icons/css.svg"
        />
        <Card
          text="PHP"
          alt="Cascading Style Sheet"
          url="/images/icons/php.svg"
        />
        <Card text="C#" alt="" url="/images/icons/csharp.svg" />
        <Card text="Java" alt="" url="/images/icons/java.svg" />
        <Card text="Python" alt="" url="/images/icons/python.svg" />
      </SectionTechs>
      <Footer />
    </>
  )
}
