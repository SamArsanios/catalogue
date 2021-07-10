import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const rootReducer = combineReducers();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;

// Might probably need thunk here later 