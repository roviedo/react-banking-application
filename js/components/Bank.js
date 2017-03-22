import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Bank extends Component {
    render() {
        console.log('props', this.props);
        return (
            <div className='Banking'>
                Bankinggggg
                <img src="test.com" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isCoolTest: state.account.get('isCoolTest')
    };
}

export default connect(mapStateToProps)(Bank);
