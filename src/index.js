import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/App';
import reducers from './reducers';

const container = document.getElementById('app');
const root = createRoot(container);
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
);

