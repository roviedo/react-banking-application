import { setCookie } from '../js/utils.js';
import { loadAccountData } from './account.js'

/**
 * @param {object} credentials - Objcet, username and password.
 */
export function updateCredentials(credentials) {
    return {
        type: 'UPDATE_CREDENTIALS',
        credentials
    };
}

/**
 * @param {object} credentials - Objcet, username and password.
 */
export function isLoggedIn(isLoggedIn) {
    return {
        type: 'IS_USER_LOGGED_IN',
        isLoggedIn
    };
}

export function userLogin(credentials) {
    // return dispatch => {
    //     let object = {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             'username': credential.email,
    //             'password': credential.password
    //         })
    //     };
    //
    //     fetch('http://authEndpoint.com/', object)
    //       .then(response => response.json())
    //       .then(json => dispatch(loadData(json)))
    //       .then(json => setCookie(json.sessionId))
    //       .catch((error) => {
    //           console.error(error);
    //           return error;
    //           // TODO: Return errorCallback
    //       });
    // }
    const data = {
        accountData: {
            accountId: 12345,
            balance: 12000,
            name: 'Raul Oviedo',
            transactions: [
                {   transactionId: 1234,
                    transactionType: 'withdrawal',
                    amount: 200,
                    date: '12/1/2016'
                },
                {
                    transactionId: 1235,
                    transactionType: 'deposit',
                    amount: 400,
                    date: '12/23/2016'
                }
            ]
        }
    }
    return dispatch => {
        const sessionId = 'ae345vbc34567';
        dispatch(loadAccountData(data));
        setCookie('sessionId', sessionId, 1);
        dispatch(isLoggedIn(true));
    }
}
