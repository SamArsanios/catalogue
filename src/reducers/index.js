import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import comicReducer from './comicReducer';
import searchReducer from './searchReducer';
import filmFilterReducer from './filterReducer';

const middleware = [thunk];
const initialState = {};

export const rootReducer = combineReducers({ films: searchReducer, filter: filmFilterReducer });
// export default combineReducers({ films: searchReducer });
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
