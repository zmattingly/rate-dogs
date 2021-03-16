import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from './Logo'

const NavStyled = styled.nav`
  background-color: var(--grey);
  border-bottom: 0.5rem solid var(--black);
  border-top: 0.5rem solid var(--black);
  margin: 4rem 0 2rem;

  ul {
    padding: 2rem 0 1rem;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }

  a {
    display: inline-block;
    text-decoration: none;
    font-size: 5rem;
    font-weight: 800;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    transform: rotate(-5deg) scale(1.3);
  }
`

const Nav = () => (
  <NavStyled>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dogs">Dogs</Link>
      </li>
      <li>
        <Link to="/dogs">
          <Logo />
        </Link>
      </li>
      <li>
        <Link to="/top">Top</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </NavStyled>
)

export default Nav
