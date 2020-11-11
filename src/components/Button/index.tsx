import { _Button } from './styled'
import { ReactNode } from 'react'


type TypesButton = 'button' | 'submit'

interface PropsButton {
  children: ReactNode
  disabled?: boolean
  bg: string
  type?: TypesButton
}

export default function Button({ children, bg, type }: PropsButton){
  return (
    <_Button bg={bg} type={type}>{children}</_Button>
  )
}
