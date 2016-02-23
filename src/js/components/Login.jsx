import React, { Component } from 'react';
import Field from '../components/field.jsx';

const requirements = [
    /\d/,
    /[A-Z]/,
    /[a-z]/,
    /.{8,}/
];

export default class Login extends Component {
    componentDidMount() {
        this.refs.name.focus();
    }
    render() {
        return (
            <form className="Login" action="." method="POST" onSubmit={e => this.onSubmit(e)} ref="root">
                <Field ref="name" label="Name" autoComplete="name"/>
                <Field ref="email" label="Email" type="email" autoComplete="email"/>
                <Field
                    ref="password"
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                    requirements={requirements}
                >
                    <small>
                        Use a digit, an upper-case and a lower-case letter. At least 8
                        characters long.
                    </small>
                </Field>
                <button type="submit" className="Login-button" ref="submitButton">Register</button>
            </form>
        );
    }
    onSubmit(e) {
        let email = this.refs.email.getValue();
        this.props.onUserLogin(email);
        e.preventDefault();
    }
}
