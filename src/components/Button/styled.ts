import styled from 'styled-components'

interface ButtonProps<T> {
  bg: T,
}

export const _Button = styled.button<ButtonProps<string>>`
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
  &[id="invite"]{
    margin-top: 20px;
  }
  &[id="updated-profile-edit-profile"] {
    width: 80%;
    max-width: 350px;
  }
  &[id="confirm_question"] {
    width: 50vw;
    max-width: 400px;
    @media (min-width: 1000px) {
      width: 50%;
    }
  }
`
