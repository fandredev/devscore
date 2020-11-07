import { slide as Menu } from 'react-burger-menu'
import { styles, Container } from './styled'
import { _Button } from '../Button/styled';
import colors from '../../constants/colors'

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
            <li>Início</li>
            <li>Como funciona</li>
            <li>Login</li>
            <li>
              <_Button bg={colors.blue_hard}>Avaliar candidatos</_Button>
            </li>
          </ol>
      </Container>
    </Menu>
  )
}
