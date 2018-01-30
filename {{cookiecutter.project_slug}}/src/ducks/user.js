import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

// -TYPES
export const USER_LOGIN_FETCH = '{{ cookiecutter.project_slug }}/user-login/FETCH';
export const USER_TOKEN_SET = '{{ cookiecutter.project_slug }}/user-token/SET';

// -ACTIONS
export const fetchUserLogin = createAction(USER_LOGIN_FETCH);
export const setUserToken = createAction(USER_TOKEN_SET);

// -STATE
const initialState = {
  token: null,
};

// -REDUCERS
export default handleActions({
  [USER_TOKEN_SET]: (state, { payload }) => ({ ...state, token: payload }),
}, initialState);

// -SELECTORS
export const selectUser = state => state.user;
export const selectUserToken = createSelector([selectUser], user => user.token);
export const selectUserIsLogged = createSelector([selectUserToken], token => token !== null);

