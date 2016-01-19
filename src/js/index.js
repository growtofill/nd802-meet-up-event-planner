import { createElement } from 'react';
import { render } from 'react-dom';

import EventList from '../components/EventList.jsx';

document.addEventListener('DOMContentLoaded', () => {
    render(
        createElement(EventList, {
            events: [
                { name: 'Meeting' },
                { name: 'Party' }
            ]
        }),
        document.getElementById('app')
    );
});
