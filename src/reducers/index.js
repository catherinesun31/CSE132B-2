import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import login from './loginReducer';
import accounts from './accountReducer';
import apts from './aptReducer';
import messages from './messageReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  apts,
  accounts,
  login,
  messages,
  ajaxCallsInProgress
});

export default rootReducer;
