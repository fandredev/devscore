import styled from 'styled-components'
import colors from '../../../../constants/colors'

export const Container = styled.header`
  display: grid;
  grid-template-columns: 50% 1fr;
  align-items: center;
  height: 5vw;
  padding: 0 2rem;

   @media (max-width: 800px) {
    grid-template-columns: 30% 1fr;
   }

  > ol {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > li {
      color: ${colors.blue_hard};
      font-weight: 500;
    }
  }
}
`
export const Figure = styled.figure`
  > img {
    width: 20vw;
  }
`
