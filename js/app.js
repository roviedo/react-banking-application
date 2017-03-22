import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import Bank from './components/Bank.js';

//Reducers
import login from '../reducers/login';

const store = createStore(
    combineReducers({
        login,
    }),
    applyMiddleware(thunk)
);

const App = () => (
    <Provider store={ store }>
        <Bank />
    </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
