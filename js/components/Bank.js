import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import Login from './Login.js';
import Account from './Account.js';

export class Bank extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='Banking'>
                <Login />
                <br/>
                <Account />
            </div>
        );
    }
}

export default connect()(Bank);
