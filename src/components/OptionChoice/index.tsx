import { PropsChildren } from '../../interfaces'
import { Container } from './styled'

const OptionChoice: React.FC<PropsChildren> = ({ children }) : JSX.Element => {
  return (
    <Container>
      <aside>{children}</aside>
    </Container>
  )
}

export default OptionChoice
