import { createGlobalStyle } from "styled-components"

interface Theme<T> {
  colors: {
    primary: T
  }
}
export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  html {
    font-size: 62.5%;
    font-family: 'Roboto';
  }
  body {
    font-size: 1.6rem;
  }
  ul, li {
    list-style: none;
    cursor: pointer;
  }
  button {
    cursor: pointer;
  }
  address {
    font-style: normal;
  }
  abbr {
    text-decoration: none;
  }

`

export const theme: Theme<string> = {
  colors: {
    primary: "#0070f3",
  },
}
