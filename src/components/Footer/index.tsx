import { _Footer } from './styled'
import { PropsFooter } from '../../interfaces'

const Footer: React.FC<PropsFooter> = ({ id } : PropsFooter) : JSX.Element => {

  return (
   <_Footer id={id}>
    <span>contato@devscore</span>
    <span>DevScore todos os direitos reservados.</span>
   </_Footer>
  )
}


export default Footer
