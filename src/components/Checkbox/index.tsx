import React from 'react'
import { Container } from './styled'
import { CheckboxProps } from '../../interfaces'

const Checkbox : React.FC<CheckboxProps> = ({ checked = false, number = 0 }) => {
  return (
    <Container>
      <input type="radio" defaultChecked={checked}/>
      &nbsp;<span>{number}</span>
    </Container>
  )
}

export default Checkbox
