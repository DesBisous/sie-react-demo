import axios from './axios'

function get(url) {
    return axios.get(url);
}

export default get;