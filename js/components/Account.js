import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Label, Table } from 'semantic-ui-react';
import { updateDeposit, updateWithdrawal, depositCurrency, withdrawCurrency } from '../../actions/account.js';

export class Account extends Component {
    constructor(props) {
        super(props);

        this._handleDepositChange = this._handleDepositChange.bind(this);
        this._handleWithdrawalChange = this._handleWithdrawalChange.bind(this);
        this._handleDeposit = this._handleDeposit.bind(this);
        this._handleWithdrawal = this._handleWithdrawal.bind(this);
    }

    render() {
        //TODO: Added logout component to this page that will trigger deleting cookie currently not working in chrome.
        const accountObject = this.props.account.accountData;

        let accountInfo = (
            <Table stripped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>AccountId</Table.HeaderCell>
                        <Table.HeaderCell>Account Balance</Table.HeaderCell>
                    </Table.Row>
              </Table.Header>

              <Table.Body>
                    <Table.Row>
                        <Table.Cell>{ accountObject.name }</Table.Cell>
                        <Table.Cell>{ accountObject.accountId }</Table.Cell>
                        <Table.Cell>$ { accountObject.balance }</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )

        let accountTransactions = (
            <Table stripped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>TransactionId</Table.HeaderCell>
                        <Table.HeaderCell>TransactionType</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                    </Table.Row>
              </Table.Header>

              <Table.Body>
                { accountObject.transactions.map((transaction) =>
                    <Table.Row>
                        <Table.Cell>{ transaction.transactionId }</Table.Cell>
                        <Table.Cell>{ transaction.transactionType }</Table.Cell>
                        <Table.Cell>$ { transaction.amount }</Table.Cell>
                        <Table.Cell>{ transaction.date }</Table.Cell>
                    </Table.Row>
                ) }
                </Table.Body>
            </Table>
        );
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
                { accountInfo }
                { accountTransactions }
            </div>
        );
    }

    _handleDeposit() {
        this.props.depositCurrency(
            {
                currency: this.props.account.deposit
            }
        );
    }

    _handleWithdrawal() {
        this.props.withdrawCurrency(
            {
                currency: this.props.account.withdrawal
            }
        );
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
        },
        depositCurrency(currency) {
            dispatch(depositCurrency(currency));
        },
        withdrawCurrency(currency) {
            dispatch(withdrawCurrency(currency));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
