import { createStore, combineReducers } from 'redux';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);

// Creates a preconfigured store for this example.
export default function(initialState) {
  let store = createStore(reducer, initialState);

  return store;
}
