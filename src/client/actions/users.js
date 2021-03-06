import { FETCH_USERS } from './actionTypes'

const fetchUsers = (users) => ({

  type: FETCH_USERS,

  payload: users,

})

export const fetchUsersAsync = () => {

  return async (dispatch, _, api) => {

    const response = await api.get('/users')

    return dispatch(fetchUsers(response.data))

  }
}
