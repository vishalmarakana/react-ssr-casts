import { combineReducers } from 'redux'
import usersReducer from './users'
import adminsReducer from './admins'
import authReducer from './auth'

export default combineReducers({

  users: usersReducer,

  admins: adminsReducer,

  auth: authReducer,

})
