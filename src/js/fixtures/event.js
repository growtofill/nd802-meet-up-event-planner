const duration = 1000 * 60 * 30;

export default {
    name: 'Introduction to meet-up event planner',
    type: 'Presentation',
    host: 'You',
    startDate: (new Date).toISOString(),
    endDate: (new Date(Date.now() + duration)).toISOString(),
    guests: [
        'you',
        'your friends'
    ],
    location: 'Your place',
    message: 'Come by and check out the event planner!'
}
