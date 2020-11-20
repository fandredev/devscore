
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
  > div {
      @media (min-width: 1000px) and (max-width: 1600px){
        display: grid;
        grid-template-columns: 15% 1fr;
        align-items: center;
      }
    > figure {
        @media (min-width: 500px){
          padding: 0 4rem;
        }
         @media (min-width: 1000px) and (max-width: 1600px){
          padding: 0;
         }
      > img {
        width: 25%;
          @media (min-width: 1000px) and (max-width: 1600px){
            width: 100%;
          }
      }
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
      color: ${colors.opacity_black};
      display: block;

      &:first-child {
        color: red;
      }
    }
    > div {
      @media (min-width: 500px) {
        width: 100%;
        justify-content: space-around;
      }
      > h5 { 
        @media (min-width: 500px) {
          font-weight: 400;
          font-size: 2rem;
        }
      }
      > span {
        color: rgba(0, 0, 0, 0.6);
        mix-blend-mode: normal;
      }
    }
`

export const InfoVacancy = styled.aside`
  display: flex;
  justify-content: space-around;
  color: ${colors.opacity_black};
  mix-blend-mode: normal;

  @media (min-width: 500px){
    justify-content: unset;
    padding: 1rem 1rem 3px 1rem;
  }
`