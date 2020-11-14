import styled from 'styled-components'
import colors from '../../constants/colors'

export const Container = styled.main`
  display: grid;
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid ${colors.separated_border};
    border-top: none;
    border-bottom: none

  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr)
  }
`