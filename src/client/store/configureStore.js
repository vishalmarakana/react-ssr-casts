import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState = {}) => {

  const store = createStore(

    reducers,

    initialState,

    composeEnhancers(applyMiddleware(thunk))

  )

  return store

}
