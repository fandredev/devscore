import styled from 'styled-components'
import colors from '../../constants/colors'
import { fullCenter } from '../functions'

export const Container = styled.main`
  ${fullCenter};
  height: 80vh;

  > section {
      color: ${colors.blue_hard};
      width: 25%;
    > span {
      line-height: 3rem;
    }
    > h2 {
      font-size: 3rem;
      font-weight: 700;
      margin: 1rem 0;
    }
    > aside {
     ${fullCenter};
      > button {
        width: 100%;
        margin: 6px 0;
        font-size: 1.3rem;
        font-weight: 800
      }
    }
  }
`
export const Col = styled.div`
  display: flex;
  flex-flow: column wrap;
  color: ${colors.blue_hard};

  > label {
    margin: 1rem 0;
  }
  > input {
    padding: 1rem 0;
    border-radius: 5px;
    border: 1px solid #E8E8E8;
  }
`
