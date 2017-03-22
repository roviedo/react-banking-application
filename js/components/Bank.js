import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import Login from './Login.js';
import Account from './Account.js';
import { getCookie } from '../utils.js'

export class Bank extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const isLoggedIn = this._isLoggedIn();
        this.setState({isLoggedIn});
    }

    render() {
        let entryComponent;
        if (this.state.isLoggedIn) {
            entryComponent = (<Account />);
        } else {
            entryComponent = (<Login />);
        }
        return (
            <div className='Banking'>
                { entryComponent }
            </div>
        );
    }

    _isLoggedIn() {
        const sessionId = getCookie('sessionId');
        if (sessionId) {
            return true;
        }
        return false;
    }
}

export default connect()(Bank);
