import styled from 'styled-components'


export const Container = styled.main`
  display: grid;
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr)
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr)
  }
`