import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logo.png'

const ImgStyled = styled.img`
  height: 150px;
  width: 150px;
`

const Logo = () => <ImgStyled src={logo} alt="Puppy!" />

export default Logo
