
import styled from 'styled-components'
import fonts from '../../constants/text'
import colors from '../../constants/colors'
import { fullCenter, sideEdgeCardResponsive } from '../../styles/functions'

export const Container = styled.div`
  padding: 2rem;
  @media (min-width: 800px) {
    ${sideEdgeCardResponsive};
    border-left: none;
  }
  > h2 {
    font-family: ${fonts.primary};
    color: ${colors.blue_hard};
    font-weight: bold;
    margin-bottom: 2rem;
    font-size: 2.2rem;

    @media (min-width: 800px){
      font-size: 22px;
    }
  }
  > h2, figure {
    display: flex;
    justify-content: center;
  }
  > figure {
      @media (min-width: 500px){
        padding: 0 4rem;
      }
    > img {
      width: 25%;
    }
  }
`
export const InfoPlaces = styled.aside`
    ${fullCenter};
    line-height: 3rem;
    @media (min-width: 500px){
      align-items: flex-start;
      padding: 1rem 1rem 3px 1rem;
    }
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

  @media (min-width: 500px){
    justify-content: unset;
    padding: 1rem 1rem 3px 1rem;
  }
`