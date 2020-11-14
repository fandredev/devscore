import styled, { css } from 'styled-components'
import colors from '../../constants/colors'
import fonts from '../../constants/text'
import { fullCenter } from '../../styles/functions'

const aside = css`
    ${fullCenter};
    margin: 5rem auto;
    padding: 0 2rem;
`

export const Main = styled.main`
  background: ${colors.orange};
  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: 60% 1fr;
    grid-template-rows: 68vh;
    padding: 0 4rem;
  }
  @media (min-width: 1300px) and (max-width: 1600px) {
    grid-template-rows: 60vh;
  }
  > section {
      color: ${colors.blue_hard};
      text-align: center;
      align-self: center;
       @media (min-width: 500px) {
        text-align: left;
       }
       @media (min-width: 1000px) {
        text-align: left;
       }
    > h1 {
      font-family: ${fonts.secondary};
      font-weight: 400;
      font-size: 3rem;
      @media (min-width: 1000px) and (max-width: 1199px) {
        font-size: 3.5rem;
      }
      @media (min-width: 1200px) and (max-width: 1600px) {
        font-size: 4.3rem;
      }
    }
    > p {
      font-family: ${fonts.primary};
      padding: 0 1rem;
      line-height: 3rem;
      @media (min-width: 700px) {
        padding: 0;
       }
      @media (min-width: 1000px) {
        width: 72%;
        line-height: 2.6rem;
      }
      @media (min-width: 1200px) and (max-width: 1600px) {
        line-height: 3.6rem;
        font-size: large;
      }
    }
    > button {
      margin-top: 1rem;
       @media (min-width: 1000px) {
        width: 46%;
       }
    }
  }

  > figure {
        align-self: self-end;
    > img {
      width: 100%;
    }
  }
`
export const SectionInformations = styled.section`
    padding: 1rem;
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
    > aside {
      div {
        display: flex;
        margin: 2rem 0;
        > img {
          width: 10px;
        }

        > p {
          padding: 0 2rem;
          color: ${colors.blue_hard};
          font-size: 1.3rem;
          @media (min-width: 700px) {
            padding: 1rem;
            font-size: 1.4rem;
          }
          @media (min-width: 1200px) and (max-width: 1600px) {
            font-size: 2rem;
          }
        }
      }
    }
    > figure {
      order: -1;
      > img {
        width: 100%;
        @media (min-width: 700px) {
          height: 100%;
        }
      }
    }

`
export const SectionPass = styled.section`
  background: ${colors.blue_hard};
  color: #fff;
  padding: 2rem 0;
  > h2 {
    font-size: 3rem;
    font-family: ${fonts.secondary};
    text-align: center;
    font-weight: 400;
  }
`
export const SectionStartFree = styled.section`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr)
  }
  > aside {
    ${aside};
    > img {
      width: 30%;
    }
    > span {
      font-weight: 400;
      color: ${colors.blue_hard};
      margin-top: 3rem;
      @media (min-width: 700px) {
        text-align: center;
      }
      @media (min-width: 800px) and (max-width: 1199px){
        padding: 0 3rem;
      }
      @media (min-width: 1200px) and (max-width: 1600px) {
        font-size: 2rem;
        padding: 0 9rem;
      }
      &:first-child {
        @media (min-width: 700px) {
          padding: 0 3rem;
        }
      }
    }
}
  div{
    display: flex;
    justify-content: center;
     @media (min-width: 700px) {
      grid-column: 1/4
     }
  }
`
export const SectionTestAvailable = styled.section`
    color: ${colors.blue_hard};
    background: ${colors.orange};
    font-weight: 0;
    font-family: ${fonts.secondary};
    text-align: center;
    margin: 3rem 0;
    padding: 1rem 0;
     @media (min-width: 1200px) and (max-width: 1600px) {
      height: max-content;
      display: grid;
     }
  > h3 {
    font-weight: 400;
    font-size: 3rem;
  }
  > h6 {
    font-weight: 400;
    font-size: 2rem;
  }
`
export const SectionTechs = styled.section`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  aside {
   ${aside};
  }
`
