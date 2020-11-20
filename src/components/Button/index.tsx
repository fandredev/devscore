import { _Button } from './styled'
import { ButtonProps } from '../../interfaces'

const Button: React.FC<ButtonProps> = ({ children, bg, type, id }: ButtonProps) : JSX.Element => {
  return (
    <_Button bg={bg} id={id} type={type}>{children}</_Button>
  )
}
export default Button
