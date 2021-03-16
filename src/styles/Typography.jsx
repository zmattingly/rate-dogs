import { createGlobalStyle } from 'styled-components'

import font from '../assets/fonts/Ranchers-Regular.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: Ranchers;
    src: url(${font});
  }
  html {
    font-family: Ranchers, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    letter-spacing: 2px;
  }
`

export default Typography
