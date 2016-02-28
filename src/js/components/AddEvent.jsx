import React, { Component } from 'react';
import Field from '../components/Field.jsx';

const { Circle, places } = google.maps;
const { Autocomplete } = places;

export default class AddEvent extends Component {
    componentDidMount() {
        let { name } = this.refs;

        if (!navigator.geolocation) {
            name.focus();
            return;
        }

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                this.coords = coords;
                name.focus();
            },
            () => name.focus()
        );
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
                <Field
                    ref="location"
                    label="Location"
                    autoComplete="off"
                    placeholder="Start typing to see suggestions"
                    onMount={refs => this.onLocationMount(refs)}
                    onInputFocus={e => this.onLocationInputFocus(e)}
                />
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
    onLocationMount({ input }) {
        this.autocomplete = new Autocomplete(
            input,
            { types: ['geocode'] }
        );
    }
    onLocationInputFocus() {
        if (!this.coords) return;

        let { latitude, longitude, accuracy } = this.coords;
        let center = {
            lat: latitude,
            lng: longitude
        };
        let circle = new Circle({
            center,
            radius: accuracy
        });

        this.autocomplete.setBounds(circle.getBounds());
    }
}
