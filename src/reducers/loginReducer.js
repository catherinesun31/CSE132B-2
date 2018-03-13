import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case types.SIGN_IN_USER_SUCCESS:
      return action.account;

    case types.CREATE_USER_SUCCESS:
      return action.account;

    case types.SIGN_OUT_USER_SUCCESS:
      return action.account;

    default:
      return state;
  }
}
