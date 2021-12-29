import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Provider } from 'react-redux';
import StoreConfig from './domain/store/store.config';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './core/app';
import { AnyAction } from 'redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider<AnyAction> store={ StoreConfig }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
