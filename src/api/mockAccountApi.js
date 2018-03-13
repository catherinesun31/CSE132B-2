import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
let accounts = [
  {
    userName: "jcruz",
    apt: "Axiom La Jolla",
    fName: "Jonah",
    lName: "Cruz",
    email: "jcruz@example.com",
    password: "12345",
    isLeasingRep: false
  }, 
  {
    userName: "leaser",
    apt: "Axiom La Jolla",
    fName: "Lisa",
    lName: "Leaser",
    email: "lisa@example.com",
    password: "54321",
    isLeasingRep: true
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (account) => {
  return account.fName.toLowerCase() + '-' + account.lName.toLowerCase();
};

class AccountApi {
  static getAllAccounts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], accounts));
      }, delay);
    });
  }

  static signInAccount(account) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        account = Object.assign({}, account); // to avoid manipulating object passed in.

        let existingAccount = getAccount(account.userName);

        if (existingAccount == null) {
          reject (`Username '${account.userName}' does not exist`);
        }

        if (account.password != existingAccount.password) {
          reject (`Password does not match for this username`);
        }

        resolve(existingAccount);

      }, delay);
    });
  }

  static signOutAccount() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve(null);

      }, delay);
    });
  }


  static createAccount(account) {
    account = Object.assign({}, account); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation

        const minAccountsNameLength = 1;
        if (account.fName.length < minAccountsNameLength) {
          reject(`First Name must be at least ${minAccountsNameLength} characters.`);
        }

        if (account.lName.length < minAccountsNameLength) {
          reject(`Last Name must be at least ${minAccountsNameLength} characters.`);
        }

        let existingAccount = getAccount(account.userName);

        if (existingAccount != null) {
          reject(`Username already exists`);
        }

        accounts.push(account);

        resolve(account);
      }, delay);
    });
  }

  

  static deleteAccounts(userName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAccountsToDelete = accounts.findIndex(accounts => {
          return accounts.userName == userName;
        });
        accounts.splice(indexOfAccountsToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

function getAccount (userName) {

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].userName == userName) {
      return accounts[i];
    }
  }

  return null;
}

export default AccountApi;
