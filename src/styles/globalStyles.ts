import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
}

body{
    background-color: var(--brackground);
    color: var(--white);
}

:root {
    --white: #fff;
    --black: #000;
    --brackground: #e91c5d;
}
`

export { GlobalStyle };