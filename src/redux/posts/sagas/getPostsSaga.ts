import { takeLatest } from 'redux-saga/effects';
import {
  notificationError,
  notificationSuccess,
} from '../../../components/Simple/Notification';
import * as types from '../constants';

function* showSuccessMessage() {
  yield notificationSuccess({ message: 'Successfully fetched' });
}

function* showErrorMessage() {
  yield notificationError({ message: 'Error while fetching data' });
}

export default function* watcher() {
  yield takeLatest(types.GET_POSTS_SUCCESS, showSuccessMessage);
  yield takeLatest(types.GET_POSTS_FAILURE, showErrorMessage);
}
