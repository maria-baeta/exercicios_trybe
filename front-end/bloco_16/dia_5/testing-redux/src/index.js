import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();