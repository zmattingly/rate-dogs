import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dogs">Dogs</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/top">Top</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
