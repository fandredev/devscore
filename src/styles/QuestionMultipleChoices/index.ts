import styled from 'styled-components'
import { fullCenter } from '../functions'

export const Container = styled.main`
  ${fullCenter};
  text-align: center;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 100vh;
    align-items: start;
  }

  > section {
      width: 100%;
    &:first-child {
      ${fullCenter};
      > div {
        width: 80%;
        height: 150px;
        background: #ddd;
        max-width: 320px;
      }
    }
    &:nth-of-type(2) {
      @media (min-width: 1000px) {
        padding: 0;
      }
      padding: 0 2rem;
        ${fullCenter};

    }
    &:last-child {
      margin-top: 3rem;
       @media (min-width: 1000px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: column;
        height: 100%;
        margin: initial;
       }
    }
  }
`
