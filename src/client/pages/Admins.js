import React from 'react'
import { connect } from 'react-redux'
// redux actions
import { fetchAdminsAsync } from '../actions/admins'
// components
import AdminList from '../components/AdminList'

const AdminsPage = ({ fetchAdmins }) => {

  React.useEffect(() => {

    fetchAdmins()

  }, [])

  return (

    <AdminList />

  )

}

const mapDispatchToProps = (dispatch) => ({

  fetchAdmins: () => dispatch(fetchAdminsAsync()),

})

export default connect(undefined, mapDispatchToProps)(AdminsPage)
