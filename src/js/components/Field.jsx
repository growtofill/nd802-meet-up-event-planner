import React, { Component, createElement } from 'react';

export default class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {
            validationMessage: ''
        };
    }
    render() {
        let {
            label,
            type,
            children,
            autoComplete,
            required
        } = this.props;
        let { validationMessage } = this.state;
        let classList = [
            'Field-container-input',
            `Field-container-input--${type}`,
            validationMessage ? 'Field-container-input--invalid': ''
        ];

        return (
            <label className="Field">
                <div className="Field-label">{label}</div>
                <div className="Field-container">
                    {createElement(
                        type === 'textarea' ? 'textarea' : 'input',
                        {
                            ref: 'input',
                            className: classList.join` `.trim(),
                            type: type === 'textarea' ? null : type,
                            autoComplete,
                            required,
                            onFocus: () => this.resetValidationMessage(),
                            onBlur: () => this.setValidationMessage(),
                            onChange: () => this.setCustomValidity()
                        }
                    )}
                    {
                        validationMessage
                            ? (
                                <div className="Field-container-validationHint">
                                    <div className="Field-container-validationHint-content">
                                        {validationMessage}
                                    </div>
                                </div>
                            )
                            : null
                    }
                    {children}
                </div>
            </label>
        );
    }
    focus() {
        this.refs.input.focus();
    }
    getValue() {
        return this.refs.input.value.trim();
    }
    setValidationMessage() {
        let { validationMessage } = this.refs.input;
        this.setState({ validationMessage });
    }
    resetValidationMessage() {
        this.setState({
            validationMessage: ''
        });
    }
    setCustomValidity() {
        let { requirements } = this.props;
        let { input } = this.refs;

        if (!requirements) return;

        let isRequirementsMatch = requirements.every(r => input.value.match(r));
        let validity = isRequirementsMatch ? '' : 'Please match the requested format.';

        input.setCustomValidity(validity);
    }
}

Field.defaultProps = {
    type: 'text',
    autoComplete: 'on',
    required: true
};
