import { Container, Figure } from './styled'
import { _Button } from '../../../Button/styled';
import colors from '../../../../constants/colors';

export default function ItemsList(){
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
          <li>Início</li>
          <li>Como funciona</li>
          <li>Login</li>
          <li>
            <_Button bg={colors.blue_hard}>Avaliar candidatos</_Button>        </li>
        </ol>
      </nav>
    </Container>
  )
}
