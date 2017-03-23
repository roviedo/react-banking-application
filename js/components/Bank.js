import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import Login from './Login.js';
import Account from './Account.js';
import { getCookie, deleteCookie } from '../utils.js';
import { isUserLoggedIn } from '../../actions/login.js';
import { loadAccountData } from '../../actions/account.js';

export class Bank extends Component {
    constructor(props) {
        super(props);
        this._handleLogout = this._handleLogout.bind(this);
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
        //The logout button should be in a navbar but styles below will
        // position in top right corner
        var logoutButtonStyle = {
            position: "absolute",
            top: 20,
            right: 20
        };

        // Change Account and Login components to use React Router
        let entryComponent;
        if (this.props.login.isLoggedIn) {
            entryComponent = (<Account />);
        } else {
            entryComponent = (<Login />);
        }
        return (
            <div className='Banking'>
                <div style={ logoutButtonStyle }>
                    <Button secondary onClick={ this._handleLogout }>Logout</Button>
                </div>
                { entryComponent }
            </div>
        );
    }

    _handleLogout() {
        const sessionId = getCookie('sessionId');
        deleteCookie(sessionId);
        // this.props.isUserLoggedIn({isLoggedIn: false});
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
