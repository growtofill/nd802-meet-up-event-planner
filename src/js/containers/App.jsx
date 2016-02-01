import React from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions';

import EventList from '../components/EventList.jsx';
import AddEvent from '../components/AddEvent.jsx';

class App extends React.Component {
    render() {
        let { dispatch, events } = this.props;

        return (
            <div>
                <AddEvent onEventAdd={name => dispatch(addEvent(name))} />
                <EventList events={events}/>
            </div>
        );
    }
}

function select({ events }) {
    return { events };
}

export default connect(select)(App);
