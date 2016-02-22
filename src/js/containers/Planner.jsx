import React from 'react';
import { connect } from 'react-redux';
import { addEvent, toggleAddEventForm } from '../actions';

import EventList from '../components/EventList.jsx';
import AddEvent from '../components/AddEvent.jsx';

class Planner extends React.Component {
    render() {
        let { dispatch, events, isAddEventFormVisible } = this.props;

        return (
            <div>
                <div className="Planner-panel">
                    <div className="Planner-container">
                        <button
                            className="Planner-button"
                            onClick={() => dispatch(toggleAddEventForm(!isAddEventFormVisible))}
                            >
                            Add event ▾
                        </button>
                    </div>
                </div>
                <div className="Planner-container">
                    {isAddEventFormVisible
                        ? <AddEvent onEventAdd={e => dispatch(addEvent(e))} />
                        : null}
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

export default connect(mapStateToProps)(Planner);
