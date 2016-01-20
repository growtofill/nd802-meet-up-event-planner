import React from 'react';
import { connect } from 'react-redux';

import EventList from '../components/EventList.jsx';

class App extends React.Component {
    render() {
        let { events } = this.props;

        return (
            <div>
                <EventList events={events}/>
            </div>
        );
    }
}

function select({ events }) {
    return { events };
}

export default connect(select)(App);
