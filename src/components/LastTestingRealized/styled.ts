
import styled from 'styled-components'
import fonts from '../../constants/text'
import colors from '../../constants/colors'
import { fullCenter } from '../../styles/functions'
export const Container = styled.div`
  padding: 2rem;
  > h2 {
    font-family: ${fonts.primary};
    color: ${colors.blue_hard};
    font-weight: bold;
    margin-bottom: 2rem;
  }
  > h2, figure {
    display: flex;
    justify-content: center;
  }
  > figure {
    > img {
      width: 25%;
    }
  }
`
export const InfoPlaces = styled.aside`
    ${fullCenter};
    line-height: 3rem;
    > h5 {
      color: rgba(0, 0, 0, 0.87);
      letter-spacing: 0.15px;
      font-size: 1.8rem;
      mix-blend-mode: normal;
      font-family: ${fonts.primary};
    }
    > span {
      color: rgba(0, 0, 0, 0.6);
      display: block;

      &:first-child {
        color: red;
      }
    }
`

export const InfoDates = styled.aside`
  display: flex;
  justify-content: space-around;
  color: rgba(0, 0, 0, 0.6);
  mix-blend-mode: normal;
`