import { call, put } from 'redux-saga/effects'
import * as asyncTypes from '../constants/async'
import axios from 'axios'

export default function* getLocal(action) {
    try {
        const res = yield call(axios.get, action.url);
        yield put({type: asyncTypes.ASYNC_LOCAL_SUCCESS, data: res});
    } catch(err) {
        yield put({type: asyncTypes.ASYNC_LOCAL_ERROR});
    }
}


