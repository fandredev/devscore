import { Container, Figure, Navigate } from './styled'
import { _Button } from '../../../Button/styled';
import colors from '../../../../constants/colors';
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function ItemsList(){
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
             <Link href="/"><Navigate>Início</Navigate></Link>
          </li>
          <li>Como funciona</li>
            <li>
              <Link href="/login"><Navigate>Login</Navigate></Link>
            </li>
          <li>
            <_Button bg={colors.blue_hard}>Avaliar candidatos</_Button></li>
        </ol>
      </nav>
    </Container>
  )
}
