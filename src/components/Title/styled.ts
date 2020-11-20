import styled from 'styled-components'


export const TitleStyled = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 0;
  color: #1A202C;

  &[id="edit-profile-title"] {
    @media (min-width: 600px) and (max-width: 1000px) {
      margin-top: 3rem;
    }
  }
`
