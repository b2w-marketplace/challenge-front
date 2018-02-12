import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import portfolio from './reducers/portfolioReducer';

export default createStore(
    combineReducers({
        portfolio
    }),
    {},
    applyMiddleware(thunk, promise())
)