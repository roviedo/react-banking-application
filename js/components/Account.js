import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Label } from 'semantic-ui-react';
import { updateDeposit, updateWithdrawal } from '../../actions/account.js';

export class Account extends Component {
    constructor(props) {
        super(props);

        this._handleDepositChange = this._handleDepositChange.bind(this);
        this._handleWithdrawalChange = this._handleWithdrawalChange.bind(this);
        this._handleDeposit = this._handleDeposit.bind(this);
        this._handleWithdrawal = this._handleWithdrawal.bind(this);
    }

    render() {
        return (
            <div className='account'>
                <h3>My Bank Accout</h3>
                <Label>Please enter a value to deposit</Label>
                <Input labelPosition='right' type='text' placeholder='Amount' onChange={ this._handleDepositChange }>
                    <Label basic>$</Label>
                    <input />
                    <Label>.00</Label>
                </Input>
                <Button primary onClick={ this._handleDeposit }>Submit</Button>
                <br/>
                <Label>Please enter a value to withdraw</Label>
                <Input labelPosition='right' type='text' placeholder='Amount' onChange={ this._handleWithdrawalChange }>
                    <Label basic>$</Label>
                    <input />
                    <Label>.00</Label>
                </Input>
                <Button primary onClick={ this._handleWithdrawal }>Submit</Button>
                <br/>
            </div>
        );
    }

    _handleDeposit() {
        console.log('handle deposit');
    }

    _handleWithdrawal() {
        console.log('handle withdrawal');
    }

    _handleDepositChange(event) {
        this.props.updateDeposit(
            {
                deposit: event.target.value
            }
        );
    }

    _handleWithdrawalChange(event) {
        this.props.updateWithdrawal(
            {
                withdrawal: event.target.value
            }
        );
    }
}

function mapStateToProps(state) {
    return {
        account: state.account
    };
}


function mapDispatchToProps(dispatch) {
    return {
        updateDeposit(deposit) {
            dispatch(updateDeposit(deposit));
        },
        updateWithdrawal(withdrawal) {
            dispatch(updateWithdrawal(withdrawal));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
