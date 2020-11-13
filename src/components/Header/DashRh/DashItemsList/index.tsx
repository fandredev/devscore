import { Container, Figure, Navigate } from './styled'
import { _Button } from '../../../Button/styled';
import Link from 'next/link'
import { useRouter } from 'next/router'

interface IntDashListItems {
  name: string
}
export default function DashListItems({ name = 'Renata' }: IntDashListItems){
  const router = useRouter()
  const navigateToLanding = () => router.push('/')
  return (
    <Container>
      <nav>
        <Figure>
          <img
            src="/images/devscore.svg"
            alt="Devscore"
            onClick={navigateToLanding}
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
