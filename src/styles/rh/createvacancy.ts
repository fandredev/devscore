import styled from "styled-components"
import { fullCenter } from "../functions"

export const Container = styled.main`
  padding: 0 4rem;
  > form {
    > div {
      ${fullCenter};
      @media (min-width: 700px) {
        flex-flow: row wrap;
        justify-content: space-between;
      }
    }
  }
`
export const SectionTechnogies = styled.section`
  padding: 0 4rem;
  ${fullCenter};
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.3px;
    justify-items: center;
  }
`
export const ItemsTitle = styled.section`
  padding: 0 4rem;
  > span {
    line-height: 3rem;
  }
`

export const SectionRegister = styled(SectionTechnogies)`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  > button {
    width: 75%;
    max-width: 300px;
  }
`
