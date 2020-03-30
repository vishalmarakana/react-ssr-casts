import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
    Page List
    <ul>
      <li>
        <Link to="/">
          Home Page
        </Link>
      </li>
      <li>
        <Link to="/users">
          Users Page
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
