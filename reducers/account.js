import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    isCoolTest: false
});

const actionHandlers = {
    ['testing']: (state, action) => {
        return state.set('isCoolTest', action.isCoolTest);
    }
};

export default function account(state = defaultState, action) {
    const handler = actionHandlers[action.type];
    if (!handler) {
        return state;
    }
    return handler(state, action);
}
