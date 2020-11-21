import { Container } from './styled'
import { _Button } from '../../../Button/styled';
import { ItemsDashHeader } from '../../../../interfaces'
import Logo from '../../../Logo';

const DashListItems: React.FC<ItemsDashHeader<string>> = ({ name = 'Roger' }) : JSX.Element => {
  return (
    <Container>
      <nav>
        <Logo />
        <ol>
          <li>Bem vindo de volta, <strong>{name}</strong></li>
        </ol>
      </nav>
    </Container>
  )
}

export default DashListItems
