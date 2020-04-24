import React from 'react'
import { connect } from 'react-redux'
// selectors
import { selectAdmins } from '../selectors/admins'

const AdminList = ({ admins }) => (

  <>

    <h2>List of Admins</h2>

    <ul>
      {
        admins.map(({ id, name }) => (<li key={id}>{name}</li>))
      }
    </ul>

  </>

)

const mapStateToProps = (state) => ({

  admins: selectAdmins(state),

})

export default connect(mapStateToProps)(AdminList)
