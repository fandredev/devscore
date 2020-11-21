import type { Children } from '../../types'
import { Container } from './styled'

const OptionChoice: React.FC<Children> = ({ children }) : JSX.Element => {
  return (
    <Container>
      <aside>{children}</aside>
    </Container>
  )
}

export default OptionChoice
