import sessionIdUsernameMapping from '../sessionIdUsernameMapping.json';
import accounts from '../accounts.json';
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
