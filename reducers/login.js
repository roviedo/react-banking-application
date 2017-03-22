import Immutable from 'immutable';

const defaultState = {
    username: '',
    password: ''
};

const actionHandlers = {
    ['UPDATE_CREDENTIALS']: (state, action) => {
        const { credentials } = action;
        return Object.assign({}, state, credentials);
    },
    ['IS_USER_LOGGED_IN']: (state, action) => {
        console.log('djfkla;dsjdaskl; ds am i here');
        const { isLoggedIn } = action;
        console.log('isLoggedIn', isLoggedIn);
        return Object.assign({}, state, isLoggedIn);
    }
};

export default function login(state = defaultState, action) {
    const handler = actionHandlers[action.type];
    if (!handler) {
        return state;
    }
    return handler(state, action);
}
