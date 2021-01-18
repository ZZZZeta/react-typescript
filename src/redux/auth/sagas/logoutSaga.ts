import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants';

function* removeToken() {
  yield localStorage.removeItem('token');
}

export default function* watcher() {
  yield takeLatest(types.LOGOUT_USER, removeToken);
}
