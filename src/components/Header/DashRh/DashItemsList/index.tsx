import { Container, Figure, Navigate } from './styled'
import { _Button } from '../../../Button/styled';
import Link from 'next/link'

interface IntDashListItems {
  name: string
}
export default function DashListItems({ name = 'Renata' }: IntDashListItems){
  return (
    <Container>
      <nav>
        <Figure>
          <img
            src="/images/devscore.svg"
            alt="Devscore"
          />
        </Figure>
        <ol>
          <li>
            Dashboard
          </li>
          <li>Editar perfil</li>
            <li>
              Bem vindo(a) de volta, <strong>{name}</strong>
            </li>
         <li>
            <Link href="/"><Navigate>Sair</Navigate></Link>
        </li>
        </ol>
      </nav>
    </Container>
  )
}
