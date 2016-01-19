import React from 'react';
import Event from './Event.jsx';

export default class EventList extends React.Component {
    render() {
        return (
            <div className="EventList">
                {this.props.events.map((event, index) =>
                    <Event {...event} key={index}/>
                )}
            </div>
        );
    }
}
