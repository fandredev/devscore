import { Container, Navigate } from './styled'
import { _Button } from '../../../Button/styled';
import colors from '../../../../constants/colors';
import Link from 'next/link'
import Logo from '../../../Logo';

export default function ItemsList() : JSX.Element {
  return (
    <Container>
      <nav>
       <Logo />
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
