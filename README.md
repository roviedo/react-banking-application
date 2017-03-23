## React Banking Application
<table>
  <tr>
    <th>Author:</th>
    <td>Raul Oviedo</td>
  </tr>
</table>

### System Requirements
Mac OSX or Linux

### Installation
- Get node + npm from https://nodejs.org/en/download/ and go through installation process of it.
- Install webpack https://webpack.js.org/guides/installation/
- Do the following from your bash shell
```
cd into banking_app
npm install
```

### Running the application
- run following two commands in seperate shell tabs.
```
npm run dev
webpack --watch
go to browser: http://localhost:8000
```

### Running The Tests
- Do the following from your bash shell
```
cd into banking_app
npm test
```

### Getting Started
Refer to accounts.json file for dummy users I have created for logging into
their respective bank accounts. The data structure of the account is
key : username, value: nested structure of account
sample provided below

```
"raul": {
    "password": 1234,
    "accountId": 12345,
    "balance": 12000,
    "name": "Raul Oviedo",
    "transactions": [
        {   "transactionId": 1234,
            "transactionType": "withdrawal",
            "amount": 200,
            "date": "12/01/2016"
        },
        {
            "transactionId": 1235,
            "transactionType": "deposit",
            "amount": 400,
            "date": "12/23/2016"
        }
    ]
}
```
 ### Logins to use to test application
```
raul
1234

john123
12345

cindy44
54321
```

### Issues
Since we don't have a server, once you refresh the page all transactions
are reset since the data is static loaded accounts.json, however this data would
be fetched from Database through server request.

Logging out not working in Chrome, need to pull up developer console, go to application,
then cookies and delete sessionId cookie and refresh browser.
