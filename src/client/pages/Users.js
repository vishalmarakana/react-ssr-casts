import React from 'react'
import { connect } from 'react-redux'
import { fetchUsersAsync } from '../actions/users'

const UsersPage = ({ fetchUsers }) => {

  React.useEffect(() => {

    fetchUsers()

  }, [])

  return (

    <>
      Users Page
    </>

  )
}

const mapDispatchToProps = (dispatch) => ({

  fetchUsers: () => dispatch(fetchUsersAsync()),

})

export default connect(undefined, mapDispatchToProps)(UsersPage)
