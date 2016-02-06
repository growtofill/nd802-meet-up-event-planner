export function addEvent(name) {
    return {
        type: 'ADD_EVENT',
        name
    };
}

export function toggleAddEventForm(show) {
    return {
        type: show
            ? 'SHOW_ADD_EVENT_FORM'
            : 'HIDE_ADD_EVENT_FORM'
    };
}
