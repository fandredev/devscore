import styled from "styled-components"
import colors from "../../constants/colors"
import { fullCenter } from "../../styles/functions"

export const Container = styled.div`
  background: ${colors.rh_bg_tech_color};
  opacity: 0.86;
  border: 1px solid transparent;
  border-radius: 6px;
  max-width: 200px;
  width: 60%;
  margin: 2rem;
  @media (min-width: 600px) {
    width: 100%;
  }
  > figure {
    display: flex;
    justify-content: flex-end;
    padding: 0.7rem;
  }
  > section {
    ${fullCenter};

    > span {
      line-height: 3rem;
      margin: 1.4rem auto;
      color: #000;
    }
  }
`
