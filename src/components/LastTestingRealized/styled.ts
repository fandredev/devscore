import styled from "styled-components"
import fonts from "../../constants/text"
import colors from "../../constants/colors"
import { fullCenter, sideEdgeCardResponsive } from "../../styles/functions"
export const SectionTest = styled.section`
  > div {
    line-height: 3rem;
    &:last-child {
      border-bottom: 1px solid #ddd;
      border-top: none;
    }
    > figure {
      margin-top: 3rem;
    }
    > aside {
      > h3 {
        color: #000;
      }
      > p {
        > span {
          color: ${colors.red};
        }
      }
      color: ${colors.gray};
    }
  }
`
export const InfoPlaces = styled.aside`
  ${fullCenter};
  line-height: 3rem;
  @media (min-width: 500px) {
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

  @media (min-width: 500px) {
    justify-content: unset;
    padding: 1rem 1rem 3px 1rem;
  }
`
