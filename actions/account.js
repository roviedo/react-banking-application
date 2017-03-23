import sessionIdUsernameMapping from '../sessionIdUsernameMapping.json';
import accounts from '../accounts.json';
import { getCookie, deleteCookie } from '../js/utils.js';
import updateAccount from '../serverFunctions.js';
/**
 * @param {object} deposit - Object, update deposit state.
 */
export function updateDeposit(deposit) {
    return {
        type: 'UPDATE_DEPOSIT',
        deposit
    };
}

/**
 * @param {object} withdrawal - Object, update withdrawal state.
 */
export function updateWithdrawal(withdrawal) {
    return {
        type: 'UPDATE_WITHDRAWAL',
        withdrawal
    };
}

/**
 * @param {object} currency - Obj, currency.
 */
export function withdrawCurrency(currency) {
    const sessionId = getCookie('sessionId');
    const username = sessionIdUsernameMapping[sessionId];
    const accountData = updateAccount('withdraw', currency, sessionId);

    return {
        type: 'UPDATE_ACCOUNT_DATA',
        accountData
    }
}

/**
 * @param {object} currency - Obj, currency.
 */
export function depositCurrency(currency) {
    const sessionId = getCookie('sessionId');
    const username = sessionIdUsernameMapping[sessionId];
    const accountData = updateAccount('deposit', currency, sessionId);

    return {
        type: 'UPDATE_ACCOUNT_DATA',
        accountData
    }
}

/**
 * @param {object} sessionId - Object, sessionId used to retrieve account data for user.
 */
export function loadAccountData(sessionId) {
    // Would fetch data from backend by sessionId or a token and dispatch an
    // action to load account data for user.

    const username = sessionIdUsernameMapping[sessionId.sessionId];
    const accountData = {
        accountData: accounts[username]
    };
    return {
        type: 'LOAD_ACCOUNT_DATA',
        accountData
    }
}
