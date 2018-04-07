import { all, takeEvery } from 'redux-saga/effects'
import * as asyncTypes from '../constants/async'
import getGrid from './grid'
import getLocal from './local'

export default function* rootSaga() {
    yield all([
        takeEvery(asyncTypes.ASYNC_WELFARE_REQUEST, getGrid),
        takeEvery(asyncTypes.ASYNC_LOCAL_REQUEST, getLocal),
    ])
}