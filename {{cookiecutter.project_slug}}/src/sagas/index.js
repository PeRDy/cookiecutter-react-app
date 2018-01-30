import { all } from 'redux-saga/effects';
import watchLogin from 'sagas/login';

export default function* () {
  yield all([
    watchLogin(),
  ]);
}
