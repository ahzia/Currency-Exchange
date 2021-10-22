import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import forexReducer from './forexData/forex';
import forexDetailsReducer from './forexData/forexDetails';

const reducer = combineReducers({
  forex: forexReducer,
  forexDetails: forexDetailsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
