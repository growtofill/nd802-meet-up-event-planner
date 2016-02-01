import React from 'react';

export default class AddEvent extends React.Component {
    render() {
        return (
            <div>
                <input ref="input"/>
                <button type="button" onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        );
    }
    handleClick() {
        let node = this.refs.input;
        let name = node.value.trim();

        this.props.onEventAdd(name);
        node.value = '';
    }
}
