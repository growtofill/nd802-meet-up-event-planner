import React from 'react';
import moment from 'moment';

export default class Event extends React.Component {
    render() {
        let {
            name,
            type,
            host,
            guests,
            location,
            message
        } = this.props;

        let start = moment(this.props.startDate);
        let end = moment(this.props.endDate);
        let duration = moment.duration(end.diff(start));

        return (
            <div className="Event">
                <h1>{name}</h1>
                <div className="Event-row">
                    <div className="Event-row-col">
                        <div className="Event-section">{type} hosted by {host}</div>
                        {
                            start.format('YYYY-MM-DD') === end.format('YYYY-MM-DD') ? (
                                <div className="Event-section">
                                    <div>{start.format('dddd, MMMM D, YYYY')}</div>
                                    <div>{start.format('H:mm')}—{end.format('H:mm')}</div>
                                    <div>{duration.humanize()}</div>
                                </div>
                            ) : (
                                <div className="Event-section">
                                    <div>{start.format('dddd, MMMM D, YYYY (H:mm)')}</div>
                                    <div>{end.format('dddd, MMMM D, YYYY (H:mm)')}</div>
                                    <div>{duration.humanize()}</div>
                                </div>
                            )
                        }
                        <div className="Event-section">
                            Guest list:
                            <ul className="Event-list">
                                {guests.map((guest, i) => (
                                    <li key={i}>{guest}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="Event-row-col">
                        <iframe className="Event-map" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDKgf3fZwQC672J_mtzX0R9JyQ__CtYARQ
    &q=${encodeURIComponent(location)}`}></iframe>
                        <div className="Event-section">{location}</div>
                    </div>
                </div>
                <div className="">{message}</div>
            </div>
        );
    }
}
