import Header from '../components/Header/Landing'
import Footer from '../components/Footer';
import { Main, SectionInformations, SectionPass, SectionStartFree, SectionTestAvailable, SectionTechs } from '../styles/Landing'
import { _Button } from '../components/Button/styled';
import colors from '../constants/colors'
import Card from '../components/Card/Landing/index';

export default function Landing() {
  return (
    <>
    <Header />
    <Main>
      <section>
        <h1>Avalie os seus candidatos de <abbr title="Tecnologia da informação">T.I</abbr></h1>
        <p>Envie testes de diversas competência técnicas em apenas 3 passos e contrate os seus candidatos sem saber nada de tecnologia.</p>
        <_Button bg={colors.blue_hard}>Avaliar candidatos</_Button>
      </section>
      <figure>
        <img src="/images/menAndClock.svg" alt="Imagem ilustrativa de um homem olhando para um relógio" />
      </figure>
    </Main>
    <SectionInformations>
      <aside>
          <div>
            <img src="/images/icons/arrow-right.svg" alt="" />
            <p>Tenha uma forma de medir o conhecimento dos seus candidatos.</p>
          </div>
          <div>
            <img src="/images/icons/arrow-right.svg" alt="" />
            <p>Teste candidatos de back-end e front-end em diversos níveis de senioridade.</p>
          </div>
          <div>
            <img src="/images/icons/arrow-right.svg" alt="" />
            <p>Diminua o seu risco na hora de contratar.</p>
          </div>
          <div>
            <img src="/images/icons/arrow-right.svg" alt="" />
            <p>Sem cadastro dos candidatos, sem burocracia.</p>
          </div>
      </aside>
        <figure>
          <img src="/images/menAndComputer.svg"  alt="Imagem ilustrativa de um homem olhando para 3 computadores" />
        </figure>
    </SectionInformations>
    <SectionPass>
      <h2>Apenas 3 passos</h2>
    </SectionPass>
    <SectionStartFree>
      <aside>
        <img src="/images/control-list.svg" alt="Imagem ilustrativa de uma lista de controle"/>
        <span>Cadastre a sua vaga e requisitos</span>
      </aside>
      <aside>
        <img src="/images/mail.svg" alt="Imagem ilustrativa de um caixa de email"/>
        <span>Convide os seus candidatos por email</span>
      </aside>
      <aside>
        <img src="/images/line-graphic.svg" alt="Imagem ilustrativa de um gráfico"/>
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
      <Card text="HTML5" alt="Hyper Text Markup Language" url="/images/icons/html.svg" />
      <Card text="Javascript" url="/images/js.png" />
      <Card text="CSS3" alt="Cascading Style Sheet" url="/images/icons/css.svg" />
      <Card text="PHP" alt="Cascading Style Sheet" url="/images/icons/php.svg" />
      <Card text="C#" url="images/icons/csharp.svg" />
      <Card text="Java" url="images/icons/java.svg" />
      <Card text="Python" url="images/icons/python.svg" />
    </SectionTechs>
    <Footer />
    </>
  )
}
