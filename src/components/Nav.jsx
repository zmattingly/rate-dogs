import React from 'react'
import { Link, navigate } from 'gatsby'

const Nav = () => {
  const goToDogs = () => {
    setTimeout(() => {
      console.log('Going to Dogs after 2 seconds')
      navigate('/dogs', { replace: true })
    }, 2000)
  }

  return (
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
        <li>
          <button type="button" onClick={goToDogs}>
            Go To Dogs
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
