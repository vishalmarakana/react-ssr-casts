import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// selectors
import { selectIsAuthenticated } from '../selectors/auth'

const Navbar = ({ isAuthenticated }) => {

  const defaultAuthURL = `${process.env.BASE_API_URL}/auth/google`
  const [authURL, setAuthURL] = React.useState(defaultAuthURL)

  React.useEffect(() => {

    if (isAuthenticated) {

      setAuthURL(`${process.env.BASE_API_URL}/logout`)

    } else {

      setAuthURL(defaultAuthURL)

    }

  }, [isAuthenticated])

  return (

    <nav>

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

          <a href={authURL}>
            {isAuthenticated ? "Logout" : "Login"}
          </a>

        </li>

      </ul>

    </nav>

  )

}

const mapStateToProps = (state) => ({

  isAuthenticated: selectIsAuthenticated(state),

})

export default connect(mapStateToProps)(Navbar)
