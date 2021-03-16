import { createGlobalStyle } from 'styled-components'

import bg from '../assets/bg.jpg'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2e2e2e;
    --grey: #bfbfbf;
    --white: #ffffff;
  }

  html {
    background-image: url(${bg});
    background-size: 1300px;
    background-attachment: fixed;
    font-size: 10px;
  }

  h3 {
    font-size: 3rem;
  }
  
  body {
    font-size: 2rem;
  }
  
  a {
    color: var(--black);
  }
  
  p {
    font-size: 2.5rem;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles
