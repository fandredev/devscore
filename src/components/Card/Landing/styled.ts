import styled from 'styled-components'
import colors from '../../../constants/colors'
import fonts from '../../../constants/text'
import { fullCenter } from '../../../styles/functions'

export const Aside = styled.aside`
    ${fullCenter};
    margin: 5rem auto;
    padding: 0 2rem;
    @media (min-width: 700px) {
      margin: 0;
    }
    > img {
      width: 30%;
      @media (min-width: 700px) {
        width: 100%;
       }
    }
    > span {
      font-weight: 400;
      color: ${colors.blue_hard};
      margin-top: 2rem;
      font-family: ${fonts.secondary};

      @media (min-width: 700px) {
        margin: 0;
      }
    }

    > div button{
      display: flex;
      justify-content: center;
    }
`
