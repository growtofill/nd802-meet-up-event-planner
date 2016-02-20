const initialState = {
    events: [],
    isAddEventFormVisible: true
};

export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case 'ADD_EVENT':
            return Object.assign({}, state, {
                events: [
                    ...state.events,
                    // FIXME
                    action.event
                ]
            });
        case 'SHOW_ADD_EVENT_FORM':
            return Object.assign({}, state, {
                isAddEventFormVisible: true
            });
        case 'HIDE_ADD_EVENT_FORM':
            return Object.assign({}, state, {
                isAddEventFormVisible: false
            });
        default:
            return state;
    }
}
