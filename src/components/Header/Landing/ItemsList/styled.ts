import styled from 'styled-components'
import colors from '../../../../constants/colors'

export const Container = styled.header`
  align-items: center;
  height: 7vw;
  display: flex;
  padding: 0 2rem;
  max-height: 100px;

   @media (max-width: 800px) {
    grid-template-columns: 30% 1fr;
    grid-template-rows: 6rem;
   }

  > nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
   @media (max-width: 800px) {
    padding: 0 2rem;
   }
  > ol {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      > li {
        color: ${colors.blue_hard};
        font-weight: 500;
      }
    }
  }
}
`
export const Figure = styled.figure`
width: max-content;
  > img {
    width: 20vw;
  }
`
