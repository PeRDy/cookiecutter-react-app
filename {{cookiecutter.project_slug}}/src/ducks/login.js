import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

// -TYPES
export const LOGIN_TAB_SET = '{{ cookiecutter.project_slug }}/login-tab/SET';

// -ACTIONS
export const setLoginTab = createAction(LOGIN_TAB_SET);

// -STATE
const initialState = {
  tab: 0,
};

// -REDUCERS
export default handleActions({
  [LOGIN_TAB_SET]: (state, action) => ({ ...state, tab: action.payload }),
}, initialState);

// -SELECTORS
export const selectLogin = state => state.login;
export const selectLoginTab = createSelector([selectLogin], login => login.tab);
