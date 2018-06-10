import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import Gallery from './components/Gallery'
import reducer from './reducers/index'
// import { BrowserRouter as Router, Route } from 'react-router-dom'

import { watchLoadImages } from './sagas';

import { syncHistoryWithStore } from 'react-router-redux';
import { createHistory } from 'history';
import routing from './reducers/routing';

const rootReducer = combineReducers({
  reducer,
  routing,
});

const store = createStore(
  rootReducer,
  applyMiddleware(createSagaMiddleware(watchLoadImages))
);

// This is all we need to do sync browser history with the location
// state in the store.
syncHistoryWithStore(
  createHistory(),
  store,
);

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
);