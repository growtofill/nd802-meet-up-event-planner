import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <form className="Login" onSubmit={e => this.onSubmit(e)}>
                <label className="">
                    <span className="">Name</span>
                    <input type="text" className=""/>
                </label>
                <label className="">
                    <span className="">Email</span>
                    <input type="text" className="" ref="email"/>
                </label>
                <label className="">
                    <span className="">Password</span>
                    <input type="password" className=""/>
                </label>
                <label className="">
                    <span className="">Repeat password</span>
                    <input type="password" className=""/>
                </label>
                <button>Register</button>
            </form>
        );
    }
    onSubmit(e) {
        let email = this.refs.email.value.trim();
        this.props.onUserLogin(email);
        e.preventDefault();
    }
}
