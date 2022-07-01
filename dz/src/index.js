import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { applyMiddleware, createStore } from 'redux';
import thunk from   "redux-thunk"
import { rootreducer } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore (rootreducer, applyMiddleware(thunk))
root.render(
 <Provider store={store}>
    <App />
    </Provider>
  
);

