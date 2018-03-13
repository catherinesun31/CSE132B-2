import AccountApi from '../api/mockAccountApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function signInAccountSuccess(account) {
  return {type: types.SIGN_IN_USER_SUCCESS, account};
}

export function createAccountSuccess(account) {
  return {type: types.CREATE_USER_SUCCESS, account};
}

export function loadAccountsSuccess(accounts) {
  return {type: types.LOAD_USERS_SUCCESS, accounts};
}

export function signOutAccountSuccess(account) {
  return {type: types.SIGN_OUT_USER_SUCCESS, account};
}

export function signInAccount (account) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AccountApi.signInAccount(account).then(account => {
      dispatch(signInAccountSuccess(account));
    }).catch(error => {
      throw(error);
    });
  };
}

export function signOutAccount () {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AccountApi.signOutAccount().then(account => {
      dispatch(signInAccountSuccess(account));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createAccount (account) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AccountApi.createAccount(account).then(newAccount => {
      dispatch(createAccountSuccess(newAccount));
    }).catch(error => {
      alert(error);
      throw(error);
    });
  };
}

export function loadAccounts() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AccountApi.getAllAccounts().then(accounts => {
      dispatch(loadAccountsSuccess(accounts));
    }).catch(error => {
      throw(error);
    });
  };
}
