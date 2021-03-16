import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer`
  background-color: var(--grey);
  border-bottom: 0.5rem solid #000000;
  border-top: 0.5rem solid #000000;
  margin: 2rem 0;
  padding: 0 1rem;

  p {
    font-size: 1.5rem;
    text-align: right;
  }
`

const Footer = () => (
  <FooterStyled>
    <p>&copy; Rate Dogs {new Date().getFullYear()}</p>
  </FooterStyled>
)

export default Footer
