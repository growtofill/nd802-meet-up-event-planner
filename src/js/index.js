import { createElement } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import todoApp from './reducers';
import event from './fixtures/event';

let store = createStore(todoApp, {
    events: [event]
});

document.addEventListener('DOMContentLoaded', () => {
    render(
        createElement(Provider, { store }, createElement(App)),
        document.getElementById('root')
    );
});
