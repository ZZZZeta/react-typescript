import { takeLatest, select } from 'redux-saga/effects';
import * as types from '../constants';
import { tokenSelector } from "../selectors";

function* saveToken() {
  const token = yield select(tokenSelector);
  yield localStorage.setItem('token', token)
}

export default function* watcher() {
  yield takeLatest(types.LOGIN_USER_SUCCESS, saveToken);
}
