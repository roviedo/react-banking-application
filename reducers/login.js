import Immutable from 'immutable';

const defaultState = {
    isCoolTest: false,
    username: '',
    password: ''
};

const actionHandlers = {
    ['testing']: (state, action) => {
        return state.set('isCoolTest', action.isCoolTest);
    },

    ['UPDATE_CREDENTIALS']: (state, action) => {
        const { credentials } = action;
        return Object.assign({}, state, credentials);
    }
};

export default function login(state = defaultState, action) {
    const handler = actionHandlers[action.type];
    if (!handler) {
        return state;
    }
    return handler(state, action);
}
