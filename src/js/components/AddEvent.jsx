import React from 'react';

export default class AddEvent extends React.Component {
    render() {
        return (
            <form className="AddEvent" ref="root" onSubmit={e => this.onSubmit(e)}>
                <label className="AddEvent-field">
                    <span className="AddEvent-field-label">Name</span>
                    <input className="AddEvent-field-input" ref="name" required/>
                </label>
                <label className="AddEvent-field">
                    <span className="AddEvent-field-label">Type</span>
                    <input className="AddEvent-field-input" ref="type" required/>
                </label>
                <label className="AddEvent-field">
                    <span className="AddEvent-field-label">Host</span>
                    <input className="AddEvent-field-input" ref="host" required/>
                </label>
                <label className="AddEvent-field">
                    <span className="AddEvent-field-label">Start date</span>
                    <input className="AddEvent-field-input" type="datetime-local" ref="startDate" required/>
                </label>
                <label className="AddEvent-field">
                    <span className="AddEvent-field-label">End date</span>
                    <input className="AddEvent-field-input" type="datetime-local" ref="endDate" required/>
                </label>
                <label className="AddEvent-field">
                    <span className="AddEvent-field-label">Guest list</span>
                    <textarea
                        className="AddEvent-field-input AddEvent-field-input--multiLine"
                        ref="guests"
                        required
                    ></textarea>
                </label>
                <label className="AddEvent-field">
                    <span className="AddEvent-field-label">Location</span>
                    <input className="AddEvent-field-input" ref="location" required/>
                </label>
                <label className="AddEvent-field">
                    <span className="AddEvent-field-label">Message to guests</span>
                    <textarea
                        className="AddEvent-field-input AddEvent-field-input--multiLine"
                        ref="message"
                    ></textarea>
                </label>
                <button className="AddEvent-button">Add</button>
            </form>
        );
    }
    onSubmit(e) {
        let name = this.refs.name.value.trim();
        let type = this.refs.type.value.trim();
        let host = this.refs.host.value.trim();
        let startDate = this.refs.startDate.value.trim();
        let endDate = this.refs.endDate.value.trim();
        let guests = [this.refs.guests.value.trim()];
        let location = this.refs.location.value.trim();
        let message = this.refs.message.value.trim();

        this.props.onEventAdd({
            name,
            type,
            host,
            startDate,
            endDate,
            guests,
            location,
            message
        });

        this.refs.root.reset();
        e.preventDefault();
    }
}
