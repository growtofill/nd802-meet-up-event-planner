import { createElement } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import todoApp from './reducers';

let store = createStore(todoApp, {
    loggedInAs: '',
    events: [
        {
            name: `Helen's Birthday`,
            type: 'Birthday party',
            host: 'Jane Miller',
            startDate: '',
            endDate: '',
            guests: [
                'Bob Bolton',
                'Jinny James',
                'Susy Sullivan'
            ],
            location: '22 Jump Street',
            message: `Please don't be late`
        }
    ],
    isAddEventFormVisible: false
});

document.addEventListener('DOMContentLoaded', () => {
    render(
        createElement(Provider, { store }, createElement(App)),
        document.getElementById('root')
    );
});
