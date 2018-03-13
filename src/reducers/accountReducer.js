import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.accounts, action) {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.accounts;

    case types.CREATE_USER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.account)
      ];

    default:
      return state;
  }
}
