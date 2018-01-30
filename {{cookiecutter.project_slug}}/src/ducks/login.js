import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

// -TYPES
export const LOGIN_USERNAME_SET = '{{ cookiecutter.project_slug }}/login-username/SET';
export const LOGIN_PASSWORD_SET = '{{ cookiecutter.project_slug }}/login-password/SET';
export const LOGIN_ERROR_GENERIC_SET = '{{ cookiecutter.project_slug }}/login-error-generic/SET';
export const LOGIN_ERROR_USERNAME_SET = '{{ cookiecutter.project_slug }}/login-error-username/SET';
export const LOGIN_ERROR_PASSWORD_SET = '{{ cookiecutter.project_slug }}/login-error-password/SET';
export const LOGIN_ERROR_GENERIC_REMOVE = '{{ cookiecutter.project_slug }}/login-error-generic/REMOVE';
export const LOGIN_ERROR_USERNAME_REMOVE = '{{ cookiecutter.project_slug }}/login-error-username/REMOVE';
export const LOGIN_ERROR_PASSWORD_REMOVE = '{{ cookiecutter.project_slug }}/login-error-password/REMOVE';

// -ACTIONS
export const setLoginUsername = createAction(LOGIN_USERNAME_SET);
export const setLoginPassword = createAction(LOGIN_PASSWORD_SET);
export const setLoginErrorGeneric = createAction(LOGIN_ERROR_GENERIC_SET);
export const setLoginErrorUsername = createAction(LOGIN_ERROR_USERNAME_SET);
export const setLoginErrorPassword = createAction(LOGIN_ERROR_PASSWORD_SET);
export const removeLoginErrorGeneric = createAction(LOGIN_ERROR_GENERIC_REMOVE);
export const removeLoginErrorUsername = createAction(LOGIN_ERROR_USERNAME_REMOVE);
export const removeLoginErrorPassword = createAction(LOGIN_ERROR_PASSWORD_REMOVE);

// -STATE
const initialState = {
  username: '',
  password: '',
  error: {
    generic: null,
    username: null,
    password: null,
  },
};

// -REDUCERS
export default handleActions({
  [LOGIN_USERNAME_SET]: (state, { payload }) => ({ ...state, username: payload }),
  [LOGIN_PASSWORD_SET]: (state, { payload }) => ({ ...state, password: payload }),
  [LOGIN_ERROR_GENERIC_SET]: (state, { payload }) => ({ ...state, error: { ...state.error, generic: payload } }),
  [LOGIN_ERROR_USERNAME_SET]: (state, { payload }) => ({ ...state, error: { ...state.error, username: payload } }),
  [LOGIN_ERROR_PASSWORD_SET]: (state, { payload }) => ({ ...state, error: { ...state.error, password: payload } }),
  [LOGIN_ERROR_GENERIC_REMOVE]: state => ({ ...state, error: { ...state.error, generic: null } }),
  [LOGIN_ERROR_USERNAME_REMOVE]: state => ({ ...state, error: { ...state.error, username: null } }),
  [LOGIN_ERROR_PASSWORD_REMOVE]: state => ({ ...state, error: { ...state.error, password: null } }),
}, initialState);

// -SELECTORS
export const selectLogin = state => state.login;
export const selectLoginUsername = createSelector([selectLogin], login => login.username);
export const selectLoginPassword = createSelector([selectLogin], login => login.password);
export const selectLoginError = createSelector([selectLogin], login => login.error);
export const selectLoginErrorGeneric = createSelector([selectLoginError], error => error.generic);
export const selectLoginErrorUsername = createSelector([selectLoginError], error => error.username);
export const selectLoginErrorPassword = createSelector([selectLoginError], error => error.password);
