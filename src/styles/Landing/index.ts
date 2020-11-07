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
  margin-top: 2rem;
  > section {
      color: ${colors.blue_hard};
      text-align: center;
    > h1 {
      font-family: ${fonts.secondary};
      font-weight: 400;
      font-size: 3rem;
    }
    > p {
      font-family: ${fonts.primary};
      padding: 0 1rem;
      line-height: 3rem;
    }
    > button {
      margin-top: 1rem;
    }
  }

  > figure {
    > img {
      width: 100%;
    }
  }
`
export const SectionInformations = styled.section`
  > div {
    > ol {
      > li {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 2rem;
        padding: 0 1rem;
        margin-top: 3rem;
        color: ${colors.blue_hard};
        > img {
          width: 10px;
        }
        > span {
          margin-left: 1rem;
        }
      }
    }
    > figure {
      > img {
        width: 100%;
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
  > aside {
    ${aside};
    > img {
      width: 30%;
    }
    > span {
      font-weight: 400;
      color: ${colors.blue_hard};
      margin-top: 3rem;
    }
}
  div{
    display: flex;
    justify-content: center;
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
  aside {
   ${aside};
  }
`
