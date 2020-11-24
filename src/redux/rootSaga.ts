import { spawn } from 'redux-saga/effects';

import getPosts from './posts/sagas/getPostsSaga';

function* rootSaga() {
  yield spawn(getPosts);
}

export default rootSaga;
