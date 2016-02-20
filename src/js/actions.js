export function addEvent(event) {
    return {
        type: 'ADD_EVENT',
        event
    };
}

export function toggleAddEventForm(show) {
    return {
        type: show
            ? 'SHOW_ADD_EVENT_FORM'
            : 'HIDE_ADD_EVENT_FORM'
    };
}
