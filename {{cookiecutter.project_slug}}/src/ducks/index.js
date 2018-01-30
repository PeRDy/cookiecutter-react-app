import { combineReducers } from 'redux';
import login from 'ducks/login';
import user from 'ducks/user';


export default combineReducers({
  login,
  user,
});
