import styled from 'styled-components'
import colors from '../../constants/colors'


export const Container = styled.div`
  padding: 2rem;

  > h3 {
    color: ${colors.blue_hard};
    font-weight: bold;
    font-size: 30px
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