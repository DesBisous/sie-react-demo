import { delay } from "redux-saga";
import { call, put, all, takeEvery } from 'redux-saga/effects'
import * as asyncTypes from '../constants/async'
import * as toastTypes from '../constants/toast'
import get from '../../api/get';

function* getGrid(action) {
    console.log('22');
    yield put({type: toastTypes.TOAST_SHOW, data: 'loading...'});// 加载中...
    try {
        const res = yield call(get, action.url);
        yield put({type: asyncTypes.ASYNC_WELFARE_SUCCESS, data: res.data.results});
        yield delay(2000);
        yield put({type: toastTypes.TOAST_HIDE, data: { success: true, content: 'success' }})
    } catch(err) {
        // if(err instanceof SagaCancellationException)
            console.log('请求手动被取消');
        yield put({type: asyncTypes.ASYNC_WELFARE_ERROR});
        yield put({type: toastTypes.TOAST_ERROR, err: { status: true, msg: JSON.stringify(err) }})
    }
}


export default function* rootSaga() {
    yield all([
        takeEvery(asyncTypes.ASYNC_WELFARE_REQUEST, getGrid)
    ])
}