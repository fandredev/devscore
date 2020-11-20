import styled from 'styled-components'
import { fullCenter } from '../../styles/functions'

import colors from '../../constants/colors'

export const Container = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 60% 1fr;
    margin-top: 3rem;
  }
  > form {
    padding: 2rem;

    &[id="edit-profile"] {
      @media (min-width: 1000px) {
        order: -3;
        padding: 0 2rem;
      }
      section {
        @media (min-width: 1000px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
      }
    }
    &[id="alter-password"] {
      padding: 0 2rem
    }
    @media (min-width: 700px) {
      padding: 0 15rem;
    }
    @media (min-width: 1000px) {
      padding: 0
    }
  > div[id="sec-button"] {
      display: flex;
      justify-content: center;
      flex-flow: column wrap;
      align-items: center;
      margin: 2rem 0;
      > img {
        width: 100%;
        max-width: 450px
      }
    }
  }
  > form section[id="items-edit-profile"] {
    ${fullCenter};
    padding: 2rem 0;

    > div {
      background: #ddd;
      height: 50px;
      width: 50px;
    }
    > span {
      color: ${colors.gray};
      font-weight: 400;
      line-height: 3rem;
    }
  }
`
