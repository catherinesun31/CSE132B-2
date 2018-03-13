import AptApi from '../api/mockAptApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';


export function loadAptsSuccess(apts) {
  return {type: types.LOAD_APTS_SUCCESS, apts};
}

export function loadApts() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AptApi.getAllApts().then(apts => {
      dispatch(loadAptsSuccess(apts));
    }).catch(error => {
      throw(error);
    });
  };
}
