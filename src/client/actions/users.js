import axios from '../config/axios'
import { FETCH_USERS } from './actionTypes'

const fetchUsers = (users) => ({

  type: FETCH_USERS,

  payload: users,

})

export const fetchUsersAsync = () => {

  return async (dispatch) => {

    const response = await axios.get('/users')

    return dispatch(fetchUsers(response.data))

  }
}