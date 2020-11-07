import styled from 'styled-components'
import fonts from '../../constants/text'
import colors from '../../constants/colors'
import { fullCenter } from '../../styles/functions'

export const _Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 1rem;
  background-color: ${colors.blue_hard};

  @media (max-width: 800px) {
    ${fullCenter};
    text-align: center;
  }

  > span {
    color: #fff;
    font-weight: 400;
    font-size: 2rem;
    font-family: ${fonts.secondary};
    &:last-child {
      justify-self: flex-end;
    }
  }
`
