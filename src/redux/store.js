/* eslint-disable no-underscore-dangle */
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers/index';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware));
const store = createStore(combineReducers(reducers), enhancer);

export default store;
