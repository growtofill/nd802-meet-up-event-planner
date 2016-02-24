import React, { Component } from 'react';
import Field from '../components/Field.jsx';

export default class AddEvent extends Component {
    componentDidMount() {
        this.refs.name.focus();

        this.state = {
            nameValidationMessage: '',
            typeValidationMessage: '',
            hostValidationMessage: '',
            startDateValidationMessage: '',
            endDateValidationMessage: '',
            guestListValidationMessage: '',
            locationValidationMessage: ''
        }
    }
    render() {
        return (
            <form className="AddEvent" ref="root" onSubmit={e => this.onSubmit(e)}>
                <Field ref="name" label="Name"/>
                <Field ref="type" label="Type"/>
                <Field ref="host" label="Host"/>
                <Field ref="startDate" label="Start date" type="datetime-local"/>
                <Field ref="endDate" label="End date" type="datetime-local"/>
                <Field ref="guests" label="Guest list" type="textarea">
                    <small>New-line separated.</small>
                </Field>
                <Field ref="host" label="Host"/>
                <Field ref="message" label="Message to guests" type="textarea" required="false"/>
                <button className="AddEvent-button">Add</button>
            </form>
        );
    }
    onSubmit(e) {
        let name = this.refs.name.getValue();
        let type = this.refs.type.getValue();
        let host = this.refs.host.getValue();
        let startDate = this.refs.startDate.getValue();
        let endDate = this.refs.endDate.getValue();
        let guests = this.refs.guests.getValue().split`\n`;
        let location = this.refs.location.getValue();
        let message = this.refs.message.getValue();

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
