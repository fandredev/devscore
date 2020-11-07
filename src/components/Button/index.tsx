import { _Button } from './styled'
import { ReactNode } from 'react'

interface PropsButton<T> {
  children: T,
  bg: string
}

export default function Button({ children, bg }: PropsButton<ReactNode>){
  return (
    <_Button bg={bg}>{children}</_Button>
  )
}
