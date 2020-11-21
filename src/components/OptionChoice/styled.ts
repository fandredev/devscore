import styled from 'styled-components'
import colors from '../../constants/colors'

export const Container = styled.div`
  @media (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 500px) and (max-width: 1000px) {
    width: 50%;
     display: flex;
    justify-content: center;
  }
    @media (min-width: 1000px) {
      width: 100%;
    }
  > aside {
    padding: 1.3rem;
    border: 1px solid ${colors.blue_hard};
    border-radius: 5px;
    color: ${colors.blue_hard};
    margin: 1.7rem 0;
    max-width: 350px;
    width: 80%;
    text-align: left;
    @media (min-width: 1000px) {
      width: initial;
      max-width: initial;
    }
  }
`
