import React from 'react';

export default class Event extends React.Component {
    render() {
        let {
            name,
            type,
            host,
            startDate,
            endDate,
            guests,
            location,
            message
        } = this.props;

        return (
            <div className="Event">
                <h1>{name}</h1>
                <div className="">{type} hosted by {host}</div>
                <div className="">{startDate}–{endDate}</div>
                <div className="">
                    <ul>
                        {guests.map((guest, i) => (
                            <li key={i}>{guest}</li>
                        ))}
                    </ul>
                </div>
                <div className="">{location}</div>
                <div className="">{message}</div>
            </div>
        );
    }
}
