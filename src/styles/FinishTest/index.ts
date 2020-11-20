import styled from 'styled-components'
import {fullCenter} from '../../styles/functions'
import colors from '../../constants/colors'

export const Container = styled.main`
> section {
  ${fullCenter};
  text-align: center;
  margin: 2rem auto;

  &:first-child {
    > span {
      color: ${colors.easy_text};
      &:first-child {
        font-weight: 900;
      }
    }
  }
  &:last-child {
    display: block;
    @media (min-width: 768px) {
      padding: 0 13rem;
      text-align: left;
    }
    > h5 {
      @media (min-width: 768px) {
       margin:2rem auto;
      }
    }
    > aside {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  > p {
    color: ${colors.easy_text};
    line-height: 3rem;
  }
    > figure {
      > img {
        width: 100%;
        max-width: 400px;
      }
    }
    > h5 {
      font-size: 1.8rem;
      font-weight: normal;
    }
}
`
