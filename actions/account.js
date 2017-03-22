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
 * @param {object} accountData - Object, user account data to be loaded to state.
 */
export function loadAccountData(accountData) {
    return {
        type: 'LOAD_ACCOUNT_DATA',
        accountData
    }
}
