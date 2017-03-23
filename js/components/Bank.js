import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import Login from './Login.js';
import Account from './Account.js';
import { getCookie } from '../utils.js';
import { isUserLoggedIn } from '../../actions/login.js';
import { loadAccountData } from '../../actions/account.js';

export class Bank extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const sessionId = getCookie('sessionId');
        let isLoggedIn = false;
        if (sessionId) {
            isLoggedIn = true;
            this.props.loadAccountData({sessionId: sessionId});
        }
        this.props.isUserLoggedIn({isLoggedIn: isLoggedIn});
    }

    render() {
        let entryComponent;
        if (this.props.login.isLoggedIn) {
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
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return {
        isUserLoggedIn(isLoggedIn) {
            dispatch(isUserLoggedIn(isLoggedIn));
        },
        loadAccountData(sessionId) {
            dispatch(loadAccountData(sessionId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bank);
