
import styled from 'styled-components'
import fonts from '../../constants/text'
import colors from '../../constants/colors'
import { fullCenter, sideEdgeCardResponsive } from '../../styles/functions'

export const Container = styled.div`
  padding: 2rem 0;
  @media (min-width: 800px) {
    ${sideEdgeCardResponsive};
  }

  > h2 {
    font-family: ${fonts.primary};
    color: ${colors.blue_hard};
    font-weight: bold;
    margin-bottom: 2rem;

    @media (min-width: 800px){
      font-size: 22px
    }
  }
  > h2, figure {
    display: flex;
    justify-content: center;
  }

  > figure {
    @media (min-width: 500px){
      padding: 0 5rem;
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
    > div {
      @media (max-width: 800px){
        display: flex;
      }
      > h5 {
        color: rgba(0, 0, 0, 0.87);
        letter-spacing: 0.15px;
        font-size: 1.8rem;
        mix-blend-mode: normal;
        font-family: ${fonts.primary};
      }
      > span{
        color: rgba(0, 0, 0, 0.6);
        display: block;
      }
    }
    > span {
      color: rgba(0, 0, 0, 0.6);
      display: block;
    }
`

export const InfoFooterCard = styled.aside`
  display: flex;
  justify-content: space-around;
  color: rgba(0, 0, 0, 0.6);
  mix-blend-mode: normal;

   @media (min-width: 500px){
    justify-content: space-evenly;
   }
   @media (min-width: 800px){
    justify-content: space-between;
    padding: 1rem 1rem 3px 1rem;
   }
  & span:last-child {
    color: ${colors.green};
    letter-spacing: 0.25px;
  }
`