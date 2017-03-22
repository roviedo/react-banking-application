import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import { updateCredentials } from '../../actions/login.js';
import { userLogin } from '../../actions/login.js';

export class Login extends Component {
    constructor(props) {
        super(props);

        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._handleLogin = this._handleLogin.bind(this);
    }

    render() {
        console.log('props', this.props);
        return (
            <div className='login'>
                <h3>Login to Your Bank Account</h3>
                <Input focus onChange={ this._handleUsernameChange }/>
                <br/>
                <Input focus onChange={ this._handlePasswordChange }/>
                <br/>
                <Button primary onClick={ this._handleLogin }>Submit</Button>
            </div>
        );
    }

    _handleUsernameChange(event) {
        this.props.updateCredentials(
            {
                username: event.target.value
            }
        );
    }

    _handlePasswordChange(event) {
        this.props.updateCredentials(
            {
                password: event.target.value
            }
        );
    }

    _handleLogin() {
        this.props.userLogin(
            {
                username: this.props.login.username,
                password: this.props.login.password
            }
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
        updateCredentials(credentials) {
            dispatch(updateCredentials(credentials));
        },
        userLogin(credentials) {
            dispatch(userLogin(credentials));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
