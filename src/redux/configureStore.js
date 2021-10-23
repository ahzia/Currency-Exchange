import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import forexReducer from './forexData/forex';
import forexExchangeReducer from './forexData/forexExchange';

const reducer = combineReducers({
  forex: forexReducer,
  forexDetails: forexExchangeReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
