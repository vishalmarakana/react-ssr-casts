import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const isServer = typeof window === 'undefined'
const composeEnhancers = isServer ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)

/**
 * Creates redux store
 * 
 * @param {Object} initialState
 * 
 * @returns Redux store
 */
export default (initialState) => {

  const store = createStore(

    reducers,

    initialState,

    composeEnhancers(applyMiddleware(thunk))

  )

  return store

}
