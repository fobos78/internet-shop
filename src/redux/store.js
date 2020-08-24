/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { addDataReducer, addCart } from './reducers';

export const store = createStore(
  combineReducers({
    addDataReducer,
    addCart,
  }),
  // addDataReducer,
  composeWithDevTools(),
);
