import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import axiosClientInstance from '../config/axios.client'
import axiosServerInstance from '../config/axios.server'

const isServer = typeof window === 'undefined'
const composeEnhancers = isServer ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
const axiosInstance = isServer ? axiosServerInstance : axiosClientInstance

/**
 * Creates redux store
 * 
 * @param {Object} initialState
 * 
 * @returns Redux store
 */
export default (initialState, req = null) => {

  const store = createStore(

    reducers,

    initialState,

    composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance(req))))

  )

  return store

}
