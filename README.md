# react-banking-application

## React Banking Application

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
