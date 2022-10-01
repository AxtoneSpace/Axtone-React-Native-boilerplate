import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from '../../Services/ApiServices';
import {Types} from '../Constans';
import {AuthActions} from '../Redux/AuthReducer';

function* doLogin(data) {
  try {
    const {payload} = data;
    const response = yield call(API.post, URL.login, payload);

    yield put(AuthActions.doLoginSuccess(response.data));
  } catch (error) {
    yield put(AuthActions.doLoginSuccess([]));
  }
}

export default function* actionWatchAuth() {
  yield takeLatest(Types.POST_LOGIN_REQUEST, doLogin);
}
