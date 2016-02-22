import React, { Component } from 'react';

const minPasswordLength = 8;
const passwordRequirements = [
    /\d/,
    /[A-Z]/,
    /[a-z]/
];

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            passwordLength: 0,
            nameValidationMessage: '',
            emailValidationMessage: '',
            passwordValidationMessage: ''
        };
    }
    componentDidMount() {
        this.refs.name.focus();
    }
    render() {
        let {
            passwordLength,
            nameValidationMessage,
            emailValidationMessage,
            passwordValidationMessage
        } = this.state;

        return (
            <form className="Login" action="." method="POST" onSubmit={e => this.onSubmit(e)} ref="root">
                <label className="Login-field">
                    <span className="Login-field-label">Name</span>
                    <input
                        type="text"
                        name="name"
                        className={`Login-field-input ${nameValidationMessage ? ' Login-field-input--invalid' : ''}`}
                        ref="name"
                        autoComplete="name"
                        onFocus={e => this.resetValidationMessage(e)}
                        onBlur={e => this.setValidationMessage(e)}
                        required
                    />
                    {nameValidationMessage
                        ? <span className="Login-field-validationHint">{nameValidationMessage}</span>
                        : null}
                </label>
                <label className="Login-field">
                    <span className="Login-field-label">Email</span>
                    <input
                        type="email"
                        name="email"
                        className={`Login-field-input ${emailValidationMessage ? ' Login-field-input--invalid' : ''}`}
                        ref="email"
                        autoComplete="email"
                        onFocus={e => this.resetValidationMessage(e)}
                        onBlur={e => this.setValidationMessage(e)}
                        required
                    />
                    {emailValidationMessage
                        ? <span className="Login-field-validationHint">{emailValidationMessage}</span>
                        : null}
                </label>
                <label className="Login-field">
                    <span className="Login-field-label">Password</span>
                    <div className="Login-field-container">
                        <input
                            type="password"
                            name="password"
                            className={`Login-field-input ${passwordValidationMessage ? ' Login-field-input--invalid' : ''}`}
                            ref="password"
                            autoComplete="new-password"
                            onFocus={e => this.resetValidationMessage(e)}
                            onBlur={e => this.setValidationMessage(e)}
                            onChange={e => this.onPasswordChange(e)}
                            required
                        />
                        <progress
                            className="Login-field-progress"
                            max={minPasswordLength}
                            value={passwordLength}
                        />
                        <small>
                            Use a digit, an upper-case and a lower-case letter. At least 8
                            characters long.
                        </small>
                    </div>
                    {passwordValidationMessage
                        ? <span className="Login-field-validationHint">{passwordValidationMessage}</span>
                        : null}
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
        let element = e.target;
        let password = e.target.value;
        let isRequirementsMatch = passwordRequirements.every(r => password.match(r));
        let validity = isRequirementsMatch ? '' : 'Please match the requested format.';

        element.setCustomValidity(validity);

        this.setState({
            passwordLength: password.length
        });
    }
    setValidationMessage(e) {
        let { name, validationMessage } = e.target;

        this.setState({
            [name + 'ValidationMessage']: validationMessage
        });
    }
    resetValidationMessage(e) {
        let { name } = e.target;
        this.setState({
            [name + 'ValidationMessage']: ''
        })
    }
}
