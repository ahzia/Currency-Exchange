import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import forexReducer from './forexData/forex';

const reducer = combineReducers({
  forex: forexReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
