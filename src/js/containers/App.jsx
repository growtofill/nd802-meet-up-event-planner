import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions.js';

import Planner from '../containers/Planner.jsx';
import Login from '../components/Login.jsx';

export default class App extends Component {
    render() {
        let { loggedInAs, onUserLogin } = this.props;

        return (
            <div className="App">
                {loggedInAs ? <Planner/> : <Login onUserLogin={onUserLogin}/>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loggedInAs: state.loggedInAs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onUserLogin: email => {
            dispatch(login(email))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
