import { expect } from 'chai';

import * as loginActions from '../actions/login.js';
import * as accountActions from '../actions/account.js';

describe('login actions', () => {
    it('creates an action to update credentials', () => {
        const credentials = {username: 'rauloviedo'};
        const expectedAction = {
            type: 'UPDATE_CREDENTIALS',
            credentials
        };

        const updatedCredentials = loginActions.updateCredentials(credentials);
        expect(updatedCredentials.type).to.equal(expectedAction.type);
        expect(updatedCredentials.username).to.equal(expectedAction.username);
    });
});
