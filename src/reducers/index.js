import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import login from './loginReducer';
import accounts from './accountReducer';
import apts from './aptReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  apts,
  accounts,
  login,
  ajaxCallsInProgress
});

export default rootReducer;
