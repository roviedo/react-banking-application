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

describe('account actions', () => {
    it('creates an action to update deposit state', () => {
        const deposit = {deposit: 200};
        const expectedAction = {
            type: 'UPDATE_DEPOSIT',
            deposit
        };

        const updatedDeposit = accountActions.updateDeposit(deposit);
        expect(updatedDeposit.type).to.equal(expectedAction.type);
        expect(updatedDeposit.deposit).to.equal(expectedAction.deposit);
    });

    it('creates an action to update withdrawal state', () => {
        const withdrawal = {withdrawal: 200};
        const expectedAction = {
            type: 'UPDATE_WITHDRAWAL',
            withdrawal
        };

        const updatedWithdrawal = accountActions.updateWithdrawal(withdrawal);
        expect(updatedWithdrawal.type).to.equal(expectedAction.type);
        expect(updatedWithdrawal.withdrawal).to.equal(expectedAction.withdrawal);
    });
});
