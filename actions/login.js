import { setCookie } from '../js/utils.js';
import accounts from '../accounts.json';

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
export function isUserLoggedIn(isLoggedIn) {
    return {
        type: 'IS_USER_LOGGED_IN',
        isLoggedIn
    };
}

export function userLogin(credentials) {
    /* We would like to authenticate user in some way below, then the auth
    endpoint can return a token or session that we store in browser local storage
    or cookies.
    */

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



    //Faking authenticating user below with dummy data from accounts.json file
    let data;
    if (typeof(accounts[credentials.username]) !== 'undefined') {
        data = accounts[credentials.username];
        if (data["password"] != credentials.password) {
            alert("Invalid password try again");
            return;
        }
    } else {
        alert("Invalid user try again");
        return;
    }

    return dispatch => {
        const sessionId = data["sessionId"];
        setCookie('sessionId', sessionId, 1);
        dispatch(isUserLoggedIn({isLoggedIn: true}));
    }
}
