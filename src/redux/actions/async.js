import * as actionTypes from '../constants/async'

// redux-saga
export const gridEvery = (url) => ({
    type: actionTypes.ASYNC_WELFARE_REQUEST,
    url
});
// 获取本地json数据
export const localData = () => ({
    type: actionTypes.ASYNC_LOCAL_REQUEST,
    url: '/static/json/celebrity.json'
});
// 获取本地json数据,重置
export const localUpdateData = () => ({
    type: actionTypes.ASYNC_LOCAL_REQUEST_UPDATE,
    url: '/static/json/celebrity.json'
});