const defaultState = {
    deposit: 0,
    withdrawal: 0
};

const actionHandlers = {
    ['UPDATE_DEPOSIT']: (state, action) => {
        const { deposit } = action;
        return Object.assign({}, state, deposit);
    },

    ['UPDATE_WITHDRAWAL']: (state, action) => {
        const { withdrawal } = action;
        return Object.assign({}, state, withdrawal);
    },

    ['LOAD_ACCOUNT_DATA']: (state, action) => {
        const { accountData } = action;
        return Object.assign({}, state, accountData);
    },
};

export default function login(state = defaultState, action) {
    const handler = actionHandlers[action.type];
    if (!handler) {
        return state;
    }
    return handler(state, action);
}
