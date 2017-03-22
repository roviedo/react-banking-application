import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import Bank from './components/Bank.js';

//Reducers
import account from '../reducers/account';

const store = createStore(
    combineReducers({
        account,
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
