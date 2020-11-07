import { createGlobalStyle } from "styled-components"

interface Theme<T> {
  colors: {
    primary: T
  }
}
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const theme: Theme<string> = {
  colors: {
    primary: "#0070f3",
  },
}
