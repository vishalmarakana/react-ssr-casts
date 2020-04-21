import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = ({ isAuthenticated }) => {

  return (

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

        <li>

          <Link to="/admins">
            Admin Page
          </Link>

        </li>

        <li>

          {

            isAuthenticated
              ? (

                <a href={`${process.env.BASE_API_URL}/logout`}>
                  Logout
                </a>

              )
              : (

                <a href={`${process.env.BASE_API_URL}/auth/google`}>
                  Login
                </a>

              )

          }

        </li>

      </ul>

    </nav>

  )

}

const mapStateToProps = (state) => ({

  isAuthenticated: !!state.auth,

})

export default connect(mapStateToProps)(Navbar)
