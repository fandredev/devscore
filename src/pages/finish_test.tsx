import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header/Landing'
import meter from '../../public/images/scoreMeter.png'

import { Container } from '../styles/FinishTest'
import Title from '../components/Title'
import Checkbox from '../components/Checkbox'

import { mappedFourExperiences } from '../helpers/Screens'

export default function FinishTest() : JSX.Element {
  return (
    <>
    <Header />
      <Container>
        <section>
          <Title>Você finalizou o teste</Title>
          <p>Não se preocupe o seu resultado já foi enviado para a empresa</p>
          <span><strong>Seu score é </strong></span>
          <span>730/1000</span>
        </section>
        <section>
          <figure>
            <img src={meter} alt="Imagem ilustrativa de um medidor de score"/>
          </figure>
        </section>
        <section>
          <h5>Como foi sua experiência?</h5>
          <aside>
            {mappedFourExperiences.map(({ checked }, index: number) => (
              <Checkbox key={index + 1} number={index + 1} checked={checked} />
            ))}
          </aside>
        </section>
      </Container>
    <Footer />
    </>
  )
}
