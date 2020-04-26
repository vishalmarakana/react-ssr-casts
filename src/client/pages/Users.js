import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
// redux actions
import { fetchUsersAsync } from '../actions/users'
// components
import UserList from '../components/UserList'

const UsersPage = ({ fetchUsers }) => {

  React.useEffect(() => {

    fetchUsers()

  }, [])

  return (

    <>

      <Helmet>

        <title>REACT SSR - User List</title>

      </Helmet>

      <UserList />

    </>

  )
}

UsersPage.getInitialData = async ({ store }) => {

  await store.dispatch(fetchUsersAsync())

}

const mapDispatchToProps = (dispatch) => ({

  fetchUsers: () => dispatch(fetchUsersAsync()),

})

export default connect(undefined, mapDispatchToProps)(UsersPage)
