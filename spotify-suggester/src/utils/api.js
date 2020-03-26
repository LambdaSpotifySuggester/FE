import axios from 'axios';

const getToken = () => {
    return localStorage.getItem('token');
}

export default function api() {
    return axios.create({
        baseURL: '',
        headers: {
            Authorization: getToken()
        }
    })
}