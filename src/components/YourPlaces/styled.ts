
import styled from 'styled-components'
import fonts from '../../constants/text'
import colors from '../../constants/colors'
import { fullCenter } from '../../styles/functions'
export const Container = styled.div`

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
    }
`

export const InfoDates = styled.aside`
  display: flex;
  justify-content: space-around;
  color: rgba(0, 0, 0, 0.6);
  mix-blend-mode: normal;

  & span:last-child {
    color: ${colors.green};
    letter-spacing: 0.25px;
  }
`