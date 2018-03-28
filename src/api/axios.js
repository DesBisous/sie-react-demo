import axios from 'axios'

var instance = axios.create({
    baseURL: 'http://gank.io/api/data/',
    timeout: 2000,
});

export default instance;