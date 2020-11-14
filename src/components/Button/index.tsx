import { _Button } from './styled'
import { ReactNode } from 'react'


type TypesButton = 'button' | 'submit'

interface PropsButton {
  children: ReactNode
  disabled?: boolean
  bg: string
  type?: TypesButton
  id?: string
}

export default function Button({ children, bg, type, id }: PropsButton){
  return (
    <_Button bg={bg} id={id} type={type}>{children}</_Button>
  )
}
