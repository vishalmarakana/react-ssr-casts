import { FETCH_USERS } from '../actions/actionTypes'

export default (state = [], action) => {

  switch (action.type) {

    case FETCH_USERS:

      return action.payload

    default:

      return state

  }

}
