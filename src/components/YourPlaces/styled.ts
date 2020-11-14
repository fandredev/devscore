
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
     @media (min-width: 1000px) and (max-width: 1600px){
      display: flex;
      justify-content: flex-start;
      padding: 0 2rem;
     }
  }
  > h2, figure {
    display: flex;
    justify-content: center;
  }

  > div {
    @media (min-width: 500px) {
      border: 1px solid ${colors.separated_border};
      border-top: none;
      border-bottom: none;
    }
    @media (min-width: 1000px) and (max-width: 1600px){
      padding: 0;
      display: grid;
      grid-template-columns: 20% 1fr;
    }
   > figure {
      @media (min-width: 500px){
        padding: 0 5rem;
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
    > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        @media (max-width: 500px) {
          justify-content: space-around;
          margin: 2rem 0;
        }
        @media (min-width: 1000px) and (max-width: 1600px){
          width: 100%;
          justify-content: space-between;
        }
      > h5 {
        color: rgba(0, 0, 0, 0.87);
        letter-spacing: 0.15px;
        font-size: 1.8rem;
        mix-blend-mode: normal;
        font-family: ${fonts.primary};
         @media (min-width: 1000px) and (max-width: 1600px){
          font-size: 15px;
         }
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
    justify-content: space-between;
    padding: 0 1rem;
   }
   @media (min-width: 800px){
    justify-content: space-between;
    padding: 1rem 1rem 3px 1rem;
   }
  @media (min-width: 1000px) and (max-width: 1600px){
    grid-column: 2/4;
    border: 1px solid #ddd;
    border-top: none;
    border-right: none;
    border-left: none;
  }
  & span:last-child {
    color: ${colors.green};
    letter-spacing: 0.25px;
  }
`