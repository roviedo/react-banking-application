import { expect } from 'chai';

import * as actions from '../actions/login.js';

describe('login actions', () => {
    it('creates an action to update credentials', () => {
        const credentials = {username: 'rauloviedo'};
        const expectedAction = {
            type: 'UPDATE_CREDENTIALS',
            credentials
        };

        const updatedCredentials = actions.updateCredentials(credentials);
        expect(updatedCredentials.type).to.equal(expectedAction.type);
        expect(updatedCredentials.username).to.equal(expectedAction.username);
    });
});
