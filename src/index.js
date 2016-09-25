import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import calcApp from './reducers'

const logger = createLogger();
const store = createStore(
  calcApp, 
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
