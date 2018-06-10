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

import { Router, Route, browserHistory } from 'react-router'

import { syncHistoryWithStore} from 'react-router-redux';
import { routerReducer } from 'react-router-redux';

// import { createHistory } from 'history';
import createHistory from 'history/createBrowserHistory'


import routes from './reducers/routes';

// import createHistory from 'history/createBrowserHistory'

const rootReducer = combineReducers({
  reducer,
  routes,
  routing: routerReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(createSagaMiddleware(watchLoadImages))
);

// sync browser history with the location
// state in the store.
syncHistoryWithStore(
  createHistory(),
  store,
);

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
);