import {all, fork} from 'redux-saga/effects';
import actionWatchAuth from './AuthSagas';

export default function* rootSagas() {
    yield all([
      fork(actionWatchAuth),
    ]);
}