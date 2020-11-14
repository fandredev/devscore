import { _Button } from './styled'
import { ButtonProps } from '../../interfaces'

export default function Button({ children, bg, type, id }: ButtonProps) : JSX.Element{
  return (
    <_Button bg={bg} id={id} type={type}>{children}</_Button>
  )
}
