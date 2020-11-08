import { slide as Menu } from 'react-burger-menu'
import { styles, Container, Navigate } from './styled'
import { _Button } from '../Button/styled';
import colors from '../../constants/colors'
import Link from 'next/link'

export default function BurgerMenu() {
  return (
    <Menu styles={styles}>
      <Container>
          <figure>
            <img
              src="/images/devscore.svg"
              alt="Devscore"
            />
          </figure>
          <ol>
            <li>
               <Link href="/"><Navigate>Início</Navigate></Link>
            </li>
            <li>Como funciona</li>
            <li>
              <Link href="/login"><Navigate>Login</Navigate></Link>
            </li>
            <li>
              <_Button bg={colors.blue_hard}>Avaliar candidatos</_Button>
            </li>
          </ol>
      </Container>
    </Menu>
  )
}
