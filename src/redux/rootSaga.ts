import { spawn } from 'redux-saga/effects';

function* rootSaga() {
    yield spawn(() => console.log('Run root saga'));
}

export default rootSaga;
