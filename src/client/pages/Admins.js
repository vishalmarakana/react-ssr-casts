import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Helmet } from 'react-helmet'
// redux actions
import { fetchAdminsAsync } from '../actions/admins'
// components
import AdminList from '../components/AdminList'
// helpers
import privateRoute from '../helpers/privateRoute'

const AdminsPage = ({ fetchAdmins }) => {

  React.useEffect(() => {

    fetchAdmins()

  }, [])

  return (

    <>

      <Helmet>

        <title>REACT SSR - Admin List</title>

      </Helmet>

      <AdminList />

    </>

  )

}

AdminsPage.getInitialData = async ({ store }) => {

  await store.dispatch(fetchAdminsAsync())

}

const mapDispatchToProps = (dispatch) => ({

  fetchAdmins: () => dispatch(fetchAdminsAsync()),

})

export default compose(
  connect(undefined, mapDispatchToProps),
  privateRoute
)(AdminsPage)
