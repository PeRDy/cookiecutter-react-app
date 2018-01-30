import API from 'api';
import { removeLoginErrorGeneric, setLoginErrorGeneric, selectLogin } from 'ducks/login';
import { setUserToken, USER_LOGIN_FETCH } from 'ducks/user';
import { call, put, select, takeLatest } from 'redux-saga/effects';

function* login() {
  const { username, password } = yield select(selectLogin);

  try {
    const { token } = yield call(API.IAM.login, {
      username,
      password,
    });
    yield put(removeLoginErrorGeneric());
    yield put(setUserToken(token));
  } catch (error) {
    yield put(setLoginErrorGeneric('Usuario o contraseña incorrecto'));
  }
}

export default function* () {
  yield takeLatest(USER_LOGIN_FETCH, login);
}
