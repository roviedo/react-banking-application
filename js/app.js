import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

//Entrypoint container
import Bank from './components/Bank.js';

//Reducers
import login from '../reducers/login';
import account from '../reducers/account';

const store = createStore(
    combineReducers({
        login,
        account
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
