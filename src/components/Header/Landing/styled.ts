import styled from 'styled-components'

export const Container = styled.aside`
  > figure {
    @media (max-width: 800px) {
     display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 2rem;
    }
    > img {
      @media (max-width: 800px) {
      margin-top: 2rem;
        width: 40%;
      }
    }
  }
`
