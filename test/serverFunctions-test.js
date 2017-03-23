import { expect } from 'chai';

import updateAccount from '../serverFunctions.js';

describe('serverFunctions', () => {

    it('updates account with new balance and transaction', () => {
        const transactionType = 'withdraw';
        const currency = {currency: 123};
        const sessionId = "ae345vbc34567";
        let d = new Date;
        const shortDate = d.toLocaleDateString();

        const expectedAccountData = {
            "password": 1234,
            "sessionId": "ae345vbc34567",
            "accountId": 12345,
            "balance": 11877,
            "name": "Raul Oviedo",
            "transactions": [
                {   "transactionId": 1234,
                    "transactionType": "withdrawal",
                    "amount": 200,
                    "date": "12/01/2016"
                },
                {
                    "transactionId": 1235,
                    "transactionType": "deposit",
                    "amount": 400,
                    "date": "12/23/2016"
                },
                {   "transactionId": 1239,
                    "transactionType": "withdraw",
                    "amount": 123,
                    "date": shortDate
                }
            ]
        };
        expect(
            updateAccount(transactionType, currency, sessionId)
        ).to.deep.equal(
            expectedAccountData
        );
    });
});
