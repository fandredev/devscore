import styled from 'styled-components'
import colors from '../../constants/colors'


export const Container = styled.div`
  padding: 2rem;
  @media (min-width: 500px){
    grid-column: 1/3;
  }
   @media (min-width: 800px) and (max-width: 1600px){
    grid-column: inherit;
  }
  > h2 {
    color: ${colors.blue_hard};
    font-weight: bold;

    @media (min-width: 800px){
      font-size: 22px
    }
  }
  > section {
    display: flex;
    justify-content: space-between;
    > span {
      mix-blend-mode: normal;
      color: rgba(0, 0, 0, 0.87);
      letter-spacing: 0.15px;
      margin: 2rem 0;
    }
  }
  > form {
    padding: 2rem 0;
  }
`