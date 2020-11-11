import styled from 'styled-components'

interface ButtonProps<T, U> {
  bg: T,
  disabled?: U
}

export const _Button = styled.button<ButtonProps<string, boolean>>`
  background: ${props => props.bg && props.bg};
  border-radius: 5px;
  padding: .8rem 1.3rem;
  font-size: 20px;
  border: transparent;
  color: #fff;

  &:hover{
    opacity: .9;
    transition: all 200ms ease-in
  }
`
