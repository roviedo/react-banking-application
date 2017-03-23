import sessionIdUsernameMapping from './sessionIdUsernameMapping.json';
import accounts from './accounts.json';

export default function updateAccount(transactionType, currency, sessionId) {
    const username = sessionIdUsernameMapping[sessionId];
    let accountData = accounts[username]

    if (transactionType === 'withdraw') {
        accountData.balance = (accountData.balance - parseInt(currency.currency));
    }
    else if (transactionType === 'deposit') {
        accountData.balance = (accountData.balance + parseInt(currency.currency));
    }

    const newTransaction = createNewTransaction(transactionType, currency.currency);
    accountData.transactions.push(newTransaction);

    return accountData;
}

export function createNewTransaction(transactionType, currencyAmount) {
    let d = new Date;
    const shortDate = d.toLocaleDateString();
    return {
        "transactionId": 1239, // needs to be generated from primary key of DB, maybe transaction table?
        "transactionType": transactionType,
        "amount": currencyAmount,
        "date": shortDate
    }
}
