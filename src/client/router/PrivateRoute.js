import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// selectors
import { selectIsAuthenticated } from '../selectors/auth'

const PrivateRoute = ({ isAuthenticated, component }) => {

}

const mapStateToProps = (state) => ({

  isAuthenticated: selectIsAuthenticated(state),

})

export default connect(mapStateToProps)(PrivateRoute)
