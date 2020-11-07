import Image from 'next/image'
import { Container, Figure } from './styled'

export default function Header(){
  return (
    <>
      <Container>
        <Figure>
          <img
            src="/images/devscore.svg"
            alt="Devscore"
          />
        </Figure>
        <ol>
          <li>Início</li>
          <li>Como funciona</li>
          <li>Login</li>
          <li>
            <button>Avaliar candidatos</button>
          </li>
        </ol>
      </Container>
    </>
  )
}
