import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const configureStore = preloadedState => {
  let composeEnhancers
  if (process.env.NODE_ENV === 'production') {
    composeEnhancers = compose
  } else {
    /* eslint-disable no-underscore-dangle */
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    /* eslint-enable */
  }
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
  return store
}

export default configureStore
