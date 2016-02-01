const initialState = {
    events: []
};

export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case 'ADD_EVENT':
            return Object.assign({}, state, {
                events: [
                    ...state.events,
                    { name: action.name }
                ]
            });
        default:
            return state;
    }
}
