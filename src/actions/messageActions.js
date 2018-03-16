import MessageApi from '../api/mockMessageApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadMessagesSuccess(messages) {
    return {type: types.LOAD_MESSAGES_SUCCESS, messages};
}

export function addMessageSuccess(message) {
    return {type: types.ADD_MESSAGE_SUCCESS, message};
}

export function addMessage (message) {
    return dispatch => {
      dispatch(beginAjaxCall());
      return MessageApi.addMessage(message).then(newMessage => {
        dispatch(addMessageSuccess(newMessage));
      }).catch(error => {
        alert(error);
        throw(error);
      });
    };
}

export function loadMessages() {
    return dispatch => {
      dispatch(beginAjaxCall());
      return MessageApi.getAllMessages().then(messages => {
        dispatch(loadMessagesSuccess(messages));
      }).catch(error => {
        throw(error);
      });
    };
  }
  
  