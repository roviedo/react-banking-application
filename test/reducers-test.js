import Immutable from 'immutable';
import { expect } from 'chai';

import reducer from '../reducers/login.js';

describe('login reducer', () => {
    const defaultState = {
        isCoolTest: false,
        username: '',
        password: ''
    };

    it('returns the initial state', () => {
        expect(
            reducer(undefined, {})
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
            reducer(defaultState, action)
        ).to.deep.equal(
            expectedState
        );
    });
});
