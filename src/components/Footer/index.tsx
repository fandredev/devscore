import { _Footer } from './styled'

interface PropsFooter {
  id?: string
}

export default function Footer({ id } : PropsFooter){
  return (
   <_Footer id={id}>
    <span>contato@devscore</span>
    <span>DevScore todos os direitos reservados.</span>
   </_Footer>
  )
}
