import { Aside } from './styled'
import { CardProps } from '../../../interfaces'

export default function Card({ url, alt, text } : CardProps<string>) : JSX.Element {
  return (
      <Aside>
        <img src="../../../../public/images/icons/java.svg" alt={alt} />
        <span>{text}</span>
      </Aside>
  )
}
