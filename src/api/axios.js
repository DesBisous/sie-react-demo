import axios from 'axios'
import * as axiosConfig from '../config/axios.config'
import * as qs from "qs";

// 发送之前需要处理一下数据
axios.defaults.transformRequest = [function (data) {
    let sendData = { ...data };
    return qs.stringify(sendData);
}];

// 拦截请求发射前可以做一些事情
axios.interceptors.request.use((config) => {
    return config
}, (err) => {
    return Promise.reject(err)
});

// 拦截响应后可以做一些事情
axios.interceptors.response.use((response) => {
    let data = response.data;
    return data
}, (err) => {
    return Promise.reject(err)
});

const instance = axios.create({
    baseURL: axiosConfig.BaseURL,
    timeout: axiosConfig.TimeOut,
});

export default instance;