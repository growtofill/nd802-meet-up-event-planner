import { createElement } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import todoApp from './reducers';

let store = createStore(todoApp, {
    events: [
        { name: 'Meeting' },
        { name: 'Party' },
        { name: 'Dinner' }
    ]
});

document.addEventListener('DOMContentLoaded', () => {
    render(
        createElement(Provider, { store }, createElement(App)),
        document.getElementById('root')
    );
});
