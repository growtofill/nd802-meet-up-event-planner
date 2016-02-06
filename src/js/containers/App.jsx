import React from 'react';
import { connect } from 'react-redux';
import { addEvent, toggleAddEventForm } from '../actions';

import EventList from '../components/EventList.jsx';
import AddEvent from '../components/AddEvent.jsx';

class App extends React.Component {
    render() {
        let { dispatch, events, isAddEventFormVisible } = this.props;

        return (
            <div>
                <div className="App-panel">
                    <div className="App-panel-content">
                        <button
                            className="App-button"
                            onClick={() => dispatch(toggleAddEventForm(!isAddEventFormVisible))}
                            >
                            Add event…
                        </button>
                        {isAddEventFormVisible
                            ? <AddEvent onEventAdd={e => dispatch(addEvent(e.name))} />
                            : null}
                    </div>
                </div>
                <EventList events={events}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        events: state.events,
        isAddEventFormVisible: state.isAddEventFormVisible
    };
}

export default connect(mapStateToProps)(App);
