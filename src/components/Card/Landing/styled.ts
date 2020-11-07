import styled from 'styled-components'
import colors from '../../../constants/colors'
import fonts from '../../../constants/text'
import { fullCenter } from '../../../styles/functions'

export const Aside = styled.aside`
    ${fullCenter};
    margin: 5rem auto;
    padding: 0 2rem;
    > img {
      width: 30%;
    }
    > span {
      font-weight: 400;
      color: ${colors.blue_hard};
      margin-top: 2rem;
      font-family: ${fonts.secondary};
    }

    > div button{
      display: flex;
      justify-content: center;
    }
`
