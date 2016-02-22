import React, { Component } from 'react';

const minPasswordLength = 8;
const passwordRequirements = [
    /[a-z]/,
    /[A-Z]/,
    /\d/
];

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            passwordLength: 0,
            isRequirementsMatch: false
        };
    }
    render() {
        let {
            passwordLength,
            isRequirementsMatch
        } = this.state;

        return (
            <form className="Login" action="." method="POST" onSubmit={e => this.onSubmit(e)} ref="root">
                <label className="Login-field">
                    <span className="Login-field-label">Name</span>
                    <input type="text" className="Login-field-input" autoComplete="name" required/>
                </label>
                <label className="Login-field">
                    <span className="Login-field-label">Email</span>
                    <input type="email" className="Login-field-input" ref="email" autoComplete="email" required/>
                </label>
                <label className="Login-field">
                    <span className="Login-field-label">Password</span>
                    <div className="Login-field-container">
                        <input
                            type="password"
                            className="Login-field-input"
                            ref="password"
                            autoComplete="new-password"
                            onChange={e => this.onPasswordChange(e)}
                            required
                        />
                        <progress
                            className="Login-field-progress"
                            max={minPasswordLength}
                            value={passwordLength}
                        />
                    </div>
                </label>
                <button type="submit" className="Login-button" ref="submitButton">Register</button>
            </form>
        );
    }
    onSubmit(e) {
        let email = this.refs.email.value.trim();
        this.props.onUserLogin(email);
        e.preventDefault();
    }
    onPasswordChange(e) {
        let password = e.target.value;
        let isRequirementsMatch = passwordRequirements.every(r => password.match(r));

        this.setState({
            passwordLength: password.length,
            isRequirementsMatch
        });
    }
}
