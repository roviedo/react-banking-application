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
