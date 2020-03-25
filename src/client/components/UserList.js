import React from 'react'
import { connect } from 'react-redux'
import { selectUsers } from '../selectors/users'

const UserList = ({ users }) => (

  <>

    <h2>List of users</h2>

    <ul>
      {
        users.map(({ id, name }) => (<li key={id}>{name}</li>))
      }
    </ul>

  </>

)

const mapStateToProps = (state) => ({

  users: selectUsers(state),

})

export default connect(mapStateToProps)(UserList)
