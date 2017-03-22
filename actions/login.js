/**
 * @param {object} credentials - Objcet, username and password.
 */
export function updateCredentials(credentials) {
    return {
        type: 'UPDATE_CREDENTIALS',
        credentials
    };
}
