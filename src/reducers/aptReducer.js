import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function aptReducer(state = initialState.apts, action) {
  switch (action.type) {
    
    case types.LOAD_APTS_SUCCESS:
      return action.apts;

    default:
      return state;
  }
}
