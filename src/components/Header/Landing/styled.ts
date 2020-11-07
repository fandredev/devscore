import styled from 'styled-components'
import colors from '../../../constants/colors'
import text from '../../../constants/text'

export const Container = styled.header`
  display: grid;
  grid-template-columns: 50% 1fr;
  align-items: center;
  height: 5vw;
  padding: 0 2rem;

  > img {
    width: 20vw;
  }
  > ol {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > li {
      color: ${colors.blue_hard};
      font-weight: 500;

      > button {
        background: ${colors.blue_hard};
        border-radius: 5px;
        padding: .8rem 1.3rem;
        font-size: 20px;
        border: transparent;
        color: #fff;
      }
    }
  }
}
`
export const Figure = styled.figure``
