import Immutable from 'immutable';
import { expect } from 'chai';

import loginReducer from '../reducers/login.js';
import accountReducer from '../reducers/account.js';

describe('login reducer', () => {
    const defaultState = {
        isCoolTest: false,
        username: '',
        password: ''
    };

    it('returns the initial state', () => {
        expect(
            loginReducer(undefined, {})
        ).to.deep.equal(
            defaultState
        );
    });

    it('handles UPDATE_CREDENTIALS', () => {
        const actionPayload = {
            username: 'rauloviedo',
            password: 'test123'
        };
        const action = Object.assign({
            type: 'UPDATE_CREDENTIALS',
        }, {credentials: actionPayload});

        const expectedState = Object.assign({}, defaultState, actionPayload);
        expect(
            loginReducer(defaultState, action)
        ).to.deep.equal(
            expectedState
        );
    });
})
describe('account reducer', () => {
    const defaultState = {
        deposit: 0,
        withdrawal: 0
    };
    it('handles UPDATE_DEPOSIT', () => {
        const actionPayload = {
            deposit: 500
        };
        const action = Object.assign({
            type: 'UPDATE_DEPOSIT',
        }, {deposit: actionPayload});

        const expectedState = Object.assign({}, defaultState, actionPayload);
        expect(
            accountReducer(defaultState, action)
        ).to.deep.equal(
            expectedState
        );
    });

    it('handles UPDATE_WITHDRAWAL', () => {
        const actionPayload = {
            withdrawal: 400
        };
        const action = Object.assign({
            type: 'UPDATE_WITHDRAWAL',
        }, {withdrawal: actionPayload});

        const expectedState = Object.assign({}, defaultState, actionPayload);
        expect(
            accountReducer(defaultState, action)
        ).to.deep.equal(
            expectedState
        );
    });
});
