import axios from './axios'

function post(url, param) {
    return axios.post({
        method: "POST",
        url: url,
        data: param
    });
}
export default post;