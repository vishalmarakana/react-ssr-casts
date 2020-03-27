import React from 'react'
import { connect } from 'react-redux'
import { fetchUsersAsync } from '../actions/users'
// components
import UserList from '../components/UserList'

const UsersPage = ({ fetchUsers }) => {

  React.useEffect(() => {

    fetchUsers()

  }, [])

  return (

    <UserList />

  )
}

UsersPage.initialData = ({ dispatch }) => {

  return dispatch(fetchUsersAsync())

}

const mapDispatchToProps = (dispatch) => ({

  fetchUsers: () => dispatch(fetchUsersAsync()),

})

export default connect(undefined, mapDispatchToProps)(UsersPage)
