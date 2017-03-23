import sessionIdUsernameMapping from './sessionIdUsernameMapping.json';
import accounts from './accounts.json';

export default function updateAccount(transactionType, currency, sessionId) {
    const username = sessionIdUsernameMapping[sessionId];
    let accountData = accounts[username]

    if (transactionType === 'withdrawal') {
        accountData.balance = (accountData.balance - parseInt(currency.currency));
    }
    else if (transactionType === 'deposit') {
        accountData.balance = (accountData.balance + parseInt(currency.currency));
    }

    const transactionId = getTransactionId(accountData.transactions)
    const newTransaction = createNewTransaction(transactionId, transactionType, currency.currency);
    accountData.transactions.push(newTransaction);

    return accountData;
}

export function createNewTransaction(transactionId, transactionType, currencyAmount) {
    let d = new Date;
    const shortDate = d.toLocaleDateString();
    return {
        "transactionId": transactionId, // needs to be generated from primary key of DB, maybe transaction table?
        "transactionType": transactionType,
        "amount": currencyAmount,
        "date": shortDate
    }
}

export function getTransactionId(transactions) {
    /* This would use primary key id from DB which auto increments MySQL for example.
    TransactionId is only incrementing based on the current user transaction
    ids but we should get all users transactionIds, then get the highest one
    and increment that one. */
    return transactions.slice(-1)[0]["transactionId"] + 1;
}
