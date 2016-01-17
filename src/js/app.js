import { createElement } from 'react';
import { render } from 'react-dom';

import Planner from './components/planner.jsx';

document.addEventListener('DOMContentLoaded', () => {
    render(
        createElement(Planner),
        document.getElementById('app')
    );
});
