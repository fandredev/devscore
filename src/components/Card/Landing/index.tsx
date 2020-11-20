import { Aside } from './styled'
import { CardProps } from '../../../interfaces'

const Card: React.FC<CardProps<string>> = ({ alt, text }) : JSX.Element =>{
  return (
      <Aside>
        <img src="../../../../public/images/icons/java.svg" alt={alt} />
        <span>{text}</span>
      </Aside>
  )
}

export default Card
