import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1600px) {
      font-size: 20px;
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0 transparent;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

`
