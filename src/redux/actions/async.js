import * as actionTypes from '../constants/async'
import {JsonURL} from "../../config/axios.config";

// redux-saga
export const gridEvery = (url) => ({
    type: actionTypes.ASYNC_WELFARE_REQUEST,
    url
});
// 获取本地json数据
export const localData = () => ({
    type: actionTypes.ASYNC_LOCAL_REQUEST,
    url: JsonURL
});
// 获取本地json数据,重置
export const localUpdateData = () => ({
    type: actionTypes.ASYNC_LOCAL_REQUEST_UPDATE,
    url: JsonURL
});