import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState = {}) => {

  const store = createStore(

    combineReducers({

    })

    , initialState

    , composeEnhancers(applyMiddleware(thunk))

  )

  return store

}
