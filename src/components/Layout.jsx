import React from 'react'
import 'normalize.css'
import styled from 'styled-components'

import Footer from './Footer'
import Nav from './Nav'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

const ContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 1260px;
`

const MainStyled = styled.main`
  background-color: var(--white);
  border-bottom: 0.5rem solid var(--black);
  border-top: 0.5rem solid var(--black);
  padding: 2rem;
`

const Layout = (props) => {
  const { children } = props

  return (
    <ContainerStyled>
      <GlobalStyles />
      <Typography />
      <Nav />
      <MainStyled>{children}</MainStyled>
      <Footer />
    </ContainerStyled>
  )
}

export default Layout
