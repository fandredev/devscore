import { Container, Navigate } from './styled'
import { _Button } from '../../../Button/styled';
import Link from 'next/link'
import { ItemsDashHeader } from '../../../../interfaces'
import Logo from '../../../Logo';

const DashListItems: React.FC<ItemsDashHeader<string>> = ({ name = 'Renata' }) : JSX.Element => {
  return (
    <Container>
      <nav>
       <Logo />
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
export default DashListItems
